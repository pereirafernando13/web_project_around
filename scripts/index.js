import Section from "./Section.js";
import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

// Variaveis PopuPerfil
const popupProfile = document.querySelector(".popup-profile");
const popup = document.querySelector(".popup");
const editbutton = document.querySelector(".profile__info-button-edit");
const closebutton = document.querySelector(".popup__form-button-close");
const closePopupImgButton = document.querySelector(".popup__form-button-img");

const saveButtonProfile = document.querySelector(".popup__form-button-save");

const form = document.querySelector(".popup__form");
const inputName = form.querySelector("#name");
const inputProfission = form.querySelector("#profission");

const profileInfo = document.querySelector(".profile__info-name");
const profileProfission = document.querySelector(".profile__info-profession");

const buttonHeartLike = document.querySelectorAll(
  ".elements__element-button-heart"
);

// Variaveis Popup Add Card
const popupImage = document.querySelector(".popup-image");
const addImageButton = document.querySelector(".profile__button");

const inputTittle = document.querySelector("#tittle");
const inputUrl = document.querySelector("#url");
const saveButton = document.querySelector("#add-button");
const cards = document.querySelector(".elements");

//Variaveis PopupimgFull
const closePopupImgFull = document.querySelector(
  ".popup__imgfull-button-close"
);
const imgFull = document.querySelector(".popup__imgfull");

// Abrir/fechar popperfil

//Abrir/ popImgFull

export function openFullImagPopup() {
  imgFull.classList.add("popup_change_display");
}

// Atualizar dados do usuario

// botao de like
function heartLike(event) {
  event.target.classList.toggle("elements__element_button-heart-like");
}

buttonHeartLike.forEach((buttonLike) => {
  buttonLike.addEventListener("click", heartLike);
});

// pegar o array

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//userinfo

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-profession",
});

//popupwithform

const popupEditProfile = new PopupWithForm(".popup-profile", (data) => {
  console.log(data);
  userInfo.setUserInfo(data);
});
popupEditProfile.setEventListeners();
editbutton.addEventListener("click", () => {
  popupEditProfile.open();
});

const popupAddImag = new PopupWithForm(".popup-image", (data) => {});
popupAddImag.setEventListeners();
addImageButton.addEventListener("click", () => {
  popupAddImag.open();
});

//popwithImage

function handleCardClick(evt, name, link) {
  if (evt.target.classList.contains("card__image")) {
    const popupWithImage = new PopupWithImage(
      {
        name: name,
        link: link,
      },
      ".popup__imgfull"
    );
    popupWithImage.open();
  }
}

// card render

function renderCard(cardContent) {
  const card = new Card(
    {
      name: cardContent.name,
      link: cardContent.link,
      handleCardClick: handleCardClick,
    },
    "#card_template"
  );
  const newCard = card.createCard();
  cards.prepend(newCard);
}

// section

const sectionCards = new Section({
  items: initialCards,
  renderer: renderCard,
});
sectionCards.renderItems();

//add card image
function addCardImage(event) {
  event.preventDefault();
  if (inputTittle.value != "" && inputUrl.value != "") {
    const card = new Card(
      {
        name: inputTittle.value,
        link: inputUrl.value,
      },
      ".element-template"
    );
    const newCard = card.createCard();
    cards.prepend(newCard);
    inputTittle.value = "";
    inputUrl.value = "";
  }
  popupAddImag.close();
}
saveButton.addEventListener("click", addCardImage);
