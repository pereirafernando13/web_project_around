import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, titleSelector) {
    super(popupSelector);
    this._imageSelector = document.querySelector(imageSelector);
    this._titleSelector = document.querySelector(titleSelector);
  }

  open({ link, name }) {
    super.open();
    this._imageElement.src = link;
    this._titleElement.textContent = name;
  }
}
