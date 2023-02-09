let sentence1 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(`Number of word (love): ${sentence1.match(/love/gi).length}`);

let sentence2 = "You cannot end a sentence with because because because is a conjunction";
console.log(`Number of 'because': ${sentence2.match(/because/gi).length}`);

let sentence3 = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;
let result = sentence3.replace(/[^a-zA-Z0-9\s\:]*/gi, "");
console.log(result);

let sentence4 = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.`;
let numbers = sentence4.match(/\d+/g);
let total = 0;
for (let i=0; i<numbers.length;i++) {
    total += parseInt(numbers[i]);
}

console.log(`Total Income is: ${total}`);
