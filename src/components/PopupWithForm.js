import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, { submit }) {
    super(selector);
    this._submit = submit;
  }

  _getInputValues() {
    const inputsList = this._selector.querySelectorAll(".form__text");
    return inputsList;
  }

  setEventListeners() {
    super.setEventListeners();

    this._selector.addEventListener("submit", () => {
      this._submit();
    });
  }

  close() {
    super.close();
    this._getInputValues().forEach((item) => {
      item.value = "";
    });
  }
}
