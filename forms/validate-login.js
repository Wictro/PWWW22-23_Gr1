let form = document.getElementsByTagName("form")[0];
let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let PASSWORD_REGEXP = /^[a-zA-Z0-9.,@!&$]{8,}$/;

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let dataset = Object.values(window.localStorage).map(item => JSON.parse(item));

form.onsubmit = (event) => {
  let isValidEmail = EMAIL_REGEXP.test(emailInput.value);
  let isValidPassword = PASSWORD_REGEXP.test(passwordInput.value);

  console.log("aa");
  if (!isValidEmail || !isValidPassword) {
    alert("Please fill in all necessary fields with appropriate standard");
    event.preventDefault();
  }
  else{
        let email = emailInput.value;
        let password = passwordInput.value;

        const user = dataset.find(item => item.email === email);

        if(!user){
            alert("An account with the given email address doesn't exist. Please create one!");
            event.preventDefault();
            return;
        }

        if(user.password !== password){
            alert("The password you entered is wrong, try again!");
            event.preventDefault();
            return;
        }

        event.preventDefault();

        alert('Successful login!');
        window.location.href = "../index.html"
  }
};