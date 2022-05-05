import "../pages/index.css";

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { UserInfo } from "../components/UserInfo.js";

import {
  photos,
  buttonEdit,
  buttonAddPhoto,
  formElements,
  formElementEdit,
  formElementAddPhoto,
  userName,
  userAbout
} from "../utils/constants.js";

// Создаем класс формы редактирования
const formValidatorEdit = new FormValidator(formElements, formElementEdit);

// Создаем класс формы добавления фото
const formValidatorAddPhoto = new FormValidator(
  formElements,
  formElementAddPhoto
);

// Создаем класс профиля пользователя
const userInfo = new UserInfo({
  selectorName: ".profile__name",
  selectorAbout: ".profile__about",
});

// Формируем карточки
const cardsList = new Section(
  {
    items: photos,
    renderer: (item) => {
      const photoCard = new Card(item["add-photo-title"], item['add-photo-link'], ".photo-template", {
        handleCardClick: () => {
          popupWithImage.open(item['add-photo-title'], item['add-photo-link']);
        },
      }).createCard(); // Создаем карточку
      cardsList.addItem(photoCard);
    },
  },
  ".photos__list"
);

// Попап добавления карточки
const popupAddPhoto = new PopupWithForm(".popup_name_add-photo", {
  submit: (inputsData) => {
    cardsList.renderer(inputsData); //Создаем карточку и добавляем в разметку
    popupAddPhoto.close();
  },
});

// Попап редактирования профиля
const popupEdit = new PopupWithForm(".popup_name_edit", {
  submit: (inputsData) => {
    userInfo.setUserInfo(inputsData);
    popupEdit.close();
  },
});

// Попап просмотра фотографии
const popupWithImage = new PopupWithImage(".popup_name_picture");

// Функция открытия попапа добавления фотографии
function openAddPhotoPopup() {
  formValidatorAddPhoto.resetErrors();
  formValidatorAddPhoto.addButtonDisabled();

  popupAddPhoto.open();
}

// Функция открытия попапа редактирования профиля
function openEdit() {
  const info = userInfo.getUserInfo();

  userName.value = info.name;
  userAbout.value = info.about;

  formValidatorEdit.resetErrors();
  formValidatorEdit.removeButtonDisabled();

  popupEdit.open();
}

// Подключаем валидацию ко всем формам на странице
formValidatorEdit.enableValidation();
formValidatorAddPhoto.enableValidation();

// Подключаем обработчики событий к попапам
popupAddPhoto.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();

// Подключаем обработчик к кнопке открытия добавления фото
buttonAddPhoto.addEventListener("click", openAddPhotoPopup);

// Подключаем обработчик к кнопке открытия редактирования профиля
buttonEdit.addEventListener("click", openEdit);

// Запускаем рендеринг фотографий на страницу
cardsList.renderItems();
