import { pictureTitle, pictureImg, popupPicture, openPopup } from "./index.js";

export class Card {
    constructor(name, image, cardSelector) {
        this._name = name;
        this._image = image;
        this._cardSelector = cardSelector;
    }

    _getTemplate = () => {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .firstElementChild
        .cloneNode(true);

        return cardElement;
    }

    _deleteCard = (cardElement) => {
        cardElement.remove();
    }

    _likeCard = (cardElement) => {
        cardElement.querySelector('.photo__like-btn').classList.toggle("photo__like-btn_active");
    }

    _openPhoto = (cardElement) => {
        pictureTitle.textContent = cardElement.querySelector(".photo__name").textContent;
        pictureImg.src = cardElement.querySelector(".photo__img").src;
        pictureImg.alt = cardElement.querySelector(".photo__img").alt;

        openPopup(popupPicture);
    }

    _setEventListeners = (cardElement) => {
        cardElement.querySelector('.photo__delete-btn').addEventListener("click", () => {
            this._deleteCard(cardElement);
        });

        cardElement.querySelector('.photo__like-btn').addEventListener("click", () => {
            this._likeCard(cardElement);
        });
    
        cardElement.querySelector('.photo__img').addEventListener("click", () => {
            this._openPhoto(cardElement);
        });
    }

    createCard() {
        const cardElement = this._getTemplate();

        cardElement.querySelector('.photo__name').textContent = this._name;
        cardElement.querySelector('.photo__img').src = this._image;
        cardElement.querySelector('.photo__img').alt = this._name;

        this._setEventListeners(cardElement);

        return cardElement;
    }
}