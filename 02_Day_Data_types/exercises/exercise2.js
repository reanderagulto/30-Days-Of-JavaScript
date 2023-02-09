let quote1 = "The quote \'There is no excuse better for the heart than reaching down and lifting people up.\' by John Holmes teches us to help one another.";
let quote2 = "Love is not patroniziong and charity isn\'t about pity, it is about love. Charity and love are the same \-\- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote1);
console.log(quote2);

let number = '9.8';
if(parseFloat(number) != 10){
    number = 10
}
console.log(number);

let python = "python";
let jargon = "jargon";
if(python.includes("on") && jargon.includes("on")){
    console.log("\'on\' is inside the python and jargon");
}

let jargonSentence = "I hope this course is not full of jargon";
if(jargonSentence.includes(jargon)){
    console.log(`The word: ${jargon} is in the sentence`);
}

let rand = Math.random();
console.log(Math.round(rand * 100));
let rand3 = Math.floor(rand * 255);
console.log(rand3);

console.log(`1\t1\t1\t1\t1
2\t1\t2\t4\t8
3\t1\t3\t9\t27
4\t1\t4\t16\t64
5\t1\t5\t25\t125
`);

let becSentence = "You cannot end a sentence with because because because is a conjunction";
let because = becSentence.substring(becSentence.indexOf("because"), becSentence.lastIndexOf("is"));
console.log(because);