import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class='gallery__item' href='${original}'>
    <img
      class='gallery__image'
      src='${preview}'
      alt='${description}'
    />
  </a>
;`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: '250',
});
gallery.on('show.simplelightbox');
