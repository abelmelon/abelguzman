 // Seleccionamos los elementos del DOM
  const menuToggle = document.getElementById('menu-toggle');
  const fsMenuLeft = document.getElementById('fsmenu-left');
  const toggleMode = document.getElementById('toggleMode');
    
  // Opcional: si más adelante agregas el div de la clase .fsmenu-overlay
  // const overlay = document.querySelector('.fsmenu-overlay');

  // Escuchamos el evento click en el botón hamburguesa
  menuToggle.addEventListener('click', () => {
    // Alterna la animación de las barras del botón (de hamburguesa a X)
    menuToggle.classList.toggle('active');
    
    // Alterna la entrada del menú lateral izquierdo
    fsMenuLeft.classList.toggle('left-active');

    // Alterna la entrada del menú lateral izquierdo
    toggleMode.classList.toggle('mode-active');

   
    // Si tuvieras el overlay en el HTML, activarías esta línea:
    // overlay.classList.toggle('overlay-active');
  });
  