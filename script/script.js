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
