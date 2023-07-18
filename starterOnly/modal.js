function editNav() {
    let x = document.getElementById("myTopnav");
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



// est appelé avec le onsubmit 
function validate() {
    // Vérification du prénom
    let firstName = document.querySelector('input[name="first"]').value;

    if (firstName === "" || firstName.length < 2) {
        document.getElementById("first-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        return false;
    } else {
        document.getElementById("first-error-message").innerHTML = "";
    };

    // Vérification du nom
    let lastName = document.querySelector('input[name="last"]').value;
    if (lastName === "" || lastName.length < 2) {
        document.getElementById("last-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        return false;
    } else {
        document.getElementById("last-error-message").innerHTML = "";
    };

    // Vérification de l'e-mail
    let email = document.querySelector('input[name="email"]').value;
    const emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email-error-message").innerHTML = "Veuillez entrer un email valide.";
        return false;
    } else {
        document.getElementById("email-error-message").innerHTML = "";
    }


    // Vérification de la date de naissance
    let birthdate = document.querySelector('input[name="birthdate"]').value;
    if (isNaN(Date.parse(birthdate))) {
        document.getElementById("birthdate-error-message").innerHTML = "Vous devez entrer votre date de naissance.";
        return false;
    } else {
        document.getElementById("birthdate-error-message").innerHTML = "";
    };

    // Vérification du nombre de tournois GameOn déjà participés
    let quantity = document.querySelector('input[name="quantity"]').value;
    const numberRegex = /^\d+$/;
    if (quantity === "" || !numberRegex.test(quantity)) {
        document.getElementById("quantity-error-message").innerHTML = "Vous devez saisir une valeur numérique.";
        return false;
    } else {
        document.getElementById("quantity-error-message").innerHTML = "";

    };



    // Vérification de la sélection d'un tournoi
    let selectedLocation = document.querySelector('input[name="location"]:checked');
    if (!selectedLocation) {
        document.getElementById("location-error-message").innerHTML = "Vous devez choisir une option.";
        return false;
    } else {
        document.getElementById("location-error-message").innerHTML = "";
    }

    // Vérification de l'acceptation des conditions d'utilisation
    let termsAccepted = document.getElementById("checkbox1").checked;
    if (!termsAccepted) {
        document.getElementById("conditions-error-message").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
        return false;
    } else {
        document.getElementById("conditions-error-message").innerHTML = "";
    }

    // Le formulaire est valide

};