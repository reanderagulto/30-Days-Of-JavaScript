const totalCountries = document.querySelector('.total-countries')
const letterContains = document.querySelector('.letter-contains')
const startWord = document.querySelector('#starting-word')
const anyWord = document.querySelector('#any-word')
const searchBox = document.querySelector('#search-box')
const resultWrapper = document.querySelector('.results-wrapper')
let searchBy = ''

const returnResult = (keyword, searchBy) => {
    return countries.find(element => element.match(`/${searchBy}${keyword}/g`));
}

startWord.addEventListener('click', e => {    
    anyWord.classList.remove('clicked')
    startWord.classList.add('clicked')
    searchBy = '^'
})
anyWord.addEventListener('click', e => {
    anyWord.classList.add('clicked')
    startWord.classList.remove('clicked')
    searchBy = ''
})

searchBox.addEventListener('keypress', e => {
    data = returnResult(e.key, searchBy)
    console.log(data);
})