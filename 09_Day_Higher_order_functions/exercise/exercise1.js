const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const users = [
  {
    name: 'Alex',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  {
    name: 'Asab',
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  {
    name: 'Brook',
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  {
    name: 'Daniel',
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }, 
  {
    name: 'John',
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  }, 
  { 
    name: 'Thomas',
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }, 
  {
    name: 'Paul',
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }    
]
/*  
forEach - iterate each items without changing its item. Only works in an array
map - iterate each items and modifies it. 
filter - filter an array based on a given function/condition
reduce - Accumulators
*/

/* 
Callback - function that passed from another function
*/
const getNoSkills = arr => {
  let data = [];
  arr.map((element, index) => {
    data.push({
      name: element.name, 
      noOfSkills: element.skills.length
    });
  })
  return data.sort((a, b) => {
    if (a.noOfSkills > b.noOfSkills) return -1
    if (a.noOfSkills < b.noOfSkills) return 1
    return 0
  })[0];
}
console.log(`${getNoSkills(users).name} have ${getNoSkills(users).noOfSkills} skills`);

countries.forEach((element) => {
  console.log(element);  
})

names.forEach((element) => {
  console.log(element);
})

numbers.forEach((element) => {
  console.log(element);
})

const countriesUppercase = arr => {
  let data = [];
  arr.map((element, index) => {
    data.push(element.toUpperCase());
  })
  return data;
}
console.log(countriesUppercase(countries));

const countriesLength = arr => {
  let data = [];
  arr.map((element, index) => {
    data.push({
      country: element,
      length: element.length
    })  
  })
  return data;
}
console.log(countriesLength(countries));

const squareIt = (arr) => {
  let data = [];
  arr.map((element, index) => {
    data.push(Math.sqrt(element));  
  })
  return data;
}
console.log(squareIt(numbers));

const productPricing = arr => {
  let data = [];
  arr.map((element) => {
    data.push(`The price of ${element.product} is ${element.price}`)
  })
  return data;
}
console.log(productPricing(products));

const landCoutries = countries.filter((country) => 
  country.includes('land')
)
console.log(landCoutries);

const sixCountries = countries.filter((country) => 
  country.length === 6
)
console.log(sixCountries);

const sixMoreCountries = countries.filter((country) => 
  country.length >= 6
)
console.log(sixMoreCountries);

const startsWithE = countries.filter((country) => 
  country.startsWith('E')
)
console.log(startsWithE);

const valuesOnly = products.filter((product) => 
  product.price != ' ' &&  product.price != '' && product.price != null && product.price != undefined
)
console.log(valuesOnly);

function getStringLists(arr){
  let data = [];
  arr.map((element) => {
    if(typeof element === 'string') 
      data.push(element)
  })
  return data;
}
console.log(getStringLists(names)); 