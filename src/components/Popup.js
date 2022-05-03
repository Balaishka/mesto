export class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }

    _handleEscClose (event) {
        if (event.key === "Escape") {
           this.close();
        }
    }

    open (event) {
        this._selector.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose(event));
    }

    close (event) {
        this._selector.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose(event));
    }

    setEventListeners () {
        const buttonClose = this._selector.querySelector('.popup__close-btn');
        const overlay = this._selector.querySelector('.popup_opened');

        buttonClose.addEventListener('click', this.close());
        overlay.addEventListener('click', (event) => {
            if (event.currentTarget === event.target) {
                closePopup(event.currentTarget);
            }
        });

    }
}