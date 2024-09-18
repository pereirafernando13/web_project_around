// Variaveis PopuPerfil
const popup = document.querySelector(".popup");
const editbutton = document.querySelector(".profile__info-button-edit");
const closebutton = document.querySelector(".popup__form-button-close");

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
const popupImage = document.querySelector(".popup__image");
const addImageButton = document.querySelector(".profile__button");

const inputTittle = document.querySelector("#tittle");
const inputUrl = document.querySelector("#url");
const saveButton = document.querySelector("#add-button");
const cards = document.querySelector(".elements");

// Abrir/fechar popperfil
function openPopup() {
  popup.classList.add("popup_change_display");
}
editbutton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup_change_display");
}
closebutton.addEventListener("click", closePopup);

// Abrir/fechar Popup Cards
function openPopupImg() {
  popupImage.classList.add("popup_change_display");
}
addImageButton.addEventListener("click", openPopupImg);

function closePopupImg() {
  popupImage.classList.remove("popup_change_display");
}

// Atualizar dados do usuario
function updateProfileInfo(event) {
  event.preventDefault();
  profileInfo.textContent = inputName.value;
  profileProfission.textContent = inputProfission.value;
  closePopup();
}
saveButtonProfile.addEventListener("click", updateProfileInfo);

//add card image
function addCardImage(event) {
  event.preventDefault();
  if (inputTittle.value != "" && inputUrl.value != "") {
    const newCard = createCard({
      name: inputTittle.value,
      link: inputUrl.value,
    });
    cards.prepend(newCard);
    inputTittle.value = "";
    inputUrl.value = "";
  }
  closePopupImg();
}
saveButton.addEventListener("click", addCardImage);

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

//criar cada cartao (criar elemento html - template)
function createCard(card) {
  //pegar o template
  const cardTemplate = document.querySelector("#element-template").content;
  //fazer a copia
  const elementCard = cardTemplate
    .querySelector(".elements__element")
    .cloneNode(true);
  //pegar os elementos de dentro da copia
  const cardTitle = elementCard.querySelector(".elements__element-title");
  const cardImage = elementCard.querySelector(".elements__element-image");
  const cardLink = elementCard.querySelector(".elements__element-image");
  const cardTrash = elementCard.querySelector("elements-element-button-trash");
  //popular os sub elementos
  cardTitle.textContent = card.name;
  cardImage.setAttribute("alt", card.name);
  cardLink.setAttribute("src", card.link);

  //pega a lista
  const elements = document.querySelector(".elements");
  //prepend
  elements.prepend(elementCard);

  //botao like
  elementCard
    .querySelector(".elements__element-button-heart")
    .addEventListener("click", (event) => {
      if (
        event.target.getAttribute("src") ===
        "./images/elements__image-heart-disble.png"
      ) {
        return event.target.setAttribute(
          "src",
          "./images/elements_element-button-heart-like.png"
        );
      }
      return event.target.setAttribute(
        "src",
        "./images/elements__image-heart-disble.png"
      );
    });
  return elementCard;
}
// Adicionar os cartoes a pagina
//deletar card

initialCards.forEach((card) => {
  const newCard = createCard(card);
  cards.prepend(newCard);
});
