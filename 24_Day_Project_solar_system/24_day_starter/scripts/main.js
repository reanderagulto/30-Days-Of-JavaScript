// Declaration
const mass = document.querySelector('#mass')
const select = document.querySelector('select')
const calculate = document.querySelector('button')
const image = document.querySelector('.planet-image')
const desc = document.querySelector('.description')
const selectedPlanet = document.querySelector('#selected-planet')
const selectedPlanetName = document.querySelector('#selected-planet-name')
const header = document.querySelector('header')
const flex = document.querySelector('.flex-container')
const control = document.querySelector('.controls')
const imgContainer = document.querySelector('.image')


const planets = [
    {
        name: 'Earth',
        g: 9.8,
        image: './images/earth.png',
    }, 
    {
        name: 'Mars',
        g: 3.8,
        image: './images/mars.png',
    },
    {
        name: 'Mercury',
        g: 3.8,
        image: './images/mercury.png',
    },
    {
        name: 'Venus',
        g: 9,
        image: './images/venus.png',
    },
    {
        name: 'Saturn',
        g: 10.7,
        image: './images/saturn.png',
    },
    {
        name: 'Uranus',
        g: 8.9,
        image: './images/uranus.png',
    },
    {
        name: 'Jupiter',
        g: 25.3,
        image: './images/jupiter.png',
    },
    {
        name: 'Neptune',
        g: 11.4,
        image: './images/neptune.png',
    },
]

const get_weight = (mass, g) => {
    return mass * g
}

planets.forEach((item, index) => {
    option = document.createElement('option')
    option.textContent = item.name
    option.value = item.g
    option.setAttribute('image', item.image)
    select.appendChild(option)
})

const getSelected = (e) => {
    selectedPlanet.value = e.value
    selectedPlanetName.value = e.textContent
    console.log(e.getAttribute('image'));
    image.src = ''
    image.src = e.getAttribute('image')
}

calculate.addEventListener('click', e => {
    if(mass.value === ''){
        desc.textContent = 'Mass is Required'
    }
    else if(selectedPlanet.value === null || selectedPlanet.value === ''){
        desc.textContent = 'Please Select a Planet'
    }
    else{
        let weight = get_weight(mass.value, selectedPlanet.value) 
        wContainer = document.createElement('span')
        wContainer.textContent = weight + ' N'
        desc.innerHTML = ''
        desc.innerHTML = `The weight of object in ${selectedPlanetName.value} is `
        desc.appendChild(wContainer)
    }
})

// Styling
document.body.style.backgroundImage = `url(./images/galaxy.gif)`
document.body.style.color = 'white'

header.style.display = 'grid'
header.style.alignItems = 'center'
header.style.justifyContent = 'center'

flex.style.display = 'flex'
flex.style.alignItems = 'center'
flex.style.justifyContent = 'center'
flex.style.padding = '30px'
flex.style.flexDirection = 'column'
flex.style.backgroundColor = 'rgba(50.2, 50.2, 50.2, 0.5)'
flex.style.width = '680px'
flex.style.margin = 'auto'
flex.style.borderRadius = '15px'

control.style.margin = 'auto'
