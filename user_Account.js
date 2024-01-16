"use-strict";

// Elements

const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");
const signInButton = document.getElementById("signin-button");
const wrongInput = document.getElementById("wrong-credentials");
const wrongInputCloseButton = document.getElementById("wrong-credentials-close-button");
const errormessage = document.getElementById("error-message");

// Helper Functions

const throwErrorMsg = function(errmsg){
    // TODO: Start here
    console.log(wrongInput.childNodes.keys, wrongInput.childNodes.values);
    const html = `<p id="error-message">${errmsg}</p>`;
    wrongInput.insertAdjacentHTML("afterbegin", html);
    wrongInput.classList.remove("hide-button");

    setTimeout(() => {
        wrongInput.classList.add("hide-button")
        wrongInput.removeChild(errormessage);
    }, 5000);
}

// Event Handlers



// Event Listeners


window.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        const email = userEmail.value;
        const password = userPassword.value; 
        if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?.input === email){
            console.log(email);
            if(password.length >= 8 && password.test(/[^a-zA-Z0-9]/) && password.test(/[0-9]/)){

            }

            else{
                throwErrorMsg("Invalid Password (Password length must be 8 including a number and special characters )");
            }
        }
        else{
            throwErrorMsg("Invalid Email Address");
        }
    }
})

wrongInputCloseButton.addEventListener("click", function(){
    wrongInput.classList.add("hide-button")
    wrongInput.removeChild(document.getElementById("error-message"));
})