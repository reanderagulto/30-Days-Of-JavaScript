const countriesArr = ['Philippines', 'Japan', 'South Korea', 'China', 'Vietnam', 'Singapore'];
console.table(countriesArr);

const countriesObj = [
    {
        name: 'Philippines', 
        continent: 'Asia'
    }, 
    {
        name: 'Japan', 
        continent: 'Asia'
    }, 
    {
        name: 'South Korea', 
        continent: 'Asia'
    }, 
    {
        name: 'China', 
        continent: 'Asia'
    }, 
    {
        name: 'Vietnam', 
        continent: 'Asia'
    }, 
    {
        name: 'Singapore', 
        continent: 'Asia'
    }, 
];
console.table(countriesObj);

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.group('Users');
console.log(users);
console.groupEnd();
