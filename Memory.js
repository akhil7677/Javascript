// Memory Allocation

// Memory type 1: Stack => used in (Primitive types)
// Memory type 2: Heap => used in (Non -Primitive types)

let myYoutubename="hiteshchautdhary.com"
let anothername = myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"hitechchaudhary@gmail.com",
    password:"1234"
}
console.log(userOne);
// see this
let userTwo=userOne
userTwo.email="akhileshbhagat@gmail.com"
console.log(userOne.email);
console.log(userTwo.email)

/*
Notes

1) the primitive values goes in stack
and we get the copy of that thing in stack
2)Non Primitive Data types uses Heap and heap 
doesnot makes a copy of the thing rather it uses 
refrences and also updates the refernce of old ones

*/