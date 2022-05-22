import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector);

    this._handleFormSubmit = handleFormSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.querySelector(".form").addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._card);
    });
  }
}
