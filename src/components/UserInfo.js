export class UserInfo {
  constructor({ selectorName, selectorAbout }) {
    this._selectorName = document.querySelector(selectorName);
    this._selectorAbout = document.querySelector(selectorAbout);
  }

  getUserInfo() {
    return {
      name: this._selectorName.textContent,
      about: this._selectorAbout.textContent,
    };
  }

  setUserInfo(inputsData) {
    this._selectorName.textContent = inputsData['edit-name'];
    this._selectorAbout.textContent = inputsData['edit-about'];
  }
}
