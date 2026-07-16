document.addEventListener("DOMContentLoaded", () => {
  // 1. Configuramos el observador
  const observerOptions = {
    root: null, // Usa el viewport del navegador
    rootMargin: "0px", // Sin margen extra
    threshold: 0.15 // Se activa cuando el 10% del elemento es visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Si el elemento entra en el viewport...
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Deja de observarlo para que la animación solo ocurra una vez
      }
    });
  }, observerOptions);

  // 2. Buscamos todos los elementos con la clase .fade-in-up y los ponemos bajo observación
  const elementsToAnimate = document.querySelectorAll(".fade-in-up");
  elementsToAnimate.forEach(el => observer.observe(el));
});