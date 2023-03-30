const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const country = document.querySelector('#country')
const score = document.querySelector('#score')
const addBtn = document.querySelector('#add')
const table = document.querySelector('.table-container')
const messageBox = document.querySelector('.message-box')
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
let dataArr = [
    {
        firstName: "Martha",
        lastName: "Yohanes",
        country: "Finland", 
        score: 70,
        dateCreated: "Jan 30, 2020 01:09"
    },
    {
        firstName: "David",
        lastName: "Smith",
        country: "United Kingdom", 
        score: 80,
        dateCreated: "Jan 30, 2020 01:09"
    },
    {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
        country: "Finland", 
        score: 65,
        dateCreated: "Jan 30, 2020 01:09"
    },
    {
        firstName: "Mathias",
        lastName: "Elias",
        country: "Sweden", 
        score: 85,
        dateCreated: "Jan 30, 2020 01:09"
    },
]

const sortArr = (arr) => {
    ret = arr.sort((a, b) => {
        return b.score - a.score
    })
    return ret;
}

const showTable = (arr) => {
    table.innerHTML = ''
    arr.map((item, index) => {
        divItem = document.createElement('div')
        divItem.classList.add('table-item')
            itemName = document.createElement('span')
            itemName.classList.add('heading')
            itemName.innerHTML = `<h3>
                                    ${item.firstName} ${item.lastName}
                                    <span>${item.dateCreated}</span>
                                  </h3>`
            itemCountry = document.createElement('span')
            itemCountry.classList.add('country')
            itemCountry.textContent = item.country
            
            itemScore = document.createElement('span')
            itemScore.classList.add('score')
            itemScore.textContent = item.score

        divItem.appendChild(itemName)
        divItem.appendChild(itemCountry)
        divItem.appendChild(itemScore)
        table.appendChild(divItem)
    })
}

showTable(sortArr(dataArr))

addBtn.addEventListener('click', e => {
    if(fname.value === '' && lname.value === '' && country.value === '' && score.value === ''){
        messageBox.classList.add('active')
    }
    else{
        messageBox.classList.remove('active')
        const date = new Date()
        let data = {
            firstName: fname.value,
            lastName: lname.value,
            country: country.value, 
            score: score.value,
            dateCreated: months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + ((date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds()) 
        }
        dataArr.push(data)
        showTable(sortArr(dataArr))
    }
})