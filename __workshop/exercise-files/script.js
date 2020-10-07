let formElement = document.getElementById("#form")
let passwordInput = document.getElementById("#password")
let confirmPwInput= document.getElementById("#confirmpassword")
let termsInput = document.getElementById("#termsandservices")
let clearButton = document.getElementById("#clear")
let submitButton = document.getElementById("#submit")
let errorBox = document.getElementById("#errormessage")

let checkIfValid = (event) => {
    event.preventDefault()

    formModification()
 
    if (passwordInput.value.length < 10) {
    errorBox.style.display = "block"
    errorBox.innerText = "Your password is too short! Please provide a password that is at least 10 characters long."
    passwordInput.style.border = "1px solid red"
    }

    else if (passwordInput.value !== confirmPwInput.value) {
    errorBox.style.display = "block"
    errorBox.innerText = "Your password does not match! Please re-confirm password."
    confirmPwInput.classList.add("errorOutlined")
    }

    else {
        window.alert("Success!")
    }
}