"use strict";

// Implement eye icon in password fields

// Elements

const userEmail = document.getElementById("signin-user-email");
const userPassword = document.getElementById("signin-user-password");
const signInButton = document.getElementById("signin-button");
const wrongInput = document.getElementById("wrong-credentials");
const wrongInputCloseButton = document.getElementById("wrong-credentials-close-button");

// Helper Functions

const clearInputFields = function(){
    userEmail.value = "";
    userPassword.value = "";
}

const removeErrorBox = function(){
    wrongInput.style.opacity = "0";
    setTimeout(() => {
        wrongInput.classList.add("hide");
        document.getElementById("error-message")?.remove();
    }, 1000);
}

const throwErrorMsg = function(errmsg){
    const output = wrongInput.querySelector("#error-message");
    if(output === null){
        const html = `<p id="error-message">${errmsg}</p>`;
        wrongInput.insertAdjacentHTML("afterbegin", html);
        wrongInput.style.opacity = "1";
        wrongInput.classList.remove("hide");

        setTimeout(() => {
            removeErrorBox();
        }, 5000);

        clearInputFields();
    }
}

const checkEmailPassword = function(){
    const email = userEmail.value;
    const password = userPassword.value; 
    if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?.input === email){
        let special = /[^a-zA-Z0-9]/;
        let number = /[0-9]/;
        if(password.length >= 8 && special.test(password) && number.test(password)){
            console.log(email, password);
            // get username and password from localstorage
        }

        else{
            throwErrorMsg("Invalid Password (Password length must be 8 including a number and a special character)");
        }
    }
    else{
        throwErrorMsg("Invalid Email Address");
    }
}

// Event Listeners


window.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkEmailPassword();
    }
})

signInButton.addEventListener("click", checkEmailPassword);

wrongInputCloseButton.addEventListener("click", removeErrorBox);