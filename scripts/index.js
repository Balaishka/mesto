// Массив карточек
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
const popup = page.querySelector(".popup");
const close = popup.querySelector(".popup__close-btn");
const formElement = popup.querySelector(".edit");

// Находим нужные кнопки и значения для фотографий
const photoList = document.querySelector(".photos__list");

// Рендеринг фотографий из массива на страницу
function renderPhotos(photo) {
  const photoCard = document.querySelector(".photo-template").content.firstElementChild.cloneNode(true); // Клонируем photo-template

  photoCard.querySelector(".photo__name").textContent = photo.name; // Добавляем имя карточки из массива
  photoCard.querySelector(".photo__img").src = photo.link; // Добавляем ссылку на картинку из массива
  photoCard.querySelector(".photo__img").alt = photo.name; // Добавляем alt картинки из массива

  photoList.append(photoCard); // Добавляем карточку
}

// Находим значения name и about
let profileName = page.querySelector(".profile__name");
let profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме
let editName = formElement.querySelector(".edit__text_type_name");
let editAbout = formElement.querySelector(".edit__text_type_about");

// Открыть попап
function openPopup() {
  popup.classList.add("popup_opened");

  // Вставляем в текстовые поля значения из профиля
  editName.value = profileName.textContent;
  editAbout.value = profileAbout.textContent;
}

// Закрыть попап
function closePopup() {
  popup.classList.remove("popup_opened");
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей editName и editAbout из свойства value
  let newName = editName.value;
  let newAbout = editAbout.value;

  // Вставьте новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup();
}

// Прикрепляем обработчик к форме:
formElement.addEventListener("submit", formSubmitHandler);

edit.addEventListener("click", openPopup);

close.addEventListener("click", closePopup);

// Запускаем рендеринг фотографий
photos.map(renderPhotos);
