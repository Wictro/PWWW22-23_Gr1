let form = document.getElementById("contact-form");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");
let visitedInput = document.getElementById("visited");

let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

form.onsubmit = (event) => {
    let validEmail = EMAIL_REGEXP.test(emailInput.value);
    let validPhone = PHONE_REGEXP.test(phoneInput.value);
    
    if(!validEmail){
        alert("The email you entered is not valid!");
        event.preventDefault();
        return;
    }

    if(!validPhone){
        alert("The phone number you entered is not valid!");
        event.preventDefault();
        return;
    }

    event.preventDefault();
    alert("Contacted successfully!")
}