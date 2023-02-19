const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const mySet = new Set();

const newSet = new Set();
for(let i=1;i<=10;i++){
    newSet.add(i)
}
console.log(newSet);

newSet.delete(2)
console.log(newSet);

newSet.clear();
console.log(newSet);

const strSet = new Set(countries);
console.log(strSet);

const myMap = new Map();
for(const element of countries){
    myMap.set(element, element.length);
}
console.log(myMap);