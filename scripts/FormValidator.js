import { toggleButtonDisabled, checkValid } from "./index.js";

export class FormValidator {
    constructor(form, formElement) {
        this._form = form;
        this._formElement = formElement;
    }

    _showInputError = (input, errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${input.id}-error`);

        input.classList.add(this._form.inputErrorClass);
        errorElement.textContent = errorMessage;
    }

    _hideInputError = (input) => {
        const errorElement = this._formElement.querySelector(`.${input.id}-error`);

        input.classList.remove(this._form.inputErrorClass);
        errorElement.textContent = "";
    }

    _checkValid = (input) => {
        if (!input.validity.valid) {
            this._showInputError(input, input.validationMessage);
            return true;
          } else {
            this._hideInputError(input);
            return false;
          }
    } 

    _setEventListeners = () => {
        const inputList = Array.from(
            this._formElement.querySelectorAll(this._form.inputSelector)
        );

        inputList.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkValid(input);
            })
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", function (event) {
            event.preventDefault();
        });

        this._setEventListeners();
    }
}