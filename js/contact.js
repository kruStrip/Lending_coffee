'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    const nameError = document.getElementById('contact-name-error');
    const emailError = document.getElementById('contact-email-error');
    const messageError = document.getElementById('contact-message-error');

    // Сброс ошибок
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    messageInput.classList.remove('input-error');

    let valid = true;
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Валидация имени
    if (!name) {
      nameError.textContent = 'Введите ваше имя';
      nameInput.classList.add('input-error');
      valid = false;
    } else if (name.length < 2) {
      nameError.textContent = 'Имя должно быть не короче 2 символов';
      nameInput.classList.add('input-error');
      valid = false;
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = 'Введите email';
      emailInput.classList.add('input-error');
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = 'Введите корректный email';
      emailInput.classList.add('input-error');
      valid = false;
    }

    // Валидация сообщения
    if (!message) {
      messageError.textContent = 'Введите сообщение';
      messageInput.classList.add('input-error');
      valid = false;
    } else if (message.length < 10) {
      messageError.textContent = 'Сообщение слишком короткое (мин. 10 символов)';
      messageInput.classList.add('input-error');
      valid = false;
    }

    if (!valid) return;

    // Успех — скрываем форму, показываем сообщение
    form.style.display = 'none';
    document.getElementById('contact-success').style.display = 'block';
  });
});
