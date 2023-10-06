const hamburgerMenu = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

hamburgerMenu.addEventListener('click', () => {
  menuPolozky.classList.toggle('show');

  if (menuPolozky.classList.contains('show')) {
    hamburgerMenu.innerHTML = '<i class="fas fa-xmark"></i>';
  } else {
    hamburgerMenu.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
