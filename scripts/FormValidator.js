export class FormValidator {
  constructor(form, formElement) {
    this._form = form;
    this._formElement = formElement;
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
  _hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  // Активируем и дизактивируем кнопку отправки формы
  _toggleButtonDisabled = (inputList, buttonElement) => {
    // Проверяем инпуты на валидность
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._form.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "");
    } else {
      buttonElement.classList.remove(this._form.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  };

  // Прикрепление обработчика к инпутам
  _setEventListeners = () => {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._form.inputSelector)
    );

    const buttonElement = this._formElement.querySelector(
      this._form.submitButtonSelector
    ); //Кнопка формы
    this._toggleButtonDisabled(inputList, buttonElement);

    inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._toggleButtonDisabled(inputList, buttonElement);
        this._checkValid(input);
      });
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
