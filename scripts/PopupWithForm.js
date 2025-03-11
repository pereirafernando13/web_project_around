import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submiting) {
    super(popupSelector);
    this._submiting = submiting;
    this._popup = document.querySelector(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputs = this._formElement.querySelectorAll(".input__text");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submiting(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
