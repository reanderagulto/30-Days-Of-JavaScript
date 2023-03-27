
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

const population_btn = document.querySelector('.population')
const languages_btn = document.querySelector('.languages')
const headerSub = document.querySelector('.subtitle')
const headerFeedback = document.querySelector('.feedback')
const graphTitle = document.querySelector('.graph-title')
const stat = document.querySelector('#stat')

headerSub.textContent = `Currently We have ${countries_data.length} countries`


population_btn.addEventListener('click', e => {
    for (let index = 0; index < 10; index++) {
        data = document.createElement('div')
        html = `<span class="name">${population[index].name}</span>
                <span class="no">${population[index].population.toLocaleString("en-US")}</span>`
        data.innerHTML = html
        stat.appendChild(data)
    }
})

languages_btn.addEventListener('click', e => {

})