export class FormValidator {
  constructor(form, formElement) {
    this._form = form;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._form.inputSelector));
    this._button = this._formElement.querySelector(this._form.submitButtonSelector);
  }

  // Показываем текст ошибки
  _showInputError = (input, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    input.classList.add(this._form.inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  // Убираем текст ошибки
  _hideInputError = (input) => {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    input.classList.remove(this._form.inputErrorClass);
    errorElement.textContent = "";
  };

  // Проверяем инпуты на валидность
  _checkValid = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
      return true;
    } else {
      this._hideInputError(input);
      return false;
    }
  };

  // Проверяем, есть ли невалидные инпуты
  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  // Активируем и дизактивируем кнопку отправки формы
  _toggleButtonDisabled = () => {
    // Проверяем инпуты на валидность
    if (this._hasInvalidInput()) {
      this.addButtonDisabled();
    } else {
      this.removeButtonDisabled();
    }
  };

  addButtonDisabled = () => {
    this._button.classList.add(this._form.inactiveButtonClass);
    this._button.setAttribute("disabled", "");
  };

  removeButtonDisabled = () => {
    this._button.classList.remove(this._form.inactiveButtonClass);
    this._button.removeAttribute("disabled");
  };

  // Прикрепление обработчика к инпутам
  _setEventListeners = () => {
    this._toggleButtonDisabled();

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleButtonDisabled();
        this._checkValid(input);
      });
    });
  };

  resetErrors = () => {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  };

  // Вызываем валидацию
  enableValidation() {
    this._formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    this._setEventListeners();
  }
}
