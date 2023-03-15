// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if(skills.length > 0)
//             resolve(skills)
//         else
//             reject('Something wrong has happened')
//     }, 2000)
// })

// doPromise
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => console.log(error))

// const doPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS', 'Node']
//         if(skills.includes('Node'))
//             resolve('Fullstack Developer')
//         else 
//             reject('Something wrong has happened')
//     }, 200)
// })

// doPromise2
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => console.log(error))

// const url = 'https://restcountries.com/v2/all'
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error))

const square = async (n) => {
    return n * n;
}

const value = await square(2);
console.log(value);

const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));


const fetchData = async () => {
    try{ 
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries);
    }
    catch (err) {
        console.error(err);
    }
}

console.log('========= async and await');
fetchData();