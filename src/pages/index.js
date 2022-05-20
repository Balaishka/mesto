import "../pages/index.css";

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { UserInfo } from "../components/UserInfo.js";

import { Api } from "../components/Api.js";

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
import { P } from "core-js/modules/_export";









export const myId = "be83796ca641dbf14cb41351";

// Создаем класс апи дл карточек
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    "content-type": "application/json",
    "authorization": "fc4c8120-00e8-40b3-bbab-d69ed1e171f6"
  }
});

api.getAllCards()
  .then((dataArr) => {
    // Формируем карточки
    const cardsList = new Section(
      {
        items: dataArr,
          
        renderer: (item) => {
          const photoCard = new Card({
            data: {
              name: item.name, 
              link: item.link,
              likes: item.likes,
              id: item._id
            },
            handleCardClick: () => {
              popupWithImage.open({
                name: item.name,
                link: item.link
              });
            },






            handleLikeClick: (card, likeHave) => {

              if (!likeHave) {

                api.addLikeCard(card.id)
                .then((data) => {
                  console.log(data.likes);
                  card.querySelector(".photo__likes").textContent = data.likes.length;
                  item.likes = data.likes;
                });

                photoCard.changeLikes(item.likes, true);

              } else {

                api.deleteLikeCard(card.id)
                .then((data) => {
                  console.log(data.likes);
                  card.querySelector(".photo__likes").textContent = data.likes.length;
                  item.likes = data.likes;
                });

                photoCard.changeLikes(item.likes, false);

              }

            },









            handleDeleteIconClick: (card) => {
              card.remove();
            }
          }, ".photo-template"); // Создаем класс карточки

          const newPhotoCard = photoCard.createCard(); // Создаем карточку

          cardsList.addItem(newPhotoCard);
        },
      },
      ".photos__list"
    );

    cardsList.renderItems();
  });






// Попап добавления карточки
const popupAddPhoto = new PopupWithForm(".popup_name_add-photo", {
  submit: (inputsData) => {
    const photo = {
      name: inputsData['add-photo-title'],
      link: inputsData['add-photo-link']
    };
    cardsList.renderer(photo); //Создаем карточку и добавляем в разметку
    popupAddPhoto.close();
  },
});















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
