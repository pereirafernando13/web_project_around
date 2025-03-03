import { openFullImagPopup } from "./index.js";

export default class Card {
  constructor({ name, link, handleCardClick }, template) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateHtml = template;
  }

  publicHandleCardClick = (evt) => {
    this._handleCardClick(evt, this._title, this._link);
  };

  _setEventListeners = () => {
    this._elementCard
      .querySelector(".elements__element")
      .addEventListener("click", this.publicHandleCardClick);
  };

  createCard() {
    this._cardTemplate = document.querySelector("#card_template").content;
    this._elementCard = this._cardTemplate.cloneNode(true);
    this._elementCard.querySelector(".elements__element-title").textContent =
      this._name;

    this._elementCard
      .querySelector(".elements__element-image")
      .setAttribute("alt", this._name);
    this._elementCard
      .querySelector(".elements__element-image")
      .setAttribute("src", this._link);

    // const cardTrash = this._elementCard.querySelector(
    //   "elements-element-button-trash"
    // );

    this._setEventListeners();

    // const elements = document.querySelector(".elements");
    // elements.prepend(this._elementCard);
    // //botao like
    // this._elementCard
    //   .querySelector(".elements__element-button-heart")
    //   .addEventListener("click", (event) => {
    //     if (
    //       event.target.getAttribute("src") ===
    //       "./images/elements__image-heart-disble.png"
    //     ) {
    //       return event.target.setAttribute(
    //         "src",
    //         "./images/elements_element-button-heart-like.png"
    //       );
    //     }
    //     return event.target.setAttribute(
    //       "src",
    //       "./images/elements__image-heart-disble.png"
    //     );
    //   });

    // //remove card
    // this._elementCard
    //   .querySelector(".elements-element-button-trash")
    //   .addEventListener("click", (event) => {
    //     event.target.parentElement.remove();
    //   });

    //Abrir/fechar PopupImgFull
    // const openImgFull = document.querySelector(".popup__imgfull-imgbig");
    // const openImgFullTittle = document.querySelector(".popup__imgfull-tittle");

    // this._elementCard
    // .querySelector(".elements__element-image")
    // .addEventListener("click", (event) => {
    //   console.log(event.target);
    //   openImgFull.setAttribute("alt", this._name);
    //   openImgFull.setAttribute("src", this._link);
    //   openImgFullTittle.textContent = this._name;
    //   openFullImagPopup();
    // });

    return this._elementCard;
  }
}
