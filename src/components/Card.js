export default class Card {
  constructor({ cardContent, handleCardClick }, template) {
    this._cardContent = cardContent;
    this._name = cardContent.name;
    this._link = cardContent.link;
    this._handleCardClick = handleCardClick;
    this._templateHtml = template;
  }

  publicHandleCardClick = (evt) => {
    this._handleCardClick(evt, this._cardContent);
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

    this._setEventListeners();
    return this._elementCard;
  }
}
