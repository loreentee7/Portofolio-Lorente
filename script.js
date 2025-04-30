// Mostrar alerta al enviar el formulario de contacto
document.getElementById("contact-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Gracias, ${name}! Tu mensaje ha sido enviado.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Animación suave al hacer clic en el menú
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajustar para compensar el menú fijo
                behavior: 'smooth'
            });
        }
    });
});

// Animaciones de desvanecimiento al hacer scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Activar animación del carrusel al hacer scroll
const carouselRow = document.querySelector('.carousel-row');
const carouselObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            carouselRow.style.animation = 'moveToCenter 5s ease-out forwards';
        }
    });
}, {
    threshold: 0.5 // Se activa cuando el 50% de la sección es visible
});

const skillsSection = document.querySelector('#skills');
carouselObserver.observe(skillsSection);

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Abrir la ventana estilo Windows XP con animación
function openXpWindow() {
    const xpWindow = document.getElementById('xp-window');
    const character = document.querySelector('.character-image');

    // Obtener la posición del personaje
    const rect = character.getBoundingClientRect();

    // Configurar la posición inicial de la ventana (en la posición del personaje)
    xpWindow.style.top = `${rect.top + rect.height / 2}px`;
    xpWindow.style.left = `${rect.left + rect.width / 2}px`;
    xpWindow.style.transform = `translate(-50%, -50%) scale(0)`;
    xpWindow.style.opacity = '0';

    // Forzar un reflujo para que la animación funcione
    void xpWindow.offsetWidth;

    // Animar la ventana hacia el centro
    xpWindow.style.top = '50%';
    xpWindow.style.left = '50%';
    xpWindow.classList.remove('hidden');
    xpWindow.classList.add('visible');
}

// Cerrar la ventana estilo Windows XP
function closeXpWindow() {
    const xpWindow = document.getElementById('xp-window');
    xpWindow.classList.remove('visible');

    // Opcional: Ocultar la ventana después de la animación
    setTimeout(() => {
        xpWindow.classList.add('hidden');
    }, 500); // Tiempo igual al de la animación
}

// Detectar si el personaje está en el área visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Agregar la animación de rebote al personaje una sola vez
function handleScroll() {
    const character = document.querySelector('.character-image');
    if (isElementInViewport(character) && !character.classList.contains('animated')) {
        character.classList.add('bounce-zoom', 'animated'); // Agregar animación y marcar como animado

        // Eliminar la clase de animación después de que termine
        character.addEventListener('animationend', () => {
            character.classList.remove('bounce-zoom');
        }, { once: true }); // Escuchar solo una vez
    }
}

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);

function scrollCarousel(direction) {
    const carousel = document.querySelector('.projects-carousel');
    const scrollAmount = 300; // Cantidad de desplazamiento en píxeles

    if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Alternar entre modo oscuro y claro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Cambiar el ícono del botón
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️'; // Modo claro
    } else {
        darkModeToggle.textContent = '🌙'; // Modo oscuro
    }
});