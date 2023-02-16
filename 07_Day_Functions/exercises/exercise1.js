function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName('Reander', 'Agulto'));

function addNumbers(num1, num2){
    return num1 + num2;
}
console.log(addNumbers(23, 37));

function areaOfRectangle(length, width){
    return length * width;
}
console.log(areaOfRectangle(23, 56));

function perimeterOfRectangle(length, width){
    return 2 * (length + width);
}
console.log(perimeterOfRectangle(33, 57));

function volumeOfRectPrism(){
    let ret = 1; 
    for(element of arguments){
        ret = ret * element;
    }
    return ret;
}
console.log(volumeOfRectPrism(12, 23, 45));

function areaOfCircle(radius){
    return Math.PI * radius * radius;
}
console.log(areaOfCircle(20));

function circumOfCircle(radius){
    return 2 * (Math.PI * radius);
}
console.log(circumOfCircle(20));

function density(mass, volume) {
    return mass / volume;
}
console.log(density(20, 50));

const speed = (distance, time) => {
    return distance / time;
}
console.log(speed(20, 60));