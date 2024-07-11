//arrays
// 1) java script arrays are always dynamic
// arrays are always accessed through indexing
// 3) shallow copy : when references are used to change values or access values
// 4) Deep copy: when refrences are not used to change values or access values

const myArr=[0,1,2,3,4,5];
console.log(myArr);

// array meathods
myArr.push(6);
myArr.push(7);
console.log(myArr);
myArr.pop()
console.log(myArr)
//  one more way like push pop
// unshift and shift
//unshift inserts value at the very start and shift() deletes the value
myArr.unshift(9);
console.log(myArr);

/*
Splice and Slice Functions

slice doesnot chnages the orignal value of array but splice does that
*/

// write a code for this 