let grade = parseInt(prompt('Enter your Grade'));
let score = '';
if(grade >= 90 && grade <= 100){
    score = 'A';
}
else if(grade >= 70 && grade <= 89){
    score = 'B';
}
else if(grade >= 60 && grade <= 69){
    score = 'C';
}
else if(grade >= 50 && grade <= 59){
    score = 'D';
}
else if(grade >= 0 && grade <= 49){
    score = 'F';
}
console.log(`Your score is ${score}`);

let month = prompt('Enter a month');
let autumn = 'september october november';
let winter = 'december january february';
let spring = 'march april may';
let summer = 'june july august';
if(autumn.match(month.toLowerCase())){
    alert(`${month} is Autum`);
}
else if(winter.match(month.toLowerCase())){
    alert(`${month} is Winter`);
}
else if(spring.match(month.toLowerCase())){
    alert(`${month} is Spring`);
}
else if(summer.match(month.toLowerCase())){
    alert(`${month} is Summer`);
}

let today = prompt('What day is today?');
let weekend = 'saturday sunday';
if(weekend.match(today.toLowerCase())){
    alert(`${today} is a weekend`);
}
else{
    alert(`${today} is a working day`);
}