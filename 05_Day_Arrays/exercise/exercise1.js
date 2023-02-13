let emptyArray1 = [];
let moreThan5 = [1, 2, 3, 4, 5, 6, 7];
console.log(moreThan5.length);
console.log(`First Element: ${moreThan5[0]}`);
console.log(`Middle Element ${moreThan5[Math.floor(moreThan5.length / 2)]}`);
console.log(`Last Element: ${moreThan5[moreThan5.length - 1]}`);
let mixedDataTypes = ['Reander', 29, true, 'Dasmarinas', 'Web Developer', '7:32'];
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(`Number of Companies ${itCompanies.length}`);
console.log(`First Company: ${itCompanies[0]}`);
console.log(`Middle Company: ${itCompanies[Math.floor(itCompanies.length / 2)]}`);
console.log(`Last Company: ${itCompanies[itCompanies.length - 1]}`);
itCompanies.forEach(element => {
    console.log(element);
});
let i = 0;
for (let index = 0; index < itCompanies.length; index++) {
    itCompanies[index] = itCompanies[index].toUpperCase();
}
console.log(itCompanies);
console.log(`Array to Sentence: ${itCompanies.toString()}`);