// Datatypess
// 1)Primitive Data types:(these are call by rerfrence)
/*
    7types: Strings,Number,Boolean,null,undefined,Symbol
    BigInt
*/

// Refrence Data type 
/*
It is non Primive and also
it has types:- Array,Objects,Functions
*/
// **************Symbols********
const id=Symbol("123");
const anotherId=Symbol("123")

console.log(id==anotherId);
// Symbol makes another diffrent value i.e 2 symbol values
// will not be same even if their values are

//arrays are written in []
//objects are written in { " with : hi "} with mapping

const myFunction=function()
{
    console.log("Hello World");
}
// type of function
