"use strict";

// Elements

const userName = document.getElementById("signup-user-name");
const userEmail = document.getElementById("signup-user-email");
const userPassword = document.getElementById("signup-user-password");
const userRePassword = document.getElementById("signup-user-repassword");
const signupButton = document.getElementById("signup-button");
const wrongInput = document.getElementById("wrong-credentials");
const wrongInputCloseButton = document.getElementById("wrong-credentials-close-button");

// Helper Functions

// To be implemented
// const checkUserEmail = function(email){
    
// }

const clearInputFields = function(){
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    userRePassword.value = "";
}

const removeErrorBox = function(){
    wrongInput.style.opacity = "0";
    setTimeout(() => {
        wrongInput.classList.add("hide");
        document.getElementById("error-message")?.remove();
    }, 1000);
}

const throwMsg = function(msg){
    const output = wrongInput.querySelector("#error-message");
    if(output === null){
        const html = `<p id="error-message">${msg}</p>`;
        wrongInput.insertAdjacentHTML("afterbegin", html);
        wrongInput.style.opacity = "1";
        wrongInput.classList.remove("hide");

        setTimeout(() => {
            removeErrorBox();
        }, 5000);

        clearInputFields();
    }
} 

const checkDetails = function(){
    const uname = userName.value;
    const email = userEmail.value;
    const password = userPassword.value; 
    const repassword = userRePassword.value;
    if(uname === ""){
        throwMsg("Username field cannot be empty");
        return;
    }
    if(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?.input === email){
        let special = /[^a-zA-Z0-9]/;
        let number = /[0-9]/;
        if(password.length >= 8 && special.test(password) && number.test(password)){
            if(password !== repassword){
                throwMsg("Retyped password does not match original");
                return;
            }
            // Check if email already logged in
            // checkUserMail()
            // if false print account already exists 
            console.log(uname, email, password);
            throwMsg("Successfully Signed Up 🤩🤩 Sign In to Continue (redirecting to Sign in page)")
            setTimeout(() => {
                window.location.replace("signin.html");
            }, 2000);
            // get username and password from localstorage
        }

        else{
            throwMsg("Invalid Password (Password length must be 8 including a number and a special character)");
        }
    }
    else{
        throwMsg("Invalid Email Address");
    }
}

// Event Listeners

window.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        checkDetails();
    }
})

signupButton.addEventListener("click", checkDetails);

wrongInputCloseButton.addEventListener("click", removeErrorBox);