import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._card);
    });
  }
}
