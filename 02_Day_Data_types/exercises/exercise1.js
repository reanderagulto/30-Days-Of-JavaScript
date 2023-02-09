let str = '30 Days Of JavaScript';
console.log(str);
console.log(str.length);

let allCaps = str.toUpperCase();
let noCaps = str.toLowerCase();

console.log(allCaps);
console.log(noCaps);

console.log(str.substring(0, 2));
console.log(str.substring(3));

console.log(str.includes('Script'));

let strSplit = str.split(' ');
console.log(strSplit);

let socialMediaStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(socialMediaStr);

let socialMedias = socialMediaStr.split(', ');
console.log(socialMedias);

console.log(str.replace('JavaScript', 'Python'));
console.log(str.charAt(15));
console.log(str.charCodeAt(str.indexOf('J')));
console.log(str.indexOf('a'));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

console.log(str.trim());

console.log(str.trim().startsWith('30'));
console.log(str.trim().endsWith('JavaScript'));

console.log(str.match(/a/gi));

let str1 = '30 Days of';
let str2 = 'JavaScript';
console.log(str1.concat(' ' + str2));
console.log(str.repeat(2));