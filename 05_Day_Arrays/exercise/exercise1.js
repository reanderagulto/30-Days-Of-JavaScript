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
for (let index = 0; index < itCompanies.length; index++) {
    console.log(itCompanies[index].toUpperCase());
}
console.log(`Array to Sentence: ${itCompanies.toString()} are big IT companies`);
let company = 'Twitter';
console.log(`${company} is${(itCompanies.indexOf(company) !== -1 ) ? '' : ' not'} in itCompanies array`);
let filteredCompanies = [];
for (let index = 0; index < itCompanies.length; index++) {
    if(Array.isArray(itCompanies[index].match('o'))){
        if(itCompanies[index].match(/o/gi).length > 1){
            filteredCompanies.push(itCompanies[index]);
        }
    }
}
console.log(filteredCompanies);
console.log(`Sorted Items ${itCompanies.sort()}`);
console.log(`Reversed Items ${itCompanies.reverse()}`);
console.log(`Spliced First 3: ${itCompanies.splice(0,3)}`);
console.log(`Spliced Last 3: ${itCompanies.splice(itCompanies.length - 3, itCompanies.length - 1)}`);
console.log(`Spliced Middle: ${itCompanies.splice(Math.floor(itCompanies.length / 2))}`);
filteredCompanies.shift();
console.log(filteredCompanies);
filteredCompanies.pop();
console.log(filteredCompanies);