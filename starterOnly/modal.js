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



//utilisaiton du onchange pour valider et vérifier en fur et à mesure

//vérification prénom 
// Utilisation de getElementById pour obtenir l'élément du prénom
let firstName = document.getElementById('first');

// Utilisation de addEventListener pour écouter l'événement "change"
firstName.addEventListener("change", function() {
    nameVerification();
});

function nameVerification() {
    let firstNameValue = firstName.value;
    let errorMessageElement = document.getElementById("first-error-message");


    if (firstNameValue === "" || firstNameValue.length < 2) {
        errorMessageElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        firstName.classList.add('input-erreur');
    } else {
        errorMessageElement.textContent = "";
        firstName.classList.remove('input-erreur');
    }
}

// vérificaiton nom
let lastName = document.getElementById('last');
lastName.addEventListener("change", function() {
    lastNameVerification();
});

function lastNameVerification() {
    let lastNameValue = lastName.value;
    let errorMessageElement = document.getElementById("last-error-message");
    if (lastNameValue === "" || lastNameValue.length < 2) {
        errorMessageElement.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById('last').classList.add('input-erreur');

        return false;
    } else {
        errorMessageElement.textContent = "";
        document.getElementById('last').classList.remove('input-erreur');
    }
};

// Vérification de l'e-mail
let email = document.getElementById('email');
email.addEventListener("change", function() {
    emailVerification();
});

function emailVerification() {
    let emailValue = email.value;
    const emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    let errorMessageElement = document.getElementById("email-error-message");

    if (emailValue === "" || !emailRegex.test(emailValue)) {
        errorMessageElement.textContent = "Veuillez entrer un email valide.";
        document.getElementById('email').classList.add('input-erreur');
        return false;
    } else {
        errorMessageElement.textContent = "";
        document.getElementById('email').classList.remove('input-erreur');
        return true;
    }
};

// verification de la date de naissance 

let birthdate = document.getElementById('birthdate');
birthdate.addEventListener("change", function() {
    birthdateVerification();
});

function birthdateVerification() {

    // Vérification de la date de naissance
    let birthdateValue = birthdate.value;
    let errorMessageElement = document.getElementById("birthdate-error-message");

    if (isNaN(Date.parse(birthdateValue))) {
        errorMessageElement.textContent = "Vous devez entrer votre date de naissance.";
        document.getElementById('birthdate').classList.add('input-erreur');
        return false;
    } else {
        errorMessageElement.textContent = "";
        document.getElementById('birthdate').classList.remove('input-erreur');
        return true;
    };
};

// écoute quantity 

let quantity = document.getElementById('quantity');
quantity.addEventListener("change", function() {
    quantityVerification();
});

function quantityVerification() {
    // Vérification du nombre de tournois GameOn déjà participés
    let errorMessageElement = document.getElementById("quantity-error-message");
    let quantityValue = quantity.value;
    const numberRegex = /^\d+$/;
    if (quantityValue === "" || !numberRegex.test(quantityValue)) {
        errorMessageElement.textContent = "Vous devez saisir une valeur numérique.";
        document.getElementById('quantity').classList.add('input-erreur');
        return false;
    } else {
        errorMessageElement.textContent = "";
        document.getElementById('quantity').classList.remove('input-erreur');
        return true;
    };
};




//Vérification de la sélection d'un tournoi
let selectedLocation = document.querySelector('input[name="location"]');
selectedLocation.addEventListener("change", function() {
    selectedLocationVerification();
});

function selectedLocationVerification() {
    let errorMessageElement = document.getElementById("location-error-message");
    let selectedLocationVerification = document.querySelector('input[name="location"]:checked');
    if (!selectedLocationVerification) {
        errorMessageElement.textContent = "Vous devez choisir une option.";
        return false;
    } else {
        errorMessageElement.textContent = "";
        return true;
    };
};


let termsAccepted = document.getElementById("checkbox1");

termsAccepted.addEventListener("change", function() {
    termsAcceptedVerification();
});

function termsAcceptedVerification() {
    let errorMessageElement = document.getElementById("conditions-error-message");
    // Vérification de l'acceptation des conditions d'utilisation

    if (!termsAccepted.checked) {
        errorMessageElement.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";

        return false;
    } else {
        errorMessageElement.textContent = "";
        return true;

    }
};







function validate() {

    // Vérification du prénom
    let firstName = document.querySelector('input[name="first"]').value;

    if (firstName === "" || firstName.length < 2) {
        document.getElementById("first-error-message").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
        document.getElementById('first').classList.add('input-erreur');

        return false;
    } else {
        document.getElementById("first-error-message").textContent = "";
        document.getElementById('first').classList.remove('input-erreur');
    };

    // Vérification du nom
    let lastName = document.querySelector('input[name="last"]').value;
    if (lastName === "" || lastName.length < 2) {
        document.getElementById("last-error-message").textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById('last').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("last-error-message").textContent = "";
        document.getElementById('last').classList.remove('input-erreur');
    };

    // Vérification de l'e-mail
    let email = document.querySelector('input[name="email"]').value;
    const emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email-error-message").textContent = "Veuillez entrer un email valide.";
        document.getElementById('email').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("email-error-message").textContent = "";
        document.getElementById('email').classList.remove('input-erreur');
    }


    // Vérification de la date de naissance
    let birthdate = document.querySelector('input[name="birthdate"]').value;
    if (isNaN(Date.parse(birthdate))) {
        document.getElementById("birthdate-error-message").textContent = "Vous devez entrer votre date de naissance.";
        document.getElementById('birthdate').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("birthdate-error-message").textContent = "";
        document.getElementById('birthdate').classList.remove('input-erreur');
    };

    // Vérification du nombre de tournois GameOn déjà participés
    let quantity = document.querySelector('input[name="quantity"]').value;
    const numberRegex = /^\d+$/;
    if (quantity === "" || !numberRegex.test(quantity)) {
        document.getElementById("quantity-error-message").textContent = "Vous devez saisir une valeur numérique.";
        document.getElementById('quantity').classList.add('input-erreur');
        return false;
    } else {
        document.getElementById("quantity-error-message").textContent = "";
        document.getElementById('quantity').classList.remove('input-erreur');
    };



    // Vérification de la sélection d'un tournoi
    let selectedLocation = document.querySelector('input[name="location"]:checked');
    if (!selectedLocation) {
        document.getElementById("location-error-message").textContent = "Vous devez choisir une option.";
        return false;
    } else {
        document.getElementById("location-error-message").textContent = "";
    }

    // Vérification de l'acceptation des conditions d'utilisation

    let termsAccepted = document.getElementById("checkbox1").checked;
    if (!termsAccepted) {
        document.getElementById("conditions-error-message").textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
        return false;
    } else {
        document.getElementById("conditions-error-message").textContent = "";
    }

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

    if (validate()) {




        // pour chaque input du formulaire on les passent en display non
        formData.forEach((element) => (element.style.display = "none"));
        // pareil pour le bouton
        submitBtn.style.display = "none";
        // on affiche le message de confirmation
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