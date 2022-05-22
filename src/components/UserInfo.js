export class UserInfo {
  constructor({ selectorName, selectorAbout, selectorAvatar }) {
    this._selectorName = document.querySelector(selectorName);
    this._selectorAbout = document.querySelector(selectorAbout);
    this._selectorAvatar = document.querySelector(selectorAvatar);
  }

  getUserAllInfo(data) {
    this._selectorName.textContent = data.name;
    this._selectorAbout.textContent = data.about;
    this._selectorAvatar.src = data.avatar;
    this.id = data._id;
  }

  getAvatar() {
    return {
      link: this._selectorAvatar.src,
    };
  }

  getUserInfo() {
    return {
      name: this._selectorName.textContent,
      about: this._selectorAbout.textContent,
    };
  }

  setAvatar(inputsData) {
    this._selectorAvatar.src = inputsData.avatar;
  }

  setUserInfo(inputsData) {
    this._selectorName.textContent = inputsData.name;
    this._selectorAbout.textContent = inputsData.about;
  }
}
