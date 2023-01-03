let form = document.getElementsByTagName("form")[0];
let NAME_REGEXP = /^.{2,}$/;
let PASSWORD_REGEXP = /^[a-zA-Z0-9@.,!&$]{8,}$/;
let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let genderInput = document.getElementById("gender");
let repeatPasswordInput = document.getElementById("confirm-password");

form.onsubmit = (event) => {
    let isValidName = NAME_REGEXP.test(nameInput.value);
    let isValidEmail = EMAIL_REGEXP.test(emailInput.value);
    let isValidPassword = PASSWORD_REGEXP.test(passwordInput.value);
    let isValidRepeatPassword = passwordInput.value === repeatPasswordInput.value;

    if(!isValidName){
        alert("Please enter a valid name!");
        event.preventDefault();
    }

    if(!isValidEmail){
        alert("Please enter a valid email!");
        event.preventDefault();
    }

    if(!isValidPassword){
        alert("Please enter a valid password!");
        event.preventDefault();
    }

    if(!isValidRepeatPassword){
        alert("Password fields must match!");
        event.preventDefault();
    }

    const user = {
        name: nameInput.value,
        gender : genderInput.value,
        email: emailInput.value,
        password: passwordInput.value
      }

      const userWithEmailExists = Object.keys(localStorage).includes(`UserDataFor: ${emailInput.value}`)
      
      if (userWithEmailExists) {
        alert("A user with that email address is already registered! Please change email address or log in!");
        event.preventDefault();
      }
      else {
        event.preventDefault();
        alert("Accout successfully created!")
        localStorage.setItem(`UserDataFor: ${user.email}`, JSON.stringify(user));
        window.location.href = "login.html";
      }
    
}