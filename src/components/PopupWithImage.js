import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);

    this._title = this._popup.querySelector(".popup__picture-title");
    this._image = this._popup.querySelector(".popup__picture");
  }

  open = (name, link) => {
    super.open();

    this._title.textContent = name;
    this._image.alt = name;
    this._image.src = link;
  }
}
