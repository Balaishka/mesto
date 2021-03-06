import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(selector, { handleFormSubmit }) {
    super(selector);

    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".form");
    this._inputList = this._popup.querySelectorAll(".form__text");
  }

  _getInputValues = () => {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  };

  setEventListeners = () => {
    super.setEventListeners();

    this._form.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
    });
  };

  close = () => {
    super.close();
    this._form.reset();
  };
}
