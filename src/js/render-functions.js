import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const markup = images
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
            <li class="item">
                <a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}" class="gallery-image">
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${likes}</p>
                    <p><b>Views:</b> ${views}</p>
                    <p><b>Comments:</b> ${comments}</p>
                    <p><b>Downloads:</b> ${downloads}</p>
                </div>
            </li>
            `;
        })
        .join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
}


export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    document.querySelector('.loader').classList.remove('hidden');
}
export function hideLoader() {
    document.querySelector('.loader').classList.add('hidden');
}


export function showInfoMessage(message) {
    iziToast.info({ message });
}
export function showErrorMessage(message) {
    iziToast.error({ message });
}
