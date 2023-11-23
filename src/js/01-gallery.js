// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
import { galleryItems } from './gallery-items';

    
const galleryWharehouse = document.querySelector(".gallery")

galleryWharehouse.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
galleryWharehouse.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}


function handleClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains("gallery__image")) {
        return;
    };

    const originalImageURL = event.target.dataset.source;
    // console.log(originalImageURL);
    
    const lightBox = basicLightbox.create(
        `<img src="${originalImageURL}" width="800" height="600"/>`
    );
    lightBox.show();

    const closeLightBox = (event) => {
            if (event.key === 'Escape') {
                lightBox.close();
                document.removeEventListener('keydown', closeLightBox);
            }
        };
    document.addEventListener('keydown', closeLightBox);

}

console.log(galleryItems);
