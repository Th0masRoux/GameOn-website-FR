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




// est appelé avec le  submit 
function validate() {

    // Vérification du prénom
    let firstName = document.querySelector('input[name="first"]').value;

    if (firstName === "" || firstName.length < 2) {
        document.getElementById("first-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        document.getElementById('first').classList.add('input-erreur');

        return false;
    } else {
        document.getElementById("first-error-message").innerHTML = "";
        document.getElementById('first').classList.remove('input-erreur');
    };

    // Vérification du nom
    let lastName = document.querySelector('input[name="last"]').value;
    if (lastName === "" || lastName.length < 2) {
        document.getElementById("last-error-message").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById('last').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("last-error-message").innerHTML = "";
        document.getElementById('last').classList.remove('input-erreur');
    };

    // Vérification de l'e-mail
    let email = document.querySelector('input[name="email"]').value;
    const emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email-error-message").innerHTML = "Veuillez entrer un email valide.";
        document.getElementById('email').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("email-error-message").innerHTML = "";
        document.getElementById('email').classList.remove('input-erreur');
    }


    // Vérification de la date de naissance
    let birthdate = document.querySelector('input[name="birthdate"]').value;
    if (isNaN(Date.parse(birthdate))) {
        document.getElementById("birthdate-error-message").innerHTML = "Vous devez entrer votre date de naissance.";
        document.getElementById('birthdate').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("birthdate-error-message").innerHTML = "";
        document.getElementById('birthdate').classList.remove('input-erreur');
    };

    // Vérification du nombre de tournois GameOn déjà participés
    let quantity = document.querySelector('input[name="quantity"]').value;
    const numberRegex = /^\d+$/;
    if (quantity === "" || !numberRegex.test(quantity)) {
        document.getElementById("quantity-error-message").innerHTML = "Vous devez saisir une valeur numérique.";
        document.getElementById('quantity').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("quantity-error-message").innerHTML = "";
        document.getElementById('quantity').classList.remove('input-erreur');
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
    return true;
};
//event listener
// on rrécupère le formulaire
let form = document.getElementById("reserve");
let submitBtn = document.querySelector(".btn-submit");
// on y ajoute un event submit
form.addEventListener("submit", (event) => {
    // on change le comportement par défaut qui raffraichie la page 
    event.preventDefault();
    // on execute la fonction validate 
    if (validate() === true) {


        formData.forEach((element) => (element.style.display = "none"));
        submitBtn.style.display = "none";
        showMsgConfirmation()
    }

});
// fonction qui vient modifier me DOM en créant et affichant un message de confirmation
// et un bouton de fermeture de la modale
function showMsgConfirmation() {
    let validationMessage = document.createElement("p");
    validationMessage.className = "confirmation";
    validationMessage.innerHTML = "Merci pour votre inscription.";

    let closeBtn = document.createElement("input");
    closeBtn.className = "btn-submit";
    closeBtn.value = "Fermer";

    let confirmationWrapper = document.createElement("div");
    confirmationWrapper.className = "modal-confirmation";
    confirmationWrapper.appendChild(validationMessage);
    confirmationWrapper.appendChild(closeBtn);

    let modalbody = document.getElementsByClassName("modal-body");
    modalbody[0].appendChild(confirmationWrapper);

    // écouteur d'événement qui vient fermer la modale et appeler les fonctions
    // "displayForm" et "resetForm" au clic
    closeBtn.addEventListener("click", () => {
        const modalbg = document.querySelector(".bground");
        modalbg.style.display = "none";
        displayForm();
        resetForm();
    });
}

// remet à zero le contenu du formulaire
function resetForm() {
    const form = document.querySelector("form[name='reserve']");
    form.reset();
}

// fonction qui vient réafficher tous les inputs
// ainsi que le bouton submit du formulaire
function displayForm() {
    formData.forEach((element) => (element.style.display = "block"));
    submitBtn.style.display = "block";
};