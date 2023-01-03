let usernameRegex = /^[a-zA-Z0-9@.]{6,30}$/ig;
let passwordRegex = /^[a-zA-Z0-9.,@!&$]{8,}$/;

let form = document.getElementById("login-form");
let usernameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");

// const someTestingData = [
//   {
//     email: 'lorikramosaj@gmail.com',
//     password: 'notsocool'
//   },
//   {
//     email: 'auritebytyci1@gmail.com',
//     password: 'verycool'
//   },
//   {
//     email: 'glenn.recker@gmail.com',
//     password: 'watchlover12'
//   },
//   {
//     email: 'bryanmattesonUSA@gmail.com',
//     password: 'america&italy'
//   },
//   {
//     email: 'evanmeyerAufDeutsch@uni-pr.edu',
//     password: 'tenessianGuy'
//   }
// ]

let dataset = Object.values(window.localStorage).map(item => JSON.parse(item))

form.addEventListener("submit", (event) => {
  let isValidUser = usernameRegex.test(usernameInput.value);
  let isValidPassword = passwordRegex.test(passwordInput.value);
  let isValidEmail = usernameInput.value.includes(".com") || usernameInput.value.includes(".edu")
  let isValidUsername = isValidUser && isValidEmail
  let messageError;

  if (!isValidUsername || !isValidPassword) {
    alert("Please fill in all necessary fields with appropriate standard");
    event.preventDefault();
  }

  if (isValidUsername && isValidPassword) {
    // event.preventDefault();
    let username = usernameRegex.exec(usernameInput.value)[0];
    let password = passwordRegex.exec(passwordInput.value)[0];
    const isValidLogin = dataset?.map((item, index) => {
      if (username !== item.email) {
        messageError = "An account with the given email address doesn't exist. Please create one!"
        return false
      }
      else {
        if (password !== item.password) {
          messageError = "The password for the given email is wrong! Please try again!"
          return false;
        }
        else 
          return true;
      }
    })
    if (isValidLogin.includes(true)) {
      event.preventDefault();
      alert('Successful login!')
      window.location.href = "../index.html"
    }
    else {
      event.preventDefault()
      alert(messageError)
    }
  }
});

