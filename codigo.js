// RESPONSIVE MENU ------------------------------------------------

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-responsive ul");
const menuLinks = document.querySelectorAll(".nav-responsive ul li a");

// Función para alternar el menú
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Cerrar el menú al hacer clic en cualquier enlace
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show"); // Elimina la clase 'show' para cerrar el menú
  });
});


// CARROUSEL ------------------------------------------------------
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let currentIndex = 0;
const totalImages = images.length;
const intervalTime = 4000;

// Mover el carrusel a la imagen actual
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Mostrar la siguiente imagen
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Mostrar la imagen anterior
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Avance automático
let autoPlay = setInterval(nextImage, intervalTime);

// Eventos de botones
nextBtn.addEventListener('click', () => {
  clearInterval(autoPlay); // Pausar autoplay
  nextImage();
  autoPlay = setInterval(nextImage, intervalTime); // Reiniciar autoplay
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoPlay);
  prevImage();
  autoPlay = setInterval(nextImage, intervalTime);
});

// Pausar autoplay al interactuar
carousel.addEventListener('mouseover', () => clearInterval(autoPlay));
carousel.addEventListener('mouseout', () => autoPlay = setInterval(nextImage, intervalTime));



// GALERIA -----------------------------------------

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imageSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}


// CONTACTO -----------------------------------------

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío tradicional
  
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: 'POST',
      body: formData,
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById('response-message').innerText = data;
      form.reset(); // Limpia el formulario tras enviarlo
  })
  .catch(error => console.error('Error:', error));
});


