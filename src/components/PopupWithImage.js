import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }

  open(cardElement) {
    super.open();

    const title = this._selector.querySelector(".popup__picture-title");
    const image = this._selector.querySelector(".popup__picture");

    title.textContent = cardElement.querySelector(".photo__name").textContent;
    image.src = cardElement.querySelector(".photo__img").src;
    image.alt = cardElement.querySelector(".photo__img").alt;
  }
}
