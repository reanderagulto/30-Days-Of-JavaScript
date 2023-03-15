const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => {
//         data.map((country, index) => {
//             console.group();
//             console.log(`Name: ${country.name}`);
//             console.log(`Capital: ${country.capital}`);
//             console.log(`Languages: ${country.languages}`)
//             console.log(`Population: ${country.population}`)
//             console.log(`Area: ${country.area}`)
//             console.groupEnd();
//         })
//     })
//     .catch(error => console.error(error));

let catNames = [];

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.map((cat, index) => {
            catNames.push(cat.name);
        })
    })
    .catch(error => console.error(error));

console.log(catNames);
