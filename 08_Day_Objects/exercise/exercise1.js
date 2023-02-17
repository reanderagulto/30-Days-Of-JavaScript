let dog = {
    name: 'Biluc', 
    legs: 'Short', 
    color: 'White', 
    age: '11 Months', 
    bark: 'woof woof'
}
console.log(`Dog\'s Name: ${dog.name}`);
console.log(`Dog\'s Legs: ${dog.legs}`);
console.log(`Dog\'s Color: ${dog.color}`);
console.log(`Dog\'s Age: ${dog.age}`);
console.log(`${dog.name} barks like: ${dog.bark}`);

dog.breed = 'Pomeranian'; 
dog.getDogInfo = () => {
    return 'data';
}
console.log(dog);