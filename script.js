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