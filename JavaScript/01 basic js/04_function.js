/*Global execution context -  it is created before the execution of single line of code and it has two parts
 (it takes snapshot of the code before execution)
1. variables                       2. code
variable section  - it will contain all variable of the code and assigned as undefined 
code section - all code will copy paste here and execute line by line

if there is any function declaration then it will jump  not execute bcz it will execute on function call
when we call the funtion the Local/function execution context will be created inside the GCE  AND HAVE SAME PROPERTY LIKE GCE

TYPES OF FUNCTIONS

1.Functional statement  - normal function with keyword function

*/

//function fun(input1 , input2){}   input1 , input2  is parameter
//arguments - that are pass through function call

function a(x,y){           //functional statement
    return(x+y); 
}
console.log(a());         //Nan  function never gives error due to missing arguments 
console.log(a(6));        //Nan



function add(x , y){
    
    function prod(a,b){
        return a*b;
    }
    
    p = prod(2,2);
    console.log(p);
    return x+y;
}

a = add(1,2);
console.log(a);


function add(x , y){

    
    function p(x , y){
        return x*y;
    }
    prod = p(2,3);
    console.log(prod);
    return x+y;
}

console.log(add(2,5));

function add(x,y){           //functional statement
    console.log(x+y); 

    function prod(x,y){
        console.log(x*y);
    }
}

add(2,3);


//2. Functional expression  - functions when assigned to a variable 

console.log(print);                 // undefined bcz it is stored as a variable in GEC 
// print();                          // gives error bcz it is stored as variable but not a function yet  
var print = function(){            
    console.log("hello");
}
print();
 var print = () => {
    console.log("fat print function");
 }
 print();

/*********************HOISTING**************************** 
when we access variables before declaring them 
functional statement is properly hoisted bcz we can access it before declaration but
functional expression is not properly hoisted we cant acces it before declaring it
 */

//3. Fat arrow function
//it is a shorter way to write the function and it si type of anonymous function that uses => symbol and it soed not have its own this, arguments and super .
//greet();             //not a function,  before execution of line 89 it is define as  undefined at the time of hoisting
console.log(greet);
var greet = () => {
    console.log("fat function");
}
greet();

var add = x => x*x;
console.log(add(2));

var greet = (y) => "heloo" + y;
var greet =( x , y) =>  "heloo" + y + x;
console.log(greet(1)); 

//4. ANONYMOUS FUNCTION  ************INTERVIEW*********

/*doesnt have name   - immidiately invoked function
the function defined in functional expression is also anonymous bcz it doesnt have a name
*/

(function(x){
    console.log("f" + x);
}(5))

var p = 0;
x = (function(x){
    return("f" + x);
}(p))
console.log(x);

p = 10;
console.log(x);   // does not update value of x bcz whole function will execute only once when control go at 94 no matter what is the value of p x remain same

//5. Callback function - a function that is passed as an argument to another function
//6. Higher Order Function - The function in which the callback is passed as a argument is called Higher Order function

function func(x , y){   //x and y call back function as it is passed in higher order function
    prod = x(2);
    console.log(x(2));
    y();
    console.log(y);
}

func(function(x){
    return x * x
} , hello );          // this func is a hiher order function because callback functions are passed as an argument in this function

function hello(){
    console.log("hello");
}

function H(){
    return function(){console.log("Hello")}     //[Function  (nameOfFuntion/anonymous)]
}
console.log(H());
function G(){
    return function(){console.log("Hello")}()    //it will execute bcz it is called here and will return its returned value(undefined)
}
console.log(G());
function I(){
    return function(){console.log("Hello")}     
}
console.log(I()());                            //I() is returning that function and another () is calling that returned function

//All of these G , H , I are also called higher order function

// Means thereare two defns of Higher order function:
// 1. When a function takes another function as argument
// 2. When a function returns another function

//****** Whenever we try to print a function with its name only without any parenthesis then it doesnt execute itself it just gives us [Function  (nameOfFuntion/anonymous)]

console.log(function(){
    console.log("Asdv");      //on printing this function it is not executed yet because it is not called with parenthesis anywehre that is why it will give [Function:(anonymous)] as output
})
console.log(function(){
    console.log("Asdv");      //now in this function it is defined as well as called here so it will do its work and return undefined by default and console it
                              //(if there would have been a return value then it would have returned the value)
}())


// EXAMPLE:
function higherOrder(f){
    console.log(f)           // this will print the type of function as Function:(anonymous/func_name)
    console.log(f())         // since this is called here so it will do its work and also print returned value
}
higherOrder(function(){console.log("Hello")})
higherOrder(function(){return "Hellok"})
higherOrder(hello)




