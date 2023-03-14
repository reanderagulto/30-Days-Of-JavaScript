class Animal {
    constructor(age, color, legsProp) {
        this.age = age; 
        this.color = color; 
        this.legsProp = legsProp;
    }
    setAge(age){
        this.age = age;
    }
    setColor(color){
        this.color = color;
    }
    setLegsProp(prop){
        this.legsProp = prop;
    }
    getAge(){
        return this.age;
    }
    getColor(){
        return this.color;
    }
    getLegsProp(){
        return this.legsProp;
    }
}

class Dog extends Animal{
    constructor(age, color, legsProp, name, breed){
        super(age, color, legsProp, breed);
        this.name = name; 
        this.breed = breed; 
    }
    setName(name){
        this.name = name;
    }
    setBreed(breed){
        this.breed = breed;
    }
    getName(){
        return this.name;
    }
    getBreed(){
        return this.breed;
    }
    setLegsProp(noOfLegs, size){
        this.legsProp = {
            legs: noOfLegs, 
            size: size
        };
    }
    getLegsProp(){
        return this.legsProp;
    }
    getDogInfo(){
        let info = `My Dog's name is ${this.name}. My dog is ${this.age} year${(this.age > 1 ? 's' : '')} old. He/She is a ${this.breed}. He/She have ${this.legsProp.legs} and ${this.legsProp.size} in size`;
        return info;
    }
}

let dog = new Dog();
dog.setAge(1);
dog.setColor('white');
dog.setName('Biluc');
dog.setBreed('Pomeranian');
dog.setLegsProp(4, '12 inches');
console.log(dog.getDogInfo());