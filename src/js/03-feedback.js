import throttle from "lodash.throttle";

const mail = document.querySelector('.feedback-form input')
const textArea = document.querySelector('.feedback-form textarea')
const form = document.querySelector('.feedback-form')
const parseValue = JSON.parse(localStorage.getItem("feedback-form-state"))
let value = {}

if (localStorage.getItem("feedback-form-state")) { 
    value =  parseValue
}

if (localStorage.getItem("feedback-form-state")) {
    
    if (parseValue.email)
    { mail.value = parseValue.email }
    if (parseValue.message)
    { textArea.value = parseValue.message }
    
}

form.addEventListener('submit', formSubmit)
form.addEventListener('input', throttle(textInput, 500) )

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

