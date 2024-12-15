// Select necessary elements
let form = document.querySelector("#form");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let queryType = document.querySelectorAll('input[name="querytype"]');
let consent = document.querySelector("#consent");
let errorFirstName = document.querySelector("#firstname + .error-hidden");
let errorLastName = document.querySelector("#lastname + .error-hidden");
let errorEmail = document.querySelector("#email + .error-hidden");
let errorMessage = document.querySelector("#message + .error-hidden");
let errorQueryType = document.querySelector("#query + .error-hidden");
let errorConsent = document.querySelector(".form-group.checkbox .error-hidden"); 
let popup = document.querySelector(".popup");

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let isValid = true;

    if (firstName.value === "") {
        showError(firstName, errorFirstName);
        isValid = false;
    } else {
        showSuccess(firstName, errorFirstName);
    }

    if (lastName.value === "") {
        showError(lastName, errorLastName);
        isValid = false;
    } else {
        showSuccess(lastName, errorLastName);
    }

    if (email.value === "") {
        showError(email, errorEmail);
        isValid = false;
    } else {
        showSuccess(email, errorEmail);
    }

    if (message.value === "") {
        showError(message, errorMessage);
        isValid = false;
    } else {
        showSuccess(message, errorMessage);
    }

    if (![...queryType].some(radio => radio.checked)) { 
        showError(queryType[0], errorQueryType); 
        isValid = false;
    } else {
        showSuccess(queryType[0], errorQueryType); 
    }

    if (!consent.checked) {
        showError(consent, errorConsent);
        isValid = false;
    } else {
        showSuccess(consent, errorConsent);
    }

    if (isValid) {
        popup.classList.add("show");
        form.reset(); 
    }
});

function showError(input, errorElement) {
    if (errorElement) {
        errorElement.style.display = "block";
    }
    input.classList.add("inpError"); 
}

function showSuccess(input, errorElement) {
    if (errorElement) {
        errorElement.style.display = "none"; 
    }
    input.classList.remove("inpError"); 
}

queryType.forEach(radio => {
    radio.addEventListener('change', () => {
        showSuccess(queryType[0], errorQueryType); 
    });
});

consent.addEventListener('change', () => {
    if (consent.checked) {
        showSuccess(consent, errorConsent); 
    }
});
