export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    console.log(this._popupElement);
    this._popupElement.classList.add("popup_change_display");
  }

  close() {
    document.removeEventListener("keydown", this._keyHandler);
    this._popupElement.removeEventListener("click", this._clickHandler);
    this._popupElement.classList.remove("popup_change_display");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(evt);
    }
  }

  _handleClickClose(evt) {
    if (
      evt.target.classList.contains("popup__imgfull-button-close") ||
      evt.target.classList.contains("popup_change_display")
    ) {
      this.close(evt);
    }
  }

  setEventListeners() {
    this._clickHandler = (evt) => {
      this._handleClickClose(evt);
    };
    this._popupElement.addEventListener("click", this._clickHandler);
    this._keyHandler = (evt) => {
      this._handleEscClose(evt);
    };
    document.addEventListener("keydown", this._keyHandler);
  }
}
