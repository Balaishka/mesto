let page = document.querySelector('.page');
let edit = page.querySelector('.profile__edit-btn');
let popup = page.querySelector('.popup');
let close = popup.querySelector('.popup__close-btn');
let save = popup.querySelector('.edit__save-btn');

function popupOpen() {
  popup.classList.add('popup_opened');

  let profileName = page.querySelector('.profile__name');
  let profileAbout = page.querySelector('.profile__about');

  let formElement = popup.querySelector('.edit');
  let editName = formElement.querySelector('.edit__text_type_name');
  let editAbout = formElement.querySelector('.edit__text_type_about');

  editName.value = profileName.textContent;
  editAbout.value = profileAbout.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave() {
  let formElement = popup.querySelector('.edit');
  let editName = formElement.querySelector('.edit__text_type_name');
  let editAbout = formElement.querySelector('.edit__text_type_about');

  // Обработчик «отправки» формы
  function formSubmitHandler (evt) {
      evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

      // Получите значение полей editName и editAbout из свойства value
      let newName = editName.value;
      let newAbout = editAbout.value;

      // Выберите элементы, куда должны быть вставлены значения полей
      let profileName = page.querySelector('.profile__name');
      let profileAbout = page.querySelector('.profile__about');

      // Вставьте новые значения с помощью textContent
      profileName.textContent = newName;
      profileAbout.textContent = newAbout;
  }

  // Прикрепляем обработчик к форме:
  formElement.addEventListener('submit', formSubmitHandler);

  popupClose();
}

edit.addEventListener('click', popupOpen);

close.addEventListener('click', popupClose);

save.addEventListener('click', popupSave);
