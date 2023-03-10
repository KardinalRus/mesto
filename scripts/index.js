let editBtnClick = document.querySelector('.profile__edit-btn');
let popup = document.querySelector('.popup');
let closeBtnClick = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__box_type_name');
let jobInput = formElement.querySelector('.popup__box_type_description');
let userName = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__description');


function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopup();
}

editBtnClick.addEventListener('click', openPopup);
closeBtnClick.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
