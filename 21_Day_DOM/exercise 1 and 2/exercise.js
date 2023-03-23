const pTag1 = document.querySelector('p')
const pTag2 = document.getElementsByTagName('p')
console.log(pTag1)
console.log(pTag2[0])

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

const pTag_1 = document.getElementById('1')
console.log(pTag_1);

const allPTags = document.querySelectorAll('p')
const pDiv = document.querySelector('.container')
pDiv.style.margin = 'auto'
pDiv.style.width = '460px'
allPTags[allPTags.length - 1].textContent = 'Fourth Paragraph'
allPTags.forEach((item, index) => { 
    item.setAttribute('id', index)
    item.classList.add('item', 'item-' + (index + 1))
    item.textContent = 'Paragraph ' + (index + 1)
    item.style.backgroundColor = '#F1F1F1'
    item.style.padding = '24px'
    item.style.borderRadius = '15px'
    item.style.marginTop = '20px'
    item.style.marginBottom = '20px' 
    item.style.textAlign = 'center'
    console.log(index);
    item.style.color = (index === 0 || index === 2) ? 'green' : 'red'
})

console.log(allPTags);


