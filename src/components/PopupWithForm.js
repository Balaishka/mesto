import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues = () => {
    this._formValues = {};

    this._popup.querySelectorAll(".form__text").forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  };

  setEventListeners = () => {
    super.setEventListeners();

    this._popup.querySelector(".form").addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close = () => {
    super.close();
    this._popup.querySelector(".form").reset();
  };
}
