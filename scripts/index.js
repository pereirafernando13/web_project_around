const popup = document.querySelector(".popup");
const editbutton = document.querySelector(".profile__info-button-edit");
const closebutton = document.querySelector(".popup__button-close");

const saveButtonProfile = document.querySelector(".popup__form-button-save");

const form = document.querySelector(".popup__form");
const inputName = form.querySelector("#name");
const inputProfission = form.querySelector("#profission");

const profileInfo = document.querySelector(".profile__info-name");
const profileProfission = document.querySelector(".profile__info-profession");

const buttonHeartLike = document.querySelectorAll(
  ".elements__element-button-heart"
);

function openPopup() {
  popup.classList.add("popup_change_display");
}
editbutton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_change_display");
}
closebutton.addEventListener("click", closePopup);

function updateProfileInfo(event) {
  event.preventDefault();
  profileInfo.textContent = inputName.value;
  profileProfission.textContent = inputProfission.value;
  closePopup();
}
saveButtonProfile.addEventListener("click", updateProfileInfo);

function heartLike(event) {
  event.target.classList.toggle("elements__element_button-heart-like");
}

buttonHeartLike.forEach((buttonLike) => {
  buttonLike.addEventListener("click", heartLike);
});
