function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// close modal
// on récupère l'élement close
const closeBtn = document.getElementsByClassName("close")[0];
// on ajoute un event listener sur le click et on effectue l'action close modal
closeBtn.addEventListener("click", closeModal);
// passe le modal en display none 
function closeModal() {
    modalbg.style.display = "none";
};