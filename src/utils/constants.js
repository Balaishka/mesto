export const photos = [
  {
    'add-photo-title': "Архыз",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    'add-photo-title': "Челябинская область",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    'add-photo-title': "Иваново",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    'add-photo-title': "Камчатка",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    'add-photo-title': "Холмогорский район",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    'add-photo-title': "Байкал",
    'add-photo-link': "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const buttonEdit = document.querySelector(".profile__edit-btn");
export const buttonAddPhoto = document.querySelector(".profile__add-btn");

export const formElementEdit = document.querySelector(".form_edit");
export const formElementAddPhoto = document.querySelector(".form_add-photo");

// Элементы форм
export const formElements = {
  inputSelector: ".form__text",
  submitButtonSelector: ".form__btn",
  inactiveButtonClass: "form__btn_disabled",
  inputErrorClass: "form__text_invalid",
};

export const userName = document.querySelector(".form__text_type_name");
export const userAbout = document.querySelector(".form__text_type_about");