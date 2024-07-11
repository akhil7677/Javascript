let score=33
console.log(typeof (score));

let valueInNumber= Number(score)
// but what if we convert this number in string
let score1="33"
console.log(typeof (score1));
//it prints a string

// what if we do this
let score2="1234abc";
//we takke this string and convert it in Number
let valueInNumber1=Number(score2);
console.log(valueInNumber1);
// It does not gives us the number 1234 but
// rather gives the output NaN which is
// not a number
console.log(typeof (valueInNumber1));
// funny this is that NaN type is a number lol!

// ******************Operations******************

let value=3
let negValue=-value
console.log(negValue);

let str1="hello"
let str2=" hitesh"
let str3=str1+str2