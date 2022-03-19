const photos = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Находим нужные кнопки и блоки
const page = document.querySelector(".page");
const edit = page.querySelector(".profile__edit-btn");
const popupEdit = page.querySelector(".popup_name_edit");
const formElementEdit = popupEdit.querySelector(".form_edit");

// Находим значения name и about
let profileName = page.querySelector(".profile__name");
let profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме
let editName = formElementEdit.querySelector(".form__text_type_name");
let editAbout = formElementEdit.querySelector(".form__text_type_about");

// Находим нужные кнопки и значения для фотографий
const photoList = document.querySelector(".photos__list");
const popupAddPhoto = document.querySelector(".popup_name_add-photo");
const popupPicture = document.querySelector(".popup_name_picture");
const add = document.querySelector(".profile__add-btn");
const formElementAddPhoto = popupAddPhoto.querySelector(".form_add-photo");

// Находим текстовые поля title и link в форме
let addTitle = formElementAddPhoto.querySelector(".form__text_type_title");
let addLink = formElementAddPhoto.querySelector(".form__text_type_link");

// Находим поля title и Img в попапе
let pictureTitle = popupPicture.querySelector(".popup__picture-title");
let pictureImg = popupPicture.querySelector(".popup__picture");

// Обработчик кликов по кнопкам лайк и удаление
document.body.addEventListener("click", (event) => {
  const photo = event.target.closest(".photo");

  if (!photo) {
    return;
  }

  if (event.target.classList.contains("photo__like-btn")) {
    likePhoto(photo);
  } else if (event.target.classList.contains("photo__delete-btn")) {
    deletePhoto(photo);
  } else if (event.target.classList.contains("photo__img")) {
    openPopup(popupPicture);

    pictureTitle.textContent = photo.querySelector(".photo__name").textContent;
    pictureImg.src = photo.querySelector(".photo__img").src;
    pictureImg.alt = photo.querySelector(".photo__img").alt;
  }
});

function renderPhoto(photo) {
  const photoCard = document.querySelector(".photo-template").content.firstElementChild.cloneNode(true); // Клонируем photo-template

  photoCard.querySelector(".photo__name").textContent = photo.name; // Добавляем имя карточки из массива
  photoCard.querySelector(".photo__img").src = photo.link; // Добавляем ссылку на картинку из массива
  photoCard.querySelector(".photo__img").alt = photo.name; // Добавляем alt картинки из массива

  photoList.prepend(photoCard); // Добавляем карточку
}

function deletePhoto(photo) {
  photo.remove();
}

function likePhoto (photo) {
  const photoBtn = photo.querySelector(".photo__like-btn");

  photoBtn.classList.toggle("photo__like-btn_active");
}

// Обработчик «отправки» формы добавления карточки
function formSubmitHandlerCreate(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

      // Создаем объект с введенной информацией
      let photo = {
        name: addTitle.value,
        link: addLink.value
      };

      renderPhoto(photo);// Формируем карточку

      closePopup(popupAddPhoto);//Закрываем попап
}

function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  
  const closeBtn = popupName.querySelector(".popup__close-btn"); // Находим кнопку "закрыть" в открытом попапе
  closeBtn.addEventListener("click", () => {closePopup(popupName)}); // Вешаем на неё обработчик событий closePopup

  if (popupName === popupEdit) {
    // Вставляем в текстовые поля значения из профиля
    editName.value = profileName.textContent;
    editAbout.value = profileAbout.textContent;
  } else if (popupName === popupAddPhoto) {
    addTitle.value = '';
    addLink.value = '';
  }
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}

// Обработчик «отправки» формы редактирования
function formSubmitHandlerEdit(event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получаем значение полей editName и editAbout из свойства value
  let newName = editName.value;
  let newAbout = editAbout.value;

  // Вставляем новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup(popupEdit);
}

photos.map(renderPhoto);// Запускаем рендеринг фотографий

formElementEdit.addEventListener("submit", formSubmitHandlerEdit);// Прикрепляем обработчик к форме редактирования

edit.addEventListener("click", () => {openPopup(popupEdit)});//Открываем попап редактирования профиля

add.addEventListener("click", () => {openPopup(popupAddPhoto)});// Открываем попап добавления фотографии

formElementAddPhoto.addEventListener("submit", formSubmitHandlerCreate);// Прикрепляем обработчик к форме добавления фотографии
