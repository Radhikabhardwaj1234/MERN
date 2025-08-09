var arr = [123 , "helo" , 1.23 , "bbababu"]       
console.log(typeof arr);     //object 

// why arr starts from zero index not one ?
//Index is how far element is from base address
//Address of element =  base address + (index) * n        n is size of element 

console.log(arr[-1]);  //will give undefined
console.log(arr[9]);  //will give undefined

var arr = [
    [2,3,4],
    "fsdaafs",
    567,
    [1]
]
console.log(arr.length);              
// console.log(arr);



//  METHODS OF ARRAYS

//1. arr.push(values to be pushed)  -push at the end of the array            - returns updated length of array        - updates the original array           
var arr = [1,2,3,4,5];
var arr2 = ["ar2" , "e"];
arr.push("hello");
let a = [1,2,3,4].push(4,5,6);
console.log(arr.push(arr));
console.log(a);

//2. arr.pop()                     -pop from the end of the array              - returns poped value                     - updates the original array
arr.pop();
console.log(arr);

//3. arr.shift()                    -pop from start of the array                -  returns poped value                    - updates the original array
console.log(arr.shift());

//4. arr.unshift()                   -push at start of the array                -  returns updated length                 - updates the original array
console.log(arr.unshift(0 , 1));

//5. arr.concat(arr2 , arr1)         -concats multiple arrays                   - returns concatenated array               - does not alter original array
arr3 = [1,2,2,2];
var arr4 = arr.concat(arr2 , arr3);
var arr5 = [].concat(arr2 , arr3 , arr);          
//wil come in same order as they are written in function argument.
console.log(arr4);

//6. arr.slice(startIndex,endIndex)   - extracts the subarray                   - returns subarray                         - does not alter the original array
//   endIndex is not included in sliced array
//   arr.slice(startindex)            - from startindex to end of the array

var arr6 = arr.slice(2 , 50 );                    
var arr6 = arr.slice(-4 , -2 );    
var arr6 = arr.slice(-2 , -4 );    
console.log(arr6);

//7. arr.splice(start , countToDelete ) -delete the elements                     -returns the deleted elements array       - update the original array
//   arr.splice(start , countToDelete , elements to insert at start index)
arrSplice = arr.splice(2 , 3);  // delete three elements from index 2
arrSplice = arr.splice(2 );    //delete all elements from index 2 
arrSplice = arr.splice(-2 );    //delete all elements from index 2 
console.log(arrSplice);

console.log(arr)
// var arrSplice = arr.splice(2,3,0,0,0,0,0);
var arrSplice = arr.splice(3 , 0 , "Radha");
console.log(arrSplice);
console.log(arr)

//8. arr.sort();                        -by default sort array according to 1st digit of each element4 - returns sorted array  - alters original array
arr7 = [11 , 56 , 34 , 78 ,  100];
arr7.sort();                             
console.log(arr7);
// arr7.sort((x,y) => x-y);              // we need to pass comparator for more than 1 digit number to be sorted.
console.log(arr7.sort((a,b) => {
    return a-b;                          //if a-b is +ve than swap otherwise no swap.
})
);

//9. arr.find((item,idx) => {})       - returns the first element that satisfies the condition                   - returns element        - no alter
 console.log(arr7.find((item,idx) => { return item > 50}));   // if none satisfied then return undefined


//10. arr.findIndex((item,idx) => {})       - returns the first index of element that satisfies the condition         - returns element        - no alter
 console.log(arr7.findIndex((item,idx) => { return item > 50}));     // if none satisfied then return -1

//11. arr.join(separator)         - joins the elements separated by seprator in to a string                           - returns joined string    - no alteration

var join = arr7.join();           // by default seprate elements by comma
var join1 = arr7.join("-");
console.log(join);
console.log(join1);


//12. arr.indexOf(element)                 - gives index of eleement                      
console.log(arr7.indexOf(99));              // -1 if not present

//13. arr.includes(element)
console.log(arr7.includes(99));            

//14. split string
var str = "hello 3   my nme6  qk";
console.log(str.split(/\s+/));