// simple comparisons are there like
// < > != ==  etc
/* 
issue in comparsion happens when we compare
two diffrent datatypes with each other
example
*/
console.log("2">1);
console.log("02">1);
// the outputs will be true why ?
// js automatically converted strings into Numbers
// but this is a bad practice
/*
Some more comparisons
*/
console.log(null>0)
console.log(null==0);
console.log(null>=0);
/*
the outputs for these is false false and true
wonder why ?
*/

// Strict check "==="
// this does not only checks the values but also the
// datatypes
console.log("2"===2);
//output is false and the reason is
// it compares not only the value but also the 
//datatypes
