import "../pages/index.css";

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";

import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";

import { PopupWithForm } from "../components/PopupWithForm.js";

import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

import { UserInfo } from "../components/UserInfo.js";

import { Api } from "../components/Api.js";

import {
  buttonEdit,
  buttonAddPhoto,
  buttonEditAvatar,
  formElements,
  formElementEdit,
  formElementAddPhoto,
  formElementEditAvatar,
  userName,
  userAbout,
  btnEditForm,
  btnEditAvatarForm,
  btnAddPhotoForm,
} from "../utils/constants.js";

// Функция открытия попапа редактирования профиля
function openEdit() {
  const info = userInfo.getUserInfo();

  userName.value = info.name;
  userAbout.value = info.about;

  formValidatorEdit.resetErrors();
  formValidatorEdit.removeButtonDisabled();

  popupEdit.open();
}

// Функция открытия попапа добавления фотографии
function openEditAvatarPopup() {
  formValidatorEditAvatar.resetErrors();
  formValidatorEditAvatar.addButtonDisabled();

  popupEditAvatar.open();
}

// Создаем класс профиля пользователя
const userInfo = new UserInfo({
  selectorName: ".profile__name",
  selectorAbout: ".profile__about",
  selectorAvatar: ".profile__avatar-img",
});

// Создаем класс формы редактирования
const formValidatorEdit = new FormValidator(formElements, formElementEdit);

// Создаем класс формы добавления фото
const formValidatorAddPhoto = new FormValidator(
  formElements,
  formElementAddPhoto
);

// Создаем класс формы обновления аватара
const formValidatorEditAvatar = new FormValidator(
  formElements,
  formElementEditAvatar
);

// Попап редактирования профиля
const popupEdit = new PopupWithForm(".popup_name_edit", {
  handleFormSubmit: (inputsData) => {
    btnEditForm.textContent = "Сохранение...";

    api
      .setUserInfo({
        name: inputsData["edit-name"],
        about: inputsData["edit-about"],
      })
      .then((data) => {
        userInfo.setUserInfo(data);
        popupEdit.close();
        btnEditForm.textContent = "Сохранить";
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
      });
  },
});

// Попап обновления аватара
const popupEditAvatar = new PopupWithForm(".popup_name_edit-avatar", {
  handleFormSubmit: (inputsData) => {
    btnEditAvatarForm.textContent = "Сохранение...";

    api
      .setUserAvatar({
        avatar: inputsData["edit-avatar-link"],
      })
      .then((data) => {
        userInfo.setAvatar(data);
        btnEditAvatarForm.textContent = "Сохранить";
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.status}`);
      });
  },
});

// Попап просмотра фотографии
const popupWithImage = new PopupWithImage(".popup_name_picture");

// Попап подтверждения удаления
const popupWithConfirmation = new PopupWithConfirmation(
  ".popup_name_delete-photo",
  {
    handleFormSubmit: (card) => {
      api
        .deleteCard(card.id)
        .then(() => {
          card.remove();
          popupWithConfirmation.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    },
  }
);

// Навешиваем обработчики событий к попапу удаления карточки
popupWithConfirmation.setEventListeners();

// Навешиваем обработчики событий к попапу обновления аватара
popupEditAvatar.setEventListeners();

// Подключаем обработчик к кнопке открытия редактирования профиля
buttonEdit.addEventListener("click", openEdit);

// Подключаем обработчик к кнопке открытия редактирования аватара
buttonEditAvatar.addEventListener("click", openEditAvatarPopup);

// Создаем класс апи
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    "content-type": "application/json",
    authorization: "fc4c8120-00e8-40b3-bbab-d69ed1e171f6",
  },
});

api
  .getAllNeededData()
  .then((data) => {
    const [dataUser, dataCards] = data;

    // Получаем от сервера информацию о пользователе
    userInfo.getUserAllInfo(dataUser);

    // Формируем карточки
    const cardsList = new Section(
      {
        items: dataCards,

        renderer: (item) => {
          const photoCard = new Card(
            {
              data: {
                name: item.name,
                link: item.link,
                likes: item.likes,
                id: item._id,
                idOwner: item.owner._id,
                myId: dataUser._id,
              },

              handleCardClick: () => {
                popupWithImage.open({
                  name: item.name,
                  link: item.link,
                });
              },

              handleLikeClick: (card, likeHave) => {
                if (!likeHave) {
                  api
                    .addLikeCard(card.id)
                    .then((data) => {
                      card.querySelector(".photo__likes").textContent =
                        data.likes.length;
                      item.likes = data.likes;
                    })
                    .catch((err) => {
                      console.log(`Ошибка: ${err.status}`);
                    });

                  photoCard.changeLikes(item.likes, true);
                } else {
                  api
                    .deleteLikeCard(card.id)
                    .then((data) => {
                      card.querySelector(".photo__likes").textContent =
                        data.likes.length;
                      item.likes = data.likes;
                    })
                    .catch((err) => {
                      console.log(`Ошибка: ${err.status}`);
                    });

                  photoCard.changeLikes(item.likes, false);
                }
              },

              handleDeleteIconClick: (card) => {
                popupWithConfirmation.open(card);
              },
            },
            ".photo-template"
          ); // Создаем класс карточки

          const newPhotoCard = photoCard.createCard(); // Создаем карточку

          cardsList.addItem(newPhotoCard);
        },
      },
      ".photos__list"
    );

    cardsList.renderItems();

    // Попап добавления карточки
    const popupAddPhoto = new PopupWithForm(".popup_name_add-photo", {
      handleFormSubmit: (inputsData) => {
        btnAddPhotoForm.textContent = "Создание...";

        api
          .addNewCard({
            name: inputsData["add-photo-title"],
            link: inputsData["add-photo-link"],
          })
          .then((data) => {
            cardsList.renderer(data); //Создаем карточку и добавляем в разметку
            popupAddPhoto.close();
            btnAddPhotoForm.textContent = "Создать";
          })
          .catch((err) => {
            console.log(`Ошибка: ${err.status}`);
          });
      },
    });

    popupAddPhoto.setEventListeners();

    // Функция открытия попапа добавления фотографии
    function openAddPhotoPopup() {
      formValidatorAddPhoto.resetErrors();
      formValidatorAddPhoto.addButtonDisabled();

      popupAddPhoto.open();
    }

    // Подключаем обработчик к кнопке открытия добавления фото
    buttonAddPhoto.addEventListener("click", openAddPhotoPopup);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  });

// Подключаем валидацию ко всем формам на странице
formValidatorEdit.enableValidation();
formValidatorAddPhoto.enableValidation();
formValidatorEditAvatar.enableValidation();

// Подключаем обработчики событий к попапам
popupEdit.setEventListeners();
popupWithImage.setEventListeners();
