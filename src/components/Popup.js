export class Popup {
  constructor(selector) {
    this._selector = document.querySelector(selector);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._selector.classList.add("popup_opened");
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
  }

  close() {
    this._selector.classList.remove("popup_opened");
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
  }

  setEventListeners() {
    const buttonClose = this._selector.querySelector(".popup__close-btn");

    buttonClose.addEventListener("click", () => {
      this.close();
    });

    this._selector.addEventListener("click", (event) => {
      if (event.currentTarget === event.target) {
        this.close();
      }
    });
  }
}
