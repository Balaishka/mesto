export class Card {
  constructor({ name, image }, cardSelector, { handleCardClick }) {
    this._name = name;
    this._image = image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardElement.remove();
  };

  // Лайк
  _likeCard = () => {
    this._cardElement
      .querySelector(".photo__like-btn")
      .classList.toggle("photo__like-btn_active");
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
        this._likeCard();
      });

    this._cardElement.querySelector(".photo__img").addEventListener("click", () => {
      this._openPhoto();
    });
  };

  // Создаем карточку
  createCard() {
    this._getTemplate();

    this._cardElement.querySelector(".photo__name").textContent = this._name;
    this._cardElement.querySelector(".photo__img").src = this._image;
    this._cardElement.querySelector(".photo__img").alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
