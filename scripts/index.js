import { Card } from "./Card.js";

import { FormValidator } from "./FormValidator.js";

const photos = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Находим нужные кнопки и блоки профиля
const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-btn");
const popupEdit = page.querySelector(".popup_name_edit");
const formElementEdit = popupEdit.querySelector(".form_edit");
const buttonFormEdit = formElementEdit.querySelector(".form__btn_type_edit");

// Находим значения name и about профиля
const profileName = page.querySelector(".profile__name");
const profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме профиля
const nameEdit = formElementEdit.querySelector(".form__text_type_name");
const aboutEdit = formElementEdit.querySelector(".form__text_type_about");

// Находим текстовые поля ошибок name и about в форме профиля
const nameError = formElementEdit.querySelector(".name-input-error");
const aboutError = formElementEdit.querySelector(".about-input-error");

// Находим нужные кнопки и значения фотографий
const photoList = document.querySelector(".photos__list");
const popupAddPhoto = document.querySelector(".popup_name_add-photo");
const popupPicture = document.querySelector(".popup_name_picture");
const buttonAdd = document.querySelector(".profile__add-btn");
const formElementAddPhoto = popupAddPhoto.querySelector(".form_add-photo");
const buttonFormAddPhoto = formElementAddPhoto.querySelector(
  ".form__btn_type_add-photo"
);

// Находим текстовые поля title и link в форме фотографий
const titleAdd = formElementAddPhoto.querySelector(".form__text_type_title");
const linkAdd = formElementAddPhoto.querySelector(".form__text_type_link");

// Находим текстовые поля ошибок title и link в форме фотографий
const titleError = formElementAddPhoto.querySelector(".title-input-error");
const linkError = formElementAddPhoto.querySelector(".link-input-error");

// Находим поля title и Img в попапе фотографий
const pictureTitle = popupPicture.querySelector(".popup__picture-title");
const pictureImg = popupPicture.querySelector(".popup__picture");

// Находим кнопки закрытия
const btnCloseEdit = popupEdit.querySelector(".popup__close-btn_name_edit");
const btnClosePhoto = popupAddPhoto.querySelector(
  ".popup__close-btn_name_photo"
);
const btnClosePicture = popupPicture.querySelector(
  ".popup__close-btn_name_picture"
);

function closePopup(popup) {
  popup.classList.remove("popup_opened");

  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupOverlay(event) {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}

function closePopupEsc(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_opened");

    closePopup(popup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupEsc);
}

function renderPhoto(photo) {
  const photoCard = new Card(photo.name, photo.link, '.photo-template'); // Создаем карточку

  photoList.prepend(photoCard.createCard()); // Добавляем в разметку
}

function openPropfilePopup() {
  // Вставляем в текстовые поля значения из профиля
  nameEdit.value = profileName.textContent;
  aboutEdit.value = profileAbout.textContent;

  nameEdit.classList.remove("form__text_invalid");
  aboutEdit.classList.remove("form__text_invalid");

  nameError.textContent = "";
  aboutError.textContent = "";

  buttonFormEdit.classList.remove("form__btn_disabled");
  buttonFormEdit.removeAttribute("disabled", "");

  openPopup(popupEdit);
}

function openAddPhotoPopup() {
  // Очищаем поля ввода
  titleAdd.value = "";
  linkAdd.value = "";

  titleAdd.classList.remove("form__text_invalid");
  linkAdd.classList.remove("form__text_invalid");

  titleError.textContent = "";
  linkError.textContent = "";

  buttonFormAddPhoto.classList.add("form__btn_disabled");
  buttonFormAddPhoto.setAttribute("disabled", "");

  openPopup(popupAddPhoto);
}

// Обработчик «отправки» формы добавления карточки
function formSubmitHandlerCreate(event) {
  // Создаем объект с введенной информацией
  const photo = {
    name: titleAdd.value,
    link: linkAdd.value,
  };

  renderPhoto(photo); // Формируем карточку

  closePopup(popupAddPhoto); //Закрываем попап
}

// Обработчик «отправки» формы редактирования
function formSubmitHandlerEdit(event) {
  // Получаем значение полей nameEdit и aboutEdit из свойства value
  const newName = nameEdit.value;
  const newAbout = aboutEdit.value;

  // Вставляем новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup(popupEdit);
}

photos.forEach(renderPhoto); // Запускаем рендеринг фотографий на страницу

formElementEdit.addEventListener("submit", formSubmitHandlerEdit); // Прикрепляем обработчик к форме редактирования

//Открываем попап редактирования профиля
buttonEdit.addEventListener("click", openPropfilePopup);

// Закрываем попап редактирования
btnCloseEdit.addEventListener("click", () => {
  closePopup(popupEdit);
});

popupEdit.addEventListener("click", closePopupOverlay); // Закрываем попап редактирования при клике на оверлей

formElementAddPhoto.addEventListener("submit", formSubmitHandlerCreate); // Прикрепляем обработчик к форме добавления фотографии

// Открываем попап добавления фотографии
buttonAdd.addEventListener("click", openAddPhotoPopup);

// Закрываем попап добавления фотографии
btnClosePhoto.addEventListener("click", () => {
  closePopup(popupAddPhoto);
});

popupAddPhoto.addEventListener("click", closePopupOverlay); // Закрываем попап добавления фотографии при клике на оверлей

// Закрываем попап просмотра фотографии
btnClosePicture.addEventListener("click", () => {
  closePopup(popupPicture);
});

popupPicture.addEventListener("click", closePopupOverlay); // Закрываем попап просмотра фотографии при клике на оверлей

export { pictureTitle, pictureImg, popupPicture, openPopup }




























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
/*enableValidation({
  formSelector: ".form_add-photo",
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
});*/

const objFormElements = {
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
};

new FormValidator(objFormElements, formElementAddPhoto).enableValidation();

export {toggleButtonDisabled, checkValid};