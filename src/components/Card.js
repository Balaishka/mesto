export class Card {
  constructor(cardParameters, cardSelector) {
    this._name = cardParameters.data.name;
    this._link = cardParameters.data.link;
    this._likes = cardParameters.data.likes;
    this._cardId = cardParameters.data.id;
    this._ownerId = cardParameters.data.idOwner;
    this._myId = cardParameters.data.myId;

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

    // Находим нужные элементы и записываем их в классовые переменные
    this._btnLike = this._cardElement.querySelector(".photo__like-btn");
    this._btnDelete = this._cardElement.querySelector(".photo__delete-btn");
    this._cardImage = this._cardElement.querySelector(".photo__img");
    this._cardName = this._cardElement.querySelector(".photo__name");
    this._cardLikes = this._cardElement.querySelector(".photo__likes");

    return this._cardElement;
  };

  // Удаляем карточку
  _deleteCard = () => {
    this._handleDeleteIconClick(this._cardElement);
  };

  // Проверяем, наша ли карточка
  _checkOwnerCard = () => {
    this._myCard = false;
  };

  // Проверка на наличие своего лайка
  _checkLike = () => {
    this._likeHave = false;

    this._likes.map((item) => {
      if (item._id === this._myId) {
        this._likeHave = true;
      }
    });

    return this._likeHave;
  };

  // Лайк
  _likeCard = (card) => {
    this._handleLikeClick(card, this._likeHave);
  };

  // Добавление активности кнопки лайка
  addActiveLikeBtn = () => {
    this._btnLike.classList.add("photo__like-btn_active");
  };

  // Удаление активности кнопки лайка
  removeActiveLikeBtn = () => {
    this._btnLike.classList.remove("photo__like-btn_active");
  };

  // Изменение значения лайков
  changeLikes = (newLikes, likeHave) => {
    this._likes = newLikes;

    this._likeHave = likeHave;

    if (this._likeHave) {
      this.addActiveLikeBtn();
    } else {
      this.removeActiveLikeBtn();
    }
  };

  // Открываем попап с фотографией
  _openPhoto = () => {
    this._handleCardClick();
  };

  // Подключаем обработчики событий
  _setEventListeners = () => {
    if (this._ownerId !== this._myId) {
      this._btnDelete.remove();
    } else {
      this._btnDelete.addEventListener("click", () => {
        this._deleteCard(this._cardElement);
      });
    }

    this._btnLike.addEventListener("click", () => {
      this._likeCard(this._cardElement);
    });

    this._cardImage.addEventListener("click", () => {
      this._openPhoto();
    });
  };

  // Создаем карточку
  createCard() {
    this._getTemplate();

    this._cardElement.id = this._cardId;
    this._cardName.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._cardLikes.textContent = this._likes.length;

    this._checkLike();

    if (this._likeHave) {
      this.addActiveLikeBtn();
    } else {
      this.removeActiveLikeBtn();
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
