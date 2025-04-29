import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._confirmBtnDel = this._popupElement.querySelector(
      "input__submit-delet"
    );
  }

  open(cardId, elementCard) {
    this._cardId = cardId;
    this._elementCard = elementCard;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    const deleteCardForm = document.querySelector(".input-delet");
    deleteCardForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._submitDelete();
      this.close();
    });
  }

  setSubmitDelete(action) {
    this._submitDelete = action;
  }

  close() {
    super.close();
  }
}
