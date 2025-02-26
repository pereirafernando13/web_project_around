export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(".popup_opened");
    document.addEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );
  }

  close() {
    this._popup.classList.remove(".popup_opened");
    document.removeEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );
  }

  _handleEscClose(event) {
    if (event.key == "Escape") {
      this.close();
    }
  }
}
