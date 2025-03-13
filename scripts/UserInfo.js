export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userProfileInfo = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };
    return userProfileInfo;
  }

  setUserInfo({ username, userjob }) {
    this._nameElement.textContent = username;
    this._jobElement.textContent = userjob;
  }
}
