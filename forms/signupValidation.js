let nameRegex = /^.{2,}$/;
let usernameRegex = /^[a-zA-Z0-9@.]{3,15}$/;
let passwordRegex = /^[a-zA-Z0-9.,@!&$]{8,}$/;

let form = document.getElementById("signup-form");
let nameInput = document.getElementById("name");
let usernameInput = document.getElementById("username");
let genderMaleInput = document.getElementById("genderMale");
let genderFemaleInput = document.getElementById("genderFemale");
let passwordInput = document.getElementById("password");
let repeatPasswordInput = document.getElementById("repeat-password");

form.addEventListener("submit", (event) => {
  let isValidName = nameRegex.test(nameInput.value);
  let isValidUsername = usernameRegex.test(usernameInput.value);
  let isValidGender = genderMaleInput.value !== "" || genderFemaleInput.value !== "";
  let isValidPassword = passwordRegex.test(passwordInput.value);
  let isValidRepeatPassword = passwordInput.value === repeatPasswordInput.value;

  if (!isValidName || !isValidUsername || !isValidGender || !isValidPassword || !isValidRepeatPassword) {
    alert("Please fill in all necessary fields with appropriate standard");
    event.preventDefault();
  }
});