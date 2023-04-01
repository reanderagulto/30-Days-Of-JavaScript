const validate = (text, validType) => {
    const validation = {
        alphanumeric: {
            message: 'must be alphanumeric and contains 3 - 16 characters',
            regex: /^[a-zA-Z0-9]{3,16}$/g,
        },
        email: {
            message: 'must be a valid address e.g. example@example.com',
            regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        }, 
        password: {
            message: 'must be alphanumeric (@, _, and - are also allowed) and between 6 - 20 characters',
            regex: /^[a-zA-Z0-9@_-]{6,20}$/
        }, 
        alphalimited: {
            message: 'must contain only lowercase letters, underscores, hyphens and must be 8 - 50 characters', 
            regex: /^[a-zA-Z0-9_-]{8,50}$/
        },
        telephone: {
            message: 'must be a valid Telephone number (11 digits and 333-333-3333)', 
            regex: /^\d{3}\-\d{3}\-\d{4}$/
        }
    }
    let value = ""
    switch(validType){
        case "alphanumeric":
            if(validation.alphanumeric.regex.test(text) === false)
                value = validation.alphanumeric.message
            break
        case "email": 
            if(validation.email.regex.test(text) === false)
                value = validation.email.message
            break
        case "password": 
            if(validation.password.regex.test(text) === false)
                value = validation.password.message
            break
        case "alphalimited": 
            if(validation.alphalimited.regex.test(text) === false)
                value = validation.alphalimited.message
            break
        case "telephone": 
            if(validation.telephone.regex.test(text) === false)
                value = validation.telephone.message
            break
        default: 
            value = ""
            break
    }
    return value
    
}

const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const telNo = document.querySelector('#tel-no')
const bio = document.querySelector('#bio')
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    const messageSpan = document.querySelectorAll('.message')
    if(messageSpan !== null){
        messageSpan.forEach((item, index) => {
            item.remove()
        })
    }

    // First Name
    let validFirstName = validate(firstName.value, firstName.getAttribute('data-validation'))
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validFirstName
    firstName.style.transition = 'all 0.3 ease-out'
    firstName.style.borderColor = (validFirstName === '') ? 'green': 'red'
    firstName.insertAdjacentElement('afterend', message)

    // Last Name
    let validLastName = validate(lastName.value, lastName.getAttribute('data-validation'))
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validLastName
    lastName.style.transition = 'all 0.3 ease-out'
    lastName.style.borderColor = (validLastName === '') ? 'green': 'red'
    lastName.insertAdjacentElement('afterend', message)

    // Email
    let validEmail = validate(email.value, email.getAttribute('data-validation'))
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validEmail
    email.style.transition = 'all 0.3 ease-out'
    email.style.borderColor = (validEmail === '') ? 'green': 'red'
    email.insertAdjacentElement('afterend', message)

    // Password
    let validPassword = validate(password.value, password.getAttribute('data-validation'))
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validPassword
    password.style.transition = 'all 0.3 ease-out'
    password.style.borderColor = (validPassword === '') ? 'green': 'red'
    password.insertAdjacentElement('afterend', message)

    // Telephone
    let validTelNo = validate(telNo.value, telNo.getAttribute('data-validation'))
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validTelNo
    telNo.style.transition = 'all 0.3 ease-out'
    telNo.style.borderColor = (validTelNo === '') ? 'green': 'red'
    telNo.insertAdjacentElement('afterend', message)

    // Telephone
    let validBio = validate(bio.value, bio.getAttribute('data-validation'))    
    message = document.createElement('span')
    message.classList.add('message')
    message.textContent = validBio
    bio.style.transition = 'all 0.3 ease-out'
    bio.style.borderColor = (validBio === '') ? 'green': 'red'
    bio.insertAdjacentElement('afterend', message)

})