import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showInfoMessage, showErrorMessage } from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const searchText = event.target.elements['search-text'].value.trim();
    if (!searchText) {
        showInfoMessage('Please enter a search term!');
        return;
    }

    clearGallery();
    showLoader();

    try {
        const images = await getImagesByQuery(searchText);
        if (images.length === 0) {
            showInfoMessage('Sorry, no images found for your query.');
        } else {
            createGallery(images);
        }
    } catch (error) {
        showErrorMessage('Failed to load images. Try again later.');
    } finally {
        hideLoader();
    }
});
