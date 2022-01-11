const mail = document.querySelector('.feedback-form input')
const textArea = document.querySelector('.feedback-form textarea')
const form = document.querySelector('.feedback-form')
import throttle from "lodash.throttle";
const value = {}
let parseValue = JSON.parse(localStorage.getItem("feedback-form-state"))


if (localStorage.getItem("feedback-form-state")) {
    mail.value = parseValue.email
    textArea.value = parseValue.message
}


form.addEventListener('submit', formSubmit)
form.addEventListener('input', throttle(textInput, 500) )

// textReturn()

function formSubmit(event) {
    event.preventDefault()
    console.log("enter submit")
    event.currentTarget.reset()
    localStorage.removeItem("feedback-form-state")
}

function textInput(event) {
    value[event.target.name] = event.target.value
    console.log(value)
    const localValue = JSON.stringify(value)
    localStorage.setItem("feedback-form-state", localValue)
    
}

