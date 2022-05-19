export class Card {
  constructor(cardParameters, cardSelector) {
    this._name = cardParameters.data.name;
    this._link = cardParameters.data.link;
    this._likes = cardParameters.data.likes.length;
    this._id = cardParameters.data.id;

    this._handleCardClick = cardParameters.handleCardClick;
    this._handleLikeClick = cardParameters.handleLikeClick;
    this._handleDeleteIconClick = cardParameters.handleDeleteIconClick;

    this._cardSelector = cardSelector;
  }

  // Создаем клон темплейта карточки
  _getTemplate = () => {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.firstElementChild.cloneNode(true);

    return this._cardElement;
  };

  // Удаляем карточку
  _deleteCard = () => {
    this._handleDeleteIconClick();
  };

  // Лайк
  _likeCard = (card) => {
    this._handleLikeClick(card);
  };

  // Открываем попап с фотографией
  _openPhoto = () => {
    this._handleCardClick();
  };

  // Подключаем обработчики событий
  _setEventListeners = () => {
    this._cardElement
      .querySelector(".photo__delete-btn")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._cardElement
      .querySelector(".photo__like-btn")
      .addEventListener("click", () => {
        this._likeCard(this._cardElement);
      });

    this._cardElement.querySelector(".photo__img")
    .addEventListener("click", () => {
      this._openPhoto();
    });
  };

  // Создаем карточку
  createCard() {
    this._getTemplate();

    this._cardElement.querySelector(".photo__name").textContent = this._name;
    this._cardElement.querySelector(".photo__img").alt = this._name;
    this._cardElement.querySelector(".photo__img").src = this._link;
    this._cardElement.querySelector(".photo__likes").textContent = this._likes;

    this._setEventListeners();

    return this._cardElement;
  }
}
