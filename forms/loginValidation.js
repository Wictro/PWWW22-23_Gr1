let usernameRegex = /^[a-zA-Z0-9@.]{3,15}$/;
let passwordRegex = /^[a-zA-Z0-9.,@!&$]{8,}$/;

let form = document.getElementById("login-form");
let usernameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");

form.addEventListener("submit", (event) => {
  let isValidUser = usernameRegex.test(usernameInput.value);
  let isValidPassword = passwordRegex.test(passwordInput.value);
  let isValidEmail = usernameInput.value.includes(".com") || usernameInput.value.includes(".edu")
  let isValidUsername = isValidUser && isValidEmail
  console.log(isValidUser)
  console.log(isValidEmail)
  console.log(isValidPassword)

  if (!isValidUsername || !isValidPassword) {
    alert("Please fill in all necessary fields with appropriate standard");
    event.preventDefault();
  }

  if (isValidUsername && isValidPassword) {
    let username = usernameRegex.exec(usernameInput.value)[0];
    let password = passwordRegex.exec(passwordInput.value)[0];
    console.log(username)
    console.log(password)
    alert("Validation finished successfully!")
  }
});

