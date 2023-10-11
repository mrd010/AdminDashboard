// favorite button action - it toggles favorite on projects
const favBtns = document.querySelectorAll(".projects-section .fav-button");

favBtns.forEach((btn) => {
  btn.addEventListener("click", toggleProjectButton);
});

function toggleProjectButton() {
  if (this.classList.contains("on")) {
    this.classList.remove("on");
  } else {
    this.classList.add("on");
  }
}

const sideMenu = document.querySelector(".side-nav");
const sideMenuBackdrop = document.querySelector(".nav-backdrop");
const menuBtn = document.querySelector(".header .hamburger-button");
const closeBtn = sideMenu.querySelector(".close-button");

let sideMenuIsOpen = false;

// side menu on mobile close side menu with close button
closeBtn.addEventListener("click", closeMenu);

sideMenuBackdrop.addEventListener("click", (e) => {
  if (!sideMenuIsOpen) {
    return;
  }
  const target = e.target;
  if (!target.closest(".side-nav")) {
    closeMenu();
  }
});

function closeMenu() {
  sideMenu.style.left = "calc(0px - 100vw)";
  sideMenuBackdrop.classList.remove("blurred");
  sideMenuBackdrop.classList.add("transparent");
  document.body.style.touchAction = "initial";
  sideMenuIsOpen = false;
}

// side menu on mobile open side menu with menu button

menuBtn.addEventListener("click", openMenu);

function openMenu() {
  document.body.style.touchAction = "none";
  sideMenu.style.left = "0";
  sideMenuBackdrop.classList.remove("transparent");
  sideMenuBackdrop.classList.add("blurred");
  sideMenuIsOpen = true;
}
