// Mostrar alerta al enviar el formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function (e) {
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