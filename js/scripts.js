document.addEventListener('DOMContentLoaded', function () {
  // Función para inicializar el carrusel con un ID específico
  function iniciarCarrusel(carruselId) {
      let index = 0; // Índice de la imagen
      const carrusel = document.getElementById(carruselId); // Encuentra el carrusel por su ID
      const contenedor = carrusel.querySelector('.carrusel-contenedor'); // Encuentra el contenedor de las imágenes
      const imagenes = carrusel.querySelectorAll('.imagen'); // Encuentra todas las imágenes dentro del carrusel
      const totalImagenes = imagenes.length;

      // Función para cambiar la imagen
      function cambiarImagen(n) {
          index += n;

          // Si el índice es menor a 0, va al final
          if (index < 0) {
              index = totalImagenes - 1;
          }

          // Si el índice es mayor o igual al total de imágenes, vuelve al principio
          if (index >= totalImagenes) {
              index = 0;
          }

          // Mueve el carrusel a la imagen correspondiente
          contenedor.style.transform = `translateX(${-index * 100}%)`;
      }

      // Asociar los eventos de los botones prev y next
      const prevButton = carrusel.querySelector('.prev');
      const nextButton = carrusel.querySelector('.next');

      prevButton.addEventListener('click', function () {
          cambiarImagen(-1); // Va a la imagen anterior
      });

      nextButton.addEventListener('click', function () {
          cambiarImagen(1); // Va a la siguiente imagen
      });
  }

  // Inicializar ambos carruseles
  iniciarCarrusel('carrusel1');
  iniciarCarrusel('carrusel2');
});


let currentIndexDev = 0; // Índice actual del integrante visible
const profiles = document.querySelectorAll('.profile');
const totalProfiles = profiles.length;

function updateCarousel() {
  // Ajustar la posición del carrusel para mostrar el perfil actual
  const carousel = document.querySelector('.carousel');
  const offset = -currentIndexDev * 100; // Mover al siguiente perfil
  carousel.style.transform = `translateX(${offset}%)`;
}

function scrollToProfile(direction) {
  // Cambiar el índice del perfil según la dirección (-1 o 1)
  currentIndexDev += direction;

  // Asegurarse de que el índice esté dentro del rango válido
  if (currentIndexDev < 0) {
    currentIndexDev = totalProfiles - 1; // Ir al último perfil si se excede hacia la izquierda
  } else if (currentIndexDev >= totalProfiles) {
    currentIndexDev = 0; // Volver al primer perfil si se excede hacia la derecha
  }

  updateCarousel();
}

// Inicializa el carrusel al primer perfil
updateCarousel();




