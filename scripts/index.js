let page = document.querySelector('.page');
let edit = page.querySelector('.profile__edit-btn');
let popup = page.querySelector('.popup');
let close = popup.querySelector('.popup__close-btn');
let save = popup.querySelector('.input__save-btn');

function popupOpen() {
  popup.classList.add('popup_opened');

  let profileName = page.querySelector('.profile__name');
  let profileAbout = page.querySelector('.profile__about');

  let formElement = popup.querySelector('.input');
  let inputName = formElement.querySelector('.input__text_type_name');
  let inputAbout = formElement.querySelector('.input__text_type_about');

  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function popupSave() {
  let formElement = popup.querySelector('.input');
  let inputName = formElement.querySelector('.input__text_type_name');
  let inputAbout = formElement.querySelector('.input__text_type_about');

  // Обработчик «отправки» формы
  function formSubmitHandler (evt) {
      evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

      // Получите значение полей inputName и inputAbout из свойства value
      let newName = inputName.value;
      let newAbout = inputAbout.value;

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
