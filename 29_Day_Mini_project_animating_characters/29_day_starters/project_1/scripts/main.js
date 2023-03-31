const fonts = [
    "'Aldrich', san-serif",
    "'Lato', san-serif",
    "'Montserrat', san-serif",
    "'Nunito', san-serif",
    "'Oswald', san-serif",
    "'Raleway', san-serif",
    "'Raleway Dots', san-serif",
    "'Roboto', san-serif",
]
const randomFont = () => {
    index = Math.floor(Math.random() * fonts.length)
    return fonts[index];
}

const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length)
        hexa += str[index]
    }
    return hexa
}

const wrapper = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
const letters = [...h1.innerHTML]

const randomizeText = () => {
    wrapper.style.transition = "background-color 0.3s ease-out"
    wrapper.style.backgroundColor = hexaColor() 
    h1.style.fontFamily = randomFont()
    h1.innerHTML = ""
    letters.map(async (item, index) => {
        span = document.createElement('span')
        span.textContent = item
        span.style.transition = "color 0.3s ease-out"
        span.style.color = hexaColor()
        h1.appendChild(span)
    })
}

randomizeText()

setInterval(() => {
    randomizeText()
}, 1500)