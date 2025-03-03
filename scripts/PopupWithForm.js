import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submiting) {
    super(popupSelector);
    this._submit = submiting;
    this._popup = document.querySelector(popupSelector);
    this._formElement = this._popup.querySelector(".popup__input");
  }

  _getInputValues() {
    const inputs = this._formElement.querySelectorAll(".popup__form-input");
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submiting(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
