import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryOfImages = document.querySelector(".gallery");

const gallerys = galleryItems
  .map(
    ({ preview, original, description }) => `
  
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");

galleryOfImages.insertAdjacentHTML("beforeend", gallerys);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: true,
});

gallery.on("show.simplelightbox", function () {
  // Do somethingâ€¦
});
