import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor({ name, link }, popupSelector) {
    super(popupSelector);
    this._name = name;
    this._link = link;
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    super.open();
    super.setEventListeners();
    this._popupElement.querySelector(".popup__imgfull-imgbig").src = this._link;
    this._popupElement.querySelector(".popup__imgfull-imgbig").alt =
      this._title;
    this._popupElement.querySelector(".popup__imgfull-tittle").textContent =
      this._title;
  }
}
