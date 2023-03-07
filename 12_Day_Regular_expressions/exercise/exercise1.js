const statement = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let [ monthlyIncome, annualBonus, onlineCourse ] = statement.match(/\d{1,}/g);
console.log(`Annual Income is: ${(onlineCourse * 12 ) + (monthlyIncome * 12) + 10000}`);

