console.log(a);
console.log("hello");
console.log("hello");
var a = 10;
console.log(a);

// whenever we define a variable the JS  move the variable declaration to the top of the scope this is called hoisting.

/*
upper code look like this to the js                                  
var a;
console.log("hello")
console.log("hello")
a = 10;
console.log(a)
*/

//console.log(t);    //let and const variable go to the top of the scope and stored in to the global excecution context but not in the same memory space as var
// and went to the temporal deadzone from where we cant access it until it is initialized. 
//this means let is hoisted but not properly hoisted.

//TEMPORAL DEADZONE (TDZ) - when let or const are hoisted to the top of the scope and just declared there not intialized , 
// the time between this declaration and the initialization in the actual code is called tdz. and in this dead zone we cant access that variable
//  bcz it is not initialized it will through error

// definition - the time period between the start of the block scope and declaration of the let / const / class.
let t = 10;
console.log(t);

