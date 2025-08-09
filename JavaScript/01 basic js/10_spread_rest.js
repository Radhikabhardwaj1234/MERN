//spread = ...
//rest = ...

let arr = [1,2,3,4,5]

function add(x , y  , z){return x+y+z;}
console.log(add(...arr));

// let arr2 = ...arr         ...arr gives  elements seprated with comma  so this is wrong
let arr2 = [...arr];


//shallow copy        copies the refrence that is why changes reflect in both array   (both array will have same address as arr2 link to address arr1)
arr2 = arr;
arr2[0] = 10;
console.log(arr);
console.log(arr2);


//deep copy

arr3 = [...arr];
arr3[1] = 80;
console.log(arr3);
console.log(arr);

//concatenate with spread operator

var arr4 = [...arr , ...arr2 , ...arr3];

//rest operator

function a(...rest){
    console.log(rest);
}
a(3,5,6,7,8,9,9);

//destructuring

let [w , b, c, ...x] = [1,2,3,4,5,6,7,8];
console.log(c);
console.log(x);