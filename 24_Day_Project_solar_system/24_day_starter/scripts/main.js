// Declaration
const mass = document.querySelector('#mass')
const select = document.querySelector('select')
const calculate = document.querySelector('button')
const image = document.querySelector('.image')
const desc = document.querySelector('.description')
const selectedPlanet = document.querySelector('#selected-planet')

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
    option.setAttribute('target', item.image)
    select.appendChild(option)
})

const getSelected = (e) => {
    // selectedPlanet.value = e
    // image.setAttribute('src', )
    console.log(e.target);
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
        
    }
})