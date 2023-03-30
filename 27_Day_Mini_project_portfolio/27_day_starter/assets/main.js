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

const jumbotron = document.querySelector('#jumbotron')
const techContainer = document.querySelector('.tech')
const professions = personal_info.professions
const languages = personal_info.languages

let i = 0
setInterval(() => {
    item = `<div class="jumbo-item">
                ${professions[i].emoji} ${professions[i].name}
            <div>`
    i++
    if(i == professions.length - 1)
        i = 0
    jumbotron.innerHTML = item
}, 1000);

let ctr = 0
setInterval(() => {
    techContainer.textContent = languages[ctr]
    techContainer.style.color = hexaColor()
    ctr++
    if(ctr == languages.length - 1)
        ctr = 0
}, 1000)
