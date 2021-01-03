const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// toggle nav
toggle.addEventListener("click", function () {
  document.body.classList.toggle("show-nav");
});

// show modal

open.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

// close modal
close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

// hide modal on click
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    console.log(event.target);
    modal.classList.remove("show-modal");
  } else {
    return;
  }
});
