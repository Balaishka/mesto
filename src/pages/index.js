import '../pages/index.css';

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";

import { Section } from "../components/Section.js";

import * as constants from "../utils/constants.js";

// Находим нужные кнопки и блоки профиля
const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-btn");
const popupEdit = page.querySelector(".popup_name_edit");
const formElementEdit = popupEdit.querySelector(".form_edit");

// Находим значения name и about профиля
const profileName = page.querySelector(".profile__name");
const profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме профиля
const nameEdit = formElementEdit.querySelector(".form__text_type_name");
const aboutEdit = formElementEdit.querySelector(".form__text_type_about");

// Находим нужные кнопки и значения фотографий
const popupAddPhoto = document.querySelector(".popup_name_add-photo");
const popupPicture = document.querySelector(".popup_name_picture");
const buttonAdd = document.querySelector(".profile__add-btn");
const formElementAddPhoto = popupAddPhoto.querySelector(".form_add-photo");

// Находим текстовые поля title и link в форме фотографий
const titleAdd = formElementAddPhoto.querySelector(".form__text_type_title");
const linkAdd = formElementAddPhoto.querySelector(".form__text_type_link");

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

// Находим все формы на странице
const formList = Array.from(document.querySelectorAll(".form")); // Находим все формы на странице

// Элементы форм
const formElements = {
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
};

const formValidatorEdit = new FormValidator(formElements, formElementEdit); // Создаем класс формы редактирования

const formValidatorAddPhoto = new FormValidator(
  formElements,
  formElementAddPhoto
); // Создаем класс формы добавления фото

// Формируем карточки
const cardsList = new Section({
  items: constants.photos,
  renderer: (item) => {
    const photoCard = new Card(item.name, item.link, ".photo-template").createCard(); // Создаем карточку
    cardsList.addItem(photoCard);
  }
}, '.photos__list');

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
  const photoCard = new Card(photo.name, photo.link, ".photo-template").createCard(); // Создаем карточку

  return photoCard;
}

function openPropfilePopup() {
  // Вставляем в текстовые поля значения из профиля
  nameEdit.value = profileName.textContent;
  aboutEdit.value = profileAbout.textContent;

  formValidatorEdit.resetErrors();
  formValidatorEdit.removeButtonDisabled();

  openPopup(popupEdit);
}

function openAddPhotoPopup() {
  // Очищаем поля ввода
  formElementAddPhoto.reset();

  formValidatorAddPhoto.resetErrors();
  formValidatorAddPhoto.addButtonDisabled();

  openPopup(popupAddPhoto);
}

// Обработчик «отправки» формы добавления карточки
function handleAddCardFormSubmit(event) {
  // Создаем объект с введенной информацией
  const photo = {
    name: titleAdd.value,
    link: linkAdd.value,
  };

  const photoCard = renderPhoto(photo); // Формируем карточку
  cardsList.addItem(photoCard); // Добавляем в разметку

  closePopup(popupAddPhoto); //Закрываем попап
}

// Обработчик «отправки» формы редактирования
function handleProfileEditFormSubmit(event) {
  // Получаем значение полей nameEdit и aboutEdit из свойства value
  const newName = nameEdit.value;
  const newAbout = aboutEdit.value;

  // Вставляем новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup(popupEdit);
}

cardsList.renderItems();//запускаем рендеринг фотографий

formElementEdit.addEventListener("submit", handleProfileEditFormSubmit); // Прикрепляем обработчик к форме редактирования

//Открываем попап редактирования профиля
buttonEdit.addEventListener("click", openPropfilePopup);

// Закрываем попап редактирования
btnCloseEdit.addEventListener("click", () => {
  closePopup(popupEdit);
});

popupEdit.addEventListener("click", closePopupOverlay); // Закрываем попап редактирования при клике на оверлей

formElementAddPhoto.addEventListener("submit", handleAddCardFormSubmit); // Прикрепляем обработчик к форме добавления фотографии

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

// Подключаем валидацию ко всем формам на странице
formList.forEach((formElement) => {
  new FormValidator(formElements, formElement).enableValidation();
});

export { pictureTitle, pictureImg, popupPicture, openPopup };
