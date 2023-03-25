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

const number = 101;
const divContainer = document.querySelector('.container')
divContainer.style.maxWidth = '680px'
divContainer.style.margin = 'auto'
divContainer.style.display = 'flex'
divContainer.style.flexWrap = 'wrap'

for(let i = 0; i <=number; i++) {
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
    console.log('Item ' + i);
    if(oddEven(i) === 0 && primeNum(i) === 0){
        card.style.backgroundColor = '#21bf73'
    }
    else if(oddEven(i) === 1 && primeNum(i) === 0){
        card.style.backgroundColor = '#fddb3a'
    }
    else if(primeNum(i) === 1){
        card.style.backgroundColor = '#fd5e53'
    }
    divContainer.appendChild(card)
}