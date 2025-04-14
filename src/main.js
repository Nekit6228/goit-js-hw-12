import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  showInfoMessage,
  showErrorMessage,
  lightbox
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryContainer = document.querySelector('.gallery');

let currentQuery = '';
let currentPage = 1;
let totalImagesLoaded = 0;
let totalHits = 0;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const searchText = event.target.elements['search-text'].value.trim();
  if (!searchText) {
    showInfoMessage('Please enter a search term!');
    return;
  }

  currentQuery = searchText;
  currentPage = 1;
  totalImagesLoaded = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showInfoMessage('Sorry, no images found for your query.');
    } else {
      createGallery(data.hits);
      totalImagesLoaded += data.hits.length;

      if (totalImagesLoaded < totalHits) {
        showLoadMoreButton(); 
      }
    }
  } catch (error) {
    showErrorMessage('Failed to load images. Try again later.');
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    createGallery(data.hits);
    totalImagesLoaded += data.hits.length;

    lightbox.refresh();

    const { height: cardHeight } = galleryContainer
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (totalImagesLoaded >= totalHits) {
      showInfoMessage("We're sorry, but you've reached the end of search results.");
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    showErrorMessage('Failed to load more images.');
  } finally {
    hideLoader();
  }
});
