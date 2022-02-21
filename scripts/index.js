// Находим нужные кнопки и блоки
let page = document.querySelector(".page");
let edit = page.querySelector(".profile__edit-btn");
let popup = page.querySelector(".popup");
let close = popup.querySelector(".popup__close-btn");
let formElement = popup.querySelector(".edit");

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
