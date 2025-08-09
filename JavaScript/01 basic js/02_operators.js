var a  = 2;
var b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);      //power
console.log(a++);     //2
console.log(++a);     //4

console.log(b++ + 2);
var str = "123";
console.log(-str);
console.log(+str);
console.log(typeof +str);        //number ***INTERVIEW
console.log(typeof NaN);        //number
// type coersion
var c = "30";
var d = 31;

console.log(d+c);         //3130 string
console.log(c > d)        // false    implicit coersion

console.log('5' + 2 + 3);      //string 523        (concatenation will occur )
console.log(2 + 3 + '5');      //55

console.log('5' - 2);     //number  type coersion will occur in all other operation and perform arithmetic operation except +
console.log(2 - '5');

console.log(true - 1);    //true as 1 and false , null  as 0
console.log(1 + true);

console.log(false + 1);
console.log(1 + false );

console.log(!null + 1);
console.log(1 + null );

console.log(!undefined + 1);           //!undefined is true
console.log(1 + "helllo" );

console.log(parseInt("123abc"));      //123
console.log(parseInt("abc123abc"));   //NaN
console.log(parseInt("123abc123"));   //123

console.log(isNaN(23));     // false 
console.log(isNaN("23"));      // false
console.log(isNaN("asd"));     //true
console.log(isNaN("34asd"));     //true

//isNaN(54)
// Number("56")
a = "5"
console.log(+a + a);

console.log("A" - 3);

/* imperitive design - design in which we need to tell what to do and how to do e.g dsa algorrithms
declarative design  - what to do not how to do e.g use buit in functions perform particular function we dont know how it will perform
*/
