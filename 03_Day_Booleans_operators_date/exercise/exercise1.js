let firstName = "Reander", 
    lastName = "Agulto", 
    country = "Philippines", 
    city = "Dasmarinas", 
    age = 29, 
    isMarried = false, 
    year = 2023;

console.log(`typeof firstName: ${typeof firstName}\n
             typeof lastName: ${typeof lastName}\n
             typeof country: ${typeof country}\n
             typeof city: ${typeof city}\n
             typeof age: ${typeof age}\n
             typeof isMarried: ${typeof isMarried}\n
             typeof year: ${typeof year}\n`);

console.log(`\'10\' is ${('10' === 10) ? '' : 'not' } equals to 10`);

console.log(`\'9.8\' is ${(parseInt('9.8') == 10) ? '' : 'not'} equals to 10`);

console.log(`10 is ${(10 == 10) ? '' : 'not'} equals to 10`);
console.log(`Reander is ${(parseInt('29') === 29) ? '' : 'not'} 29 years old`);
let truthy = true;

console.log(`${10 * '300'}`);
let falsy = NaN;
let empty = ''
console.log(`${falsy} + ${empty}`);

let i = 4 > 3;
let ii = 4 >= 3; 
let iii = 4 < 3;
let iv = 4 <= 4;
let v = 4 == 4; 
let vi = 4 === 4;
let vii = 4 != 4;
let viii = 4 !== 4; 
let ix = 4 != '4';
let x = 4 == '4';
let xi = 4 === '4';
let xii = 'python'.length != "jargon".length;

console.log(`${i} / ${ii} / ${iii}`);

let si = 4 > 3 && 10 < 12;
let sii = 4 > 3 && 10 > 12;
let siii = 4 > 3 || 10 < 12;
let siv = 4 > 3 || 10 > 12;
let sv = !(4 > 3);
let svi = !(4 < 3);
let svii = !(false);
let sviii = !(4 > 3 && 10 < 12);
let six = !(4 > 3 && 10 > 12);
let sx = !(4 === '4');
let sxi = "dragon".match('on') && 'python'.match('on');
console.log(sxi);

const now = new Date();
year = now.getFullYear();
month = now.getMonth();
date = now.getDate();
day = now.getDay();
hour = now.getHours();
minutes = now.getMinutes();
timeElapsed = Date.now();

console.log(`Year - ${year}
Month: ${month}
Date: ${date}
Day: ${day}
Hour: ${hour}
Minutes: ${minutes}
Elapsed Time: ${timeElapsed}`);