// Массив фотографий
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
const formElement = popupEdit.querySelector(".edit");

// Находим нужные кнопки и значения для фотографий
const photoList = document.querySelector(".photos__list");
const popupAddPhoto = document.querySelector(".popup_name_add-photo");
const add = document.querySelector(".profile__add-btn");

// Рендеринг фотографий из массива на страницу
function renderPhoto(photo) {
  const photoCard = document.querySelector(".photo-template").content.firstElementChild.cloneNode(true); // Клонируем photo-template

  photoCard.querySelector(".photo__name").textContent = photo.name; // Добавляем имя карточки из массива
  photoCard.querySelector(".photo__img").src = photo.link; // Добавляем ссылку на картинку из массива
  photoCard.querySelector(".photo__img").alt = photo.name; // Добавляем alt картинки из массива

  photoList.append(photoCard); // Добавляем карточку
}

// Добавление фотографии
function addPhoto(event) {
  event.preventDefault(); // Отменяем стандартные функции отправки формы

  /*const newTodoText = event.currentTarget.querySelector(".todos__input").value;

  if (editingTodo) {
    editingTodo.querySelector(".todo__text").textContent = newTodoText;

    todoFormSubmitBtn.textContent = "Добавить";

    editingTodo = null;
  } else {
    renderTodo(newTodoText);
  }

  event.currentTarget.reset();*/
}

// Находим значения name и about
let profileName = page.querySelector(".profile__name");
let profileAbout = page.querySelector(".profile__about");

// Находим текстовые поля name и about в форме
let editName = formElement.querySelector(".edit__text_type_name");
let editAbout = formElement.querySelector(".edit__text_type_about");

// Открыть попап
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  
  const closeBtn = popupName.querySelector(".popup__close-btn"); // Находим кнопку "закрыть" в открытом попапе
  closeBtn.addEventListener("click", () => {closePopup(popupName)}); // Вешаем на неё обработчик событий closePopup

  if (popupName === popupEdit) {
    // Вставляем в текстовые поля значения из профиля
    editName.value = profileName.textContent;
    editAbout.value = profileAbout.textContent;
  }
}

// Закрыть попап
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}

// Обработчик «отправки» формы редактирования формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей editName и editAbout из свойства value
  let newName = editName.value;
  let newAbout = editAbout.value;

  // Вставьте новые значения с помощью textContent
  profileName.textContent = newName;
  profileAbout.textContent = newAbout;

  closePopup(popupEdit);
}

// Прикрепляем обработчик к форме:
formElement.addEventListener("submit", formSubmitHandler);

edit.addEventListener("click", () => {openPopup(popupEdit)});

// Запускаем рендеринг фотографий
photos.map(renderPhoto);

// Открываем попап добавления фотографии
add.addEventListener("click", () => {openPopup(popupAddPhoto)});
