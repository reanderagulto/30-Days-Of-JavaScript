
const population = countries_data.sort((a, b) => {
    return b.population - a.population
})
let languages = []
countries_data.map((item, index) => {
    item.languages.map((lang, index) => {
        languages.push(lang)
    })
})
const occurrences = languages.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {})
let langData = []
for (const occ in occurrences){
    langData.push({
        name: occ,
        no: occurrences[occ]
    })
}
langData.sort((a, b) => {
    return b.no - a.no
})

const maxPop = 2000000000
const maxLang = 100

const population_btn = document.querySelector('.population')
const languages_btn = document.querySelector('.languages')
const headerSub = document.querySelector('.subtitle')
const headerFeedback = document.querySelector('.feedback')
const graphTitle = document.querySelector('.graph-title')
const stat = document.querySelector('#stat')

headerSub.textContent = `Currently We have ${countries_data.length} countries`

population_btn.addEventListener('click', e => {
    stat.innerHTML = ''
    data = document.createElement('table')
    for (let index = 0; index < 10; index++) {
        tr = document.createElement('tr')
            tdName = document.createElement('td')
                spanName = document.createElement('span')
                spanName.classList.add('name')
                spanName.textContent = population[index].name
            tdName.appendChild(spanName)
            tdBar = document.createElement('td')
            tdBar.classList.add('progress-bar')
                divBar = document.createElement('div')
                divBar.classList.add('progress')
                divBar.style.width = `${(population[index].population / maxPop) * 100}%`
            tdBar.appendChild(divBar)
            tdNo = document.createElement('td')
                spanNo = document.createElement('span')
                spanNo.classList.add('no')
                spanNo.textContent = population[index].population.toLocaleString("en-US")
                spanNo.style.textAlign = 'left'
            tdNo.appendChild(spanNo)
        tr.appendChild(tdName)
        tr.appendChild(tdBar)
        tr.appendChild(tdNo)
        data.appendChild(tr)
    }
    stat.appendChild(data)
})

languages_btn.addEventListener('click', e => {
    stat.innerHTML = ''
    data = document.createElement('table')
    for (let index = 0; index < 10; index++) {
        tr = document.createElement('tr')
            tdName = document.createElement('td')
                spanName = document.createElement('span')
                spanName.classList.add('name')
                spanName.textContent = langData[index].name
            tdName.appendChild(spanName)
            tdBar = document.createElement('td')
            tdBar.classList.add('progress-bar')
                divBar = document.createElement('div')
                divBar.classList.add('progress')
                divBar.style.width = `${(langData[index].no / maxLang) * 100}%`
            tdBar.appendChild(divBar)
            tdNo = document.createElement('td')
                spanNo = document.createElement('span')
                spanNo.classList.add('no')
                spanNo.textContent = langData[index].no.toLocaleString("en-US")
                spanNo.style.textAlign = 'left'
            tdNo.appendChild(spanNo)
        tr.appendChild(tdName)
        tr.appendChild(tdBar)
        tr.appendChild(tdNo)
        data.appendChild(tr)
    }
    stat.appendChild(data)
})