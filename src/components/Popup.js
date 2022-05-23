export class Popup {
  constructor(selector) {
    this._selector = selector;

    this._popup = document.querySelector(this._selector);
    this._btnClose = this._popup.querySelector(".popup__close-btn");
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  setEventListeners() {
    
    this._btnClose.addEventListener("click", () => {
      this.close();
    });

    this._popup.addEventListener("click", (event) => {
      if (event.currentTarget === event.target) {
        this.close();
      }
    });
  }
}
