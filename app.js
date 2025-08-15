// Scroll a "Sobre mí"
document.querySelector('.link-sobre-mi').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que recargue la página
  document.querySelector('#sobre-mi').scrollIntoView({
    behavior: 'smooth'
  });
});

// Scroll a "Contacto"
document.querySelector('.link-contacto').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#contacto').scrollIntoView({
    behavior: 'smooth'
  });
});