import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

//----------
const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'>
  <a class='gallery__link' href='${original}'>
    <img
      class='gallery__image'
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>;`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    window.addEventListener('keydown', onEscKeyPress);
    event.preventDefault();

    const modalWindow = basicLightbox.create(`
    <div class="modal">
      <img
      class='gallery__image'
      src='${event.target.dataset.source}'
    </div>
`);

    modalWindow.show();

    function onEscKeyPress(event) {
      if (event.code === 'Escape') {
        window.removeEventListener('keydown', onEscKeyPress);
        modalWindow.close();
      }
    }
  }
}
