export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userProfileInfo = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
    return userProfileInfo;
  }

  setUserInfo({ username, userjob, useravatar }) {
    this._nameElement.textContent = username;
    this._jobElement.textContent = userjob;
    this._avatarElement.src = useravatar;
  }
}
