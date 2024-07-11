
// defining number in js
const score=400
// To specify taht we need a number only
const balance= new Number(100)

console.log( (score))
console.log( (balance));
// connverting the number to string
console.log(balance.toString().length);
// very important command
// this lets to give value total upto 2 decimal terms eg 100.00
console.log(balance.toFixed(2));

// See this function known as topreicision
const othernumber=12.890
console.log(othernumber.toPrecision(3));
//this round off the value to give answer till 3 numbers
const othernumber1=123.89
console.log(othernumber.toPrecision(3))
// it will print the value as 124 by automatically rounding off the value and giving the value till 3 numbers


// ****************MATHS*********************
// This abs value is absoulte value aka it turns negative to positivr only
console.log(Math.abs(-4))
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9))
console.log(Math.min(3,2,1));
console.log(Math.max(5,8,10));
// Super important notes

/*
console.log(Math.random())
this gives a random value around 0.01 0.1 0.2 etc etc soooo
to get the values like 2,1,3,4,8, etc we multipy this math.random()* 10
why ?
since 0.1*10=1
and alsoooo
we sometimes add 1 to it why
because we can sometimes get random values like 0.001 to to get it like 1,2,etc we just need to add one to it
example
( Math.random()*10 ) +1;
 */