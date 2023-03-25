const oddEven = (num) => {
    /* 
    0 = Even
    1 = Odd 
    */
    if(num % 2 === 0)
        return 0
    else 
        return 1
} 

const primeNum = (num) => {
    /* 
    0 = Not Prime
    1 = Prime
    */
    let flag = 1
    if(num === 0 || num === 1) {
        flag = 0
    }
    else {
        for(let ctr = 2; ctr <= num / 2; ctr++) {
            if(num % ctr == 0){
                flag = 0
                break
            }            
        }
    }
    return flag
}

const generateNumbers = (num, container) => {
    for(let i = 0; i <=num; i++) {
        card = document.createElement('div')
        card.textContent = i
        card.style.fontSize = '50px'
        card.style.display = 'flex'
        card.style.flexWrap = 'wrap'
        card.style.color = 'white'
        card.style.fontWeight = '700'
        card.style.alignItems = 'center'
        card.style.justifyContent = 'center'
        card.style.width = '100px'
        card.style.height = '80px'
        card.style.margin = '5px'
        if(oddEven(i) === 0 && primeNum(i) === 0){
            card.style.backgroundColor = '#21bf73'
        }
        else if(oddEven(i) === 1 && primeNum(i) === 0){
            card.style.backgroundColor = '#fddb3a'
        }
        else if(primeNum(i) === 1){
            card.style.backgroundColor = '#fd5e53'
        }
        container.appendChild(card)
    }
} 

const divContainer = document.querySelector('.container')
const items = document.querySelector('.items')
const control = document.querySelector('.controls')
const num = document.querySelector('#number')
const generate = document.querySelector('#generate')
const message = document.querySelector('.message')

generateNumbers(50, items)

divContainer.style.maxWidth = '1280px'
divContainer.style.margin = 'auto'

items.style.display = 'flex'
items.style.flexWrap = 'wrap'

control.style.display = 'flex'
control.style.alignItems = 'center'
control.style.justifyContent = 'center'
control.style.gap = '10px'
control.style.width = 'auto'

num.style.width = '350px'
num.style.height = '40px'
num.style.border = '1px solid #21bf73'
num.style.paddingLeft = '10px'

generate.style.width = '150px'
generate.style.height = '40px'
generate.style.padding = '10px'
generate.style.backgroundColor = '#21bf73'
generate.style.color = 'white'
generate.style.border = 'unset'

message.style.color = 'red'
message.style.display = 'block'
message.style.textAlign = 'center'

generate.addEventListener('click', e => {
    if(num.value === '' || num.value === null){
        message.textContent = 'Please enter a value'
    }
    else if(!num.value.match(/\d{1,}/)) {
        message.textContent = 'Please enter a number'
    }
    else {
        message.textContent = ''
        items.innerHTML = ''
        generateNumbers(parseInt(num.value), items)
    }
})
