const wrapper = document.querySelector('.wrapper')
const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')
const h2 = document.querySelector('h2')
const year = document.querySelector('.year')
const dateNow = document.querySelector('.date-now')
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December', 
]

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

wrapper.style.width = '900px'
wrapper.style.margin = 'auto'
wrapper.style.textAlign = 'center'

h2.style.textDecoration = 'underline'
h2.style.fontWeight = '200'

year.style.fontSize = '52px'
dateNow.style.backgroundColor = '#20c846'
dateNow.style.padding = '10px'
dateNow.style.width = '50%'
dateNow.style.margin = 'auto'
setInterval(() => {
    year.style.color = hexaColor()
    const date = new Date()
    dateNow.textContent = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds())
}, 1000)

ul.style.textAlign = 'left'
li.forEach((item, index) => {
    item.style.listStyle = 'none'
    item.style.padding = '15px'
    item.style.marginTop = '5px'
    if(item.textContent.match(/done/gi)) {
        item.style.backgroundColor = '#21bf73'
    }
    else if(item.textContent.match(/ongoing/gi)){
        item.style.backgroundColor = '#fddb3a'
    }
    else {
        item.style.backgroundColor = '#fd5e53'
    }
})