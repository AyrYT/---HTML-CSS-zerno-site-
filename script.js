// Лёгкая JS-логика: отправка формы и закрытие мобильного меню
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const navToggle = document.getElementById('nav-toggle');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.style.color = '#c9473d';
      status.textContent = 'Пожалуйста, заполните все поля корректно.';
      // подсветить ошибки: показываем первое невалидное поле
      form.querySelector(':invalid').focus();
      return;
    }

    status.style.color = '#2f7d55';
    status.textContent = 'Спасибо! Ваше сообщение отправлено.';
    form.reset();
  });
}

// закрываем меню после выбора пункта на мобильных
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navToggle) navToggle.checked = false;
  });
});
