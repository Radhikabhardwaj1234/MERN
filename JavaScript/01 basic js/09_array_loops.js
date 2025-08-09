var arr = [1,2,3,4,6];

// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

//1. arr.forEach((item , index) =>{})   // executes callback function for each element 
arr.forEach((item) => {
    console.log(item * 2);
})

arr.forEach((item , index) => {
    console.log(item * 2 , index);
})

arr.forEach((_ , index) => {         // if dont want item use underscore
    console.log(index);
})

var x = arr.forEach(() => {   })        // always returns undefined   


//2. arr.map((item , index) => {})    // executes callback func and returns an array of the same size with all the items edited as stated inside the body of the callback function

var arr2 = arr.map((item , idx) => {
    return item*item;
})
var arr3 = arr.map((item , idx) => {
    console.log(item*item);
})
var arr4 = arr.map((item , idx) => {
    if(idx == 2) return item * item;
})
var arr5 = arr.map((item ) => {
        return item > 4;
})

var arr6 = arr.map(item => item  * item);
console.log(arr);
console.log(arr6);

// 3. arr.filter((item,ind)=>{
//       return (a boolean value for each item (if true then item will be taken otherwise not)) 
//    })
// filters the array and returns an array with the values that satisfies the condition
var arr7 = [2 , 3 , 45 , 67 , 78];
var arr8 = arr7.filter((item , idx) => {
   if(idx == 2) return true;
})
var arr8 = arr7.filter((item , idx) => {
    return item > 30;
})
console.log(arr8);

// 4. arr.reduce((accumulator, item, index)=>{
//         return accumulator +/*/- etc (anything);        
//    } , (initial value of accumulator))
// reduces the array into a single value
// If initial value of the accumulator is not defined here then it will take it as 0 for addition and 1 for multiplication
var arr7 = [2 , 3 , 45 , 67 , 78];

var x = arr7.reduce((total , item , idx) => {
    return total+item;
} , 0);                                                  // every item is accumulated in total and at the end total+item at the last iteration is returned

var evenIdxSum = arr7.reduce((total , item , idx) => {
    if(idx%2==0) return total+item;
    return total;
} , 0);                                                  // in case the index is odd just return the total because for every item reduce function updates the total with the returned value of the calback

var evenIdxSum1 = arr7.reduce((total , item , idx) => {
    if(idx%2==0) return total+item;                      // if you leave the odd idx case empty then it wil return undefined at the first odd index and assign it to total that will result in total being NaN in the next iteration
} , 0);                                                  

var ret = arr7.reduce((total , item , idx) => {
    if(idx==4) return -5;
    return total+item;
} , 0);                                                 // reduce method returns the value returned by the callback of the last item



console.log(x);

// 5. arr.some((item, idx) => {})          -returns true if atleast one element satisfies condition       -return boolean         - no alteration
console.log(arr7.some((item) => item > 10 ));
console.log(arr7.every((item) => item >= 10 ));