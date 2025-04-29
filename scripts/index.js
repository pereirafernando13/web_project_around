import Section from "./Section.js";
import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

const editbutton = document.querySelector(".profile__info-button-edit");

// Variaveis Popup Add Card
const addImageButton = document.querySelector(".profile__button");

const inputTittle = document.querySelector("#tittle");
const inputUrl = document.querySelector("#url");
const saveButton = document.querySelector("#add-button");
const cards = document.querySelector(".elements");

//Abrir/ popImgFull

export function openFullImagPopup() {
  imgFull.classList.add("popup_change_display");
}
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

// Api

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "ca2b55d6-3ffc-43fa-acc3-a4c30735379b",
    "Content-Type": "application/json",
  },
});

//inicialcards
let cardSection;

api
  .getInicialCards()
  .then((cards) => {
    cardSection = new Section({
      items: cards,
      renderer: renderCard,
    });
    cardSection.renderItems();
  })
  .catch((err) => console.error(err));

//userinfo

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-profession",
});

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      username: data.name,
      userjob: data.about,
    });
  })
  .catch((err) => console.error(err));

//popwithconfirmation

const popupDeleteConfirmation = new PopupWithConfirmation(".popup__card");
popupDeleteConfirmation.setEventListeners();

//popupwithform

const popupEditProfile = new PopupWithForm(".popup-profile", (data) => {
  console.log("Dados enviados:", data);
  api
    .updateUserInfo({ name: data.name, about: data.about })
    .then((updateData) => {
      userInfo.setUserInfo({
        username: updateData.name,
        userjob: updateData.about,
      });
    })
    .catch((err) => {
      console.error("Erro ao atualizar perfil:", err);
    });
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

//Editar Avatar

const popupAvatar = new PopupWithForm(".popup__avatar");

const avatarButton = document.querySelector(".profile__button-avt");
avatarButton.addEventListener("click", () => {
  popupAvatar.open();
});
//popwithImage

function handleCardClick(evt, cardContent) {
  if (evt.target.classList.contains("card__image")) {
    const popupWithImage = new PopupWithImage(
      {
        name: cardContent.name,
        link: cardContent.link,
      },
      ".popup__imgfull"
    );
    popupWithImage.open();
  }
  if (evt.target.classList.contains("elements-element-button-trash")) {
    popupDeleteConfirmation.open();
    popupDeleteConfirmation.setSubmitDelete(() => {
      api.deleteCard(cardContent._id).then(() => {
        evt.target.parentElement.remove();
      });
    });
  }
  if (
    evt.target.getAttribute("src") ===
    "./images/elements__image-heart-disble.png"
  ) {
    api.likedCard(cardContent._id).then(() => {
      return evt.target.setAttribute(
        "src",
        "./images/elements_element-button-heart-like.png"
      );
    });
  }
  api.unlikedCard(cardContent._id).then(() => {
    return evt.target.setAttribute(
      "src",
      "./images/elements__image-heart-disble.png"
    );
  });
}

// card render

function renderCard(cardContent) {
  const card = new Card(
    {
      cardContent,
      handleCardClick: handleCardClick,
    },
    "#card_template"
  );
  const newCard = card.createCard();
  cards.prepend(newCard);
}

//add card image
function addCardImage(event) {
  event.preventDefault();
  const name = inputTittle.value;
  const link = inputUrl.value;
  api.newCard({ name, link }).then((cardContent) => {
    if (inputTittle.value != "" && inputUrl.value != "") {
      const card = new Card(
        {
          cardContent,
          handleCardClick,
        },
        ".element-template"
      );
      const newCard = card.createCard();
      cards.prepend(newCard);
      inputTittle.value = "";
      inputUrl.value = "";
    }
    popupAddImag.close();
  });
}
saveButton.addEventListener("click", addCardImage);
