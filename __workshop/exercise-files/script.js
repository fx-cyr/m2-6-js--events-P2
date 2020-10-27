let formElement = document.querySelector("#form")
let passwordInput = document.querySelector("#password")
let confirmPwInput= document.querySelector("#confirm-password")
let termsInput = document.querySelector("#termsandservices")
let clearButton = document.querySelector("#clear")
let submitButton = document.querySelector("#submit")
let errorBox = document.querySelector("#error-message")


const handleSubmit = (event) => {
    event.preventDefault();

    let password = passwordInput.value
    let confirmpw = confirmPwInput.value

    if (termsInput.checked === false){
        window.alert("Please agree to the terms & services before continuing.")
        return;
    }
 

  
    else if (password.length < 10) {
passwordInput.style.border ="1px solid pink"
passwordInput.focus()
        errorBox.innerText = "Your password is too short! Please provide a password that is at least 10 characters long."
        errorBox.style.display = "block"

    }
    

    else if (confirmpw !== password) {
        confirmPwInput.style.border ="1px solid pink"
        confirmPwInput.focus()
        errorBox.innerText = "Your password does not match."
        errorBox.style.display = "block"
    }



    else {
        window.alert("Success!")
    }
}

form.addEventListener("submit", handleSubmit)