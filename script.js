const toggleButton = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (toggleButton && navLinks) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });
}

const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('感谢您的提交，我们会尽快与您联系。');
    contactForm.reset();
  });
}
