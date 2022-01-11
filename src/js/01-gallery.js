import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'

const galerry = document.querySelector(".gallery") 


const galerryItm = galleryItems.map((item) =>  
    `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}"  alt="${item.description}"   />
</a></li>`
).join('')

galerry.insertAdjacentHTML('afterbegin', galerryItm)
let gallery = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});


