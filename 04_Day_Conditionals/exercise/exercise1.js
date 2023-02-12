let age1 = prompt("Enter your age");
if(parseInt(age1) >= 18) {
    alert('You are old enough to drive');
}
else {
    alert(`You are left with ${18 - parseInt(age1)} years to drive`);
}

let myAge = 29;
let yourAge = parseInt(prompt('Enter Your Age'));
if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} year${(yourAge - myAge) == 1 ? '' : 's'} older than me`);
}
else {
    console.log(`You are ${myAge - yourAge} year${(myAge - yourAge) == 1 ? '' : 's'} younger than me`);
}

let a = 12;
let b = 24;
if(a > b) {
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${a} is less than ${b}`);
}
console.log(`${a} is ${(a > b) ? 'greater' : 'less'} than ${b}`);

let num = parseInt(prompt('Enter a number'));
alert(`${num} is an ${((num % 2) == 0) ? 'even' : 'odd'} number`);