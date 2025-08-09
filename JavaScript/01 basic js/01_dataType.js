var a  = 10;
console.log(a);

/* Difference btw var, let, const
 
         var                       let                            const
   1. Redeclaration:
          can               can not (error)                          const can not (error)


   2. Reinitialisation: 
          can               can                                     const can not (error)
        
   3. Hoisting:
          yes              not properly but yes                     const not properly but yes

   4. Window Object
 part of window object     not part of Window object                 not part of window object
                             (part of Script object)                   (part of Script object)

   5. Scope:
      global                  block                                      block


    dynamic/loosely - no need to define data type
    static/strongly - mandatory to define data type
    
*/ 
console.log(typeof(a));

var str = 'Radha';
var bool = true;
var a;                               // if console without inisialization undefined will come in console
let bigInt = 123000000000000000000000000000000n;
console.log(bigInt)
console.log(typeof str);
console.log(typeof bool);

 /********INTERVIEW 

const a ; is wrong bcz we need to initialize it 
diff btw null and undefined
undefined - when we want to initialize it afterwards 
null - we delibrately to keep it blank
let bigInt = 123000000000000000000000000000000n;     for big integers and need to keep n in the last to display full integer value
NaN (not a number)


*/



