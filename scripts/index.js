// Находим нужные кнопки и блоки профиля
const page = document.querySelector(".page");
const buttonEdit = page.querySelector(".profile__edit-btn");
const popupEdit = page.querySelector(".popup_name_edit");
const formElementEdit = popupEdit.querySelector(".form_edit");
const buttonFormEdit = formElementEdit.querySelector(".form__btn_type_edit");

// Находим значения name и about профиля
const profileName = page.querySelector(".profile__name");
const profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме профиля
const nameEdit = formElementEdit.querySelector(".form__text_type_name");
const aboutEdit = formElementEdit.querySelector(".form__text_type_about");

// Находим текстовые поля ошибок name и about в форме профиля
const nameError = formElementEdit.querySelector(".name-input-error");
const aboutError = formElementEdit.querySelector(".about-input-error");

// Находим нужные кнопки и значения фотографий
const photoList = document.querySelector(".photos__list");
const popupAddPhoto = document.querySelector(".popup_name_add-photo");
const popupPicture = document.querySelector(".popup_name_picture");
const buttonAdd = document.querySelector(".profile__add-btn");
const formElementAddPhoto = popupAddPhoto.querySelector(".form_add-photo");
const buttonFormAddPhoto = formElementAddPhoto.querySelector(
  ".form__btn_type_add-photo"
);

// Находим текстовые поля title и link в форме фотографий
const titleAdd = formElementAddPhoto.querySelector(".form__text_type_title");
const linkAdd = formElementAddPhoto.querySelector(".form__text_type_link");

// Находим текстовые поля ошибок title и link в форме фотографий
const titleError = formElementAddPhoto.querySelector(".title-input-error");
const linkError = formElementAddPhoto.querySelector(".link-input-error");

// Находим поля title и Img в попапе фотографий
const pictureTitle = popupPicture.querySelector(".popup__picture-title");
const pictureImg = popupPicture.querySelector(".popup__picture");

// Находим кнопки закрытия
const btnCloseEdit = popupEdit.querySelector(".popup__close-btn_name_edit");
const btnClosePhoto = popupAddPhoto.querySelector(
  ".popup__close-btn_name_photo"
);
const btnClosePicture = popupPicture.querySelector(
  ".popup__close-btn_name_picture"
);

function closePopup(popup) {
  popup.classList.remove("popup_opened");

  document.removeEventListener("keydown", closePopupEsc);
}

function closePopupOverlay(event) {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}

function closePopupEsc(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_opened");

    closePopup(popup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");

  document.addEventListener("keydown", closePopupEsc);
}

function deletePhoto(event) {
  const photo = event.currentTarget.closest(".photo");

  photo.remove();
}

function likePhoto(event) {
  const btnLike = event.currentTarget;

  btnLike.classList.toggle("photo__like-btn_active");
}

function openPhoto(event) {
  const photo = event.currentTarget.closest(".photo");

  pictureTitle.textContent = photo.querySelector(".photo__name").textContent;
  pictureImg.src = photo.querySelector(".photo__img").src;
  pictureImg.alt = photo.querySelector(".photo__img").alt;

  openPopup(popupPicture);
}

function createPhoto(photo) {
  const photoCard = document
    .querySelector(".photo-template")
    .content.firstElementChild.cloneNode(true); // Клонируем photo-template

  photoCard.querySelector(".photo__name").textContent = photo.name; // Добавляем имя карточки из массива
  photoCard.querySelector(".photo__img").src = photo.link; // Добавляем ссылку на картинку из массива
  photoCard.querySelector(".photo__img").alt = photo.name; // Добавляем alt картинки из массива

  photoCard
    .querySelector(".photo__delete-btn")
    .addEventListener("click", deletePhoto);
  photoCard
    .querySelector(".photo__like-btn")
    .addEventListener("click", likePhoto);
  photoCard.querySelector(".photo__img").addEventListener("click", openPhoto);

  return photoCard;
}

function renderPhoto(photo) {
  const photoCard = createPhoto(photo); // Создаем карточку

  photoList.prepend(photoCard); // Добавляем в разметку
}

function openPropfilePopup() {
  // Вставляем в текстовые поля значения из профиля
  nameEdit.value = profileName.textContent;
  aboutEdit.value = profileAbout.textContent;

  nameEdit.classList.remove("form__text_invalid");
  aboutEdit.classList.remove("form__text_invalid");

  nameError.textContent = "";
  aboutError.textContent = "";

  buttonFormEdit.classList.remove("form__btn_disabled");
  buttonFormEdit.removeAttribute("disabled", "");

  openPopup(popupEdit);
}

function openAddPhotoPopup() {
  // Очищаем поля ввода
  titleAdd.value = "";
  linkAdd.value = "";

  titleAdd.classList.remove("form__text_invalid");
  linkAdd.classList.remove("form__text_invalid");

  titleError.textContent = "";
  linkError.textContent = "";

  buttonFormAddPhoto.classList.add("form__btn_disabled");
  buttonFormAddPhoto.setAttribute("disabled", "");

  openPopup(popupAddPhoto);
}

// Обработчик «отправки» формы добавления карточки
function formSubmitHandlerCreate(event) {
  // Создаем объект с введенной информацией
  const photo = {
    name: titleAdd.value,
    link: linkAdd.value,
  };

  renderPhoto(photo); // Формируем карточку

  closePopup(popupAddPhoto); //Закрываем попап
}

// Обработчик «отправки» формы редактирования
function formSubmitHandlerEdit(event) {
  // Получаем значение полей nameEdit и aboutEdit из свойства value
  const newName = nameEdit.value;
  const newAbout = aboutEdit.value;

  // Вставляем новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup(popupEdit);
}

photos.forEach(renderPhoto); // Запускаем рендеринг фотографий на страницу

formElementEdit.addEventListener("submit", formSubmitHandlerEdit); // Прикрепляем обработчик к форме редактирования

//Открываем попап редактирования профиля
buttonEdit.addEventListener("click", openPropfilePopup);

// Закрываем попап редактирования
btnCloseEdit.addEventListener("click", () => {
  closePopup(popupEdit);
});

popupEdit.addEventListener("click", closePopupOverlay); // Закрываем попап редактирования при клике на оверлей

formElementAddPhoto.addEventListener("submit", formSubmitHandlerCreate); // Прикрепляем обработчик к форме добавления фотографии

// Открываем попап добавления фотографии
buttonAdd.addEventListener("click", openAddPhotoPopup);

// Закрываем попап добавления фотографии
btnClosePhoto.addEventListener("click", () => {
  closePopup(popupAddPhoto);
});

popupAddPhoto.addEventListener("click", closePopupOverlay); // Закрываем попап добавления фотографии при клике на оверлей

// Закрываем попап просмотра фотографии
btnClosePicture.addEventListener("click", () => {
  closePopup(popupPicture);
});

popupPicture.addEventListener("click", closePopupOverlay); // Закрываем попап просмотра фотографии при клике на оверлей
