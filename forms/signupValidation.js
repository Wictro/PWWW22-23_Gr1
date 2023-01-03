let nameRegex = /^.{2,}$/;
let usernameRegex = /^[a-zA-Z0-9@.]{3,15}$/ig;
let passwordRegex = /^[a-zA-Z0-9@.,!&$]{8,}$/;

let form = document.getElementById("signup-form");
let nameInput = document.getElementById("name");
let usernameInput = document.getElementById("username");
let genderMaleInput = document.getElementById("genderMale");
let genderFemaleInput = document.getElementById("genderFemale");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let repeatPasswordInput = document.getElementById("repeat-password");

form.addEventListener("submit", (event) => {
  let isValidName = nameRegex.test(nameInput.value);
  let isValidUsername = usernameRegex.test(usernameInput.value);
  let isValidEmail = !!emailInput.value.match(".com") || !!emailInput.value.match(".edu");
  let isValidPassword = passwordRegex.test(passwordInput.value) && passwordRegex.test(repeatPasswordInput.value);
  let isValidRepeatPassword = passwordInput.value === repeatPasswordInput.value;

  if (!isValidName || !isValidUsername || !isValidPassword || !isValidRepeatPassword || !isValidEmail) {
    alert("Please fill in all necessary fields with appropriate standard");
    event.preventDefault();
  }
  else {
    if (passwordInput.vale === repeatPasswordInput.value) {
      alert("You didn't enter the same password twice!")
      event.preventDefault();
    }
    else {
      const userData = {
        name: nameInput.value,
        username: usernameInput.value,
        gender : !!genderMaleInput.value ? "male" : ( !!genderFemaleInput.value ? "female" : "unspecified" ),
        email: emailInput.value,
        password: passwordInput.value
      }
      const emailAlreadyExists = Object.keys(localStorage).includes(`UserDataFor: ${emailInput.value}`)
      if (emailAlreadyExists) {
        alert("A user with that email address is already registered! Please change email address!");
        event.preventDefault()
      }
      else {
        event.preventDefault();
        alert("Accout successfully created!")
        localStorage.setItem(`UserDataFor: ${emailInput.value}`, JSON.stringify(userData));
        window.location.href = "login.html"
      }
    }
  }
});