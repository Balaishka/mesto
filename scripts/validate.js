// Показываем текст ошибки
function showInputError(form, formElement, input, errorMessage) {
  const errorElement = formElement.querySelector(`.${input.id}-error`);

  input.classList.add(form.inputErrorClass);
  errorElement.textContent = errorMessage;
}

// Убираем текст ошибки
function hideInputError(form, formElement, input) {
  const errorElement = formElement.querySelector(`.${input.id}-error`);

  input.classList.remove(form.inputErrorClass);
  errorElement.textContent = "";
}

// Проверяем инпуты на валидность
function checkValid(form, formElement, input) {
  if (!input.validity.valid) {
    showInputError(form, formElement, input, input.validationMessage);
    return true;
  } else {
    hideInputError(form, formElement, input);
    return false;
  }
}

// Проверяем, есть ли невалидные инпуты
function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

// Создаем функцию активации и дизактивации кнопки отправки формы
function toggleButtonDisabled(form, inputList, buttonElement) {
  // Проверяем инпуты на валидность
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(form.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "");
  } else {
    buttonElement.classList.remove(form.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}

// Создаем функцию прикрепления обработчика к инпутам
function setEventListeners(form, formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(form.inputSelector)
  ); // Инпуты формы
  const buttonElement = formElement.querySelector(form.submitButtonSelector); //Кнопка формы
  toggleButtonDisabled(form, inputList, buttonElement);

  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      toggleButtonDisabled(form, inputList, buttonElement);
      checkValid(form, formElement, input);
    });
  });
}

// Создаем функцию вызова валидации
function enableValidation(form) {
  const formElement = page.querySelector(form.formSelector); // Переданная форма

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  setEventListeners(form, formElement);
}

// Включаем валидацию формы редактирования
enableValidation({
  formSelector: ".form_edit",
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
});

// Включаем валидацию формы добавления фото
enableValidation({
  formSelector: ".form_add-photo",
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
});
