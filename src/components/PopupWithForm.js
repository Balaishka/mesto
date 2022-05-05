import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, { submit }) {
    super(selector);
    this._submit = submit;
  }

  _getInputValues = () => {
    this._formValues = {};

    this._popup.querySelectorAll(".form__text").forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners = () => {
    super.setEventListeners();

    this._popup.querySelector(".form").addEventListener("submit", () => {
      this._submit(this._getInputValues());
    });
  }

  close = () => {
    super.close();
    this._popup.querySelector(".form").reset();
  }
}
