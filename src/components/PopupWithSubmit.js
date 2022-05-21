import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
    constructor(selector) {
        super(selector);

        this.verification = false;
    }

    getVerification() {
        return this.verification;
    }

    setEventListeners() {
        super.setEventListeners();

        this._popup.querySelector(".form").addEventListener("submit", (event) => {
            event.preventDefault();
            this.verification = true;
        });
    }
}