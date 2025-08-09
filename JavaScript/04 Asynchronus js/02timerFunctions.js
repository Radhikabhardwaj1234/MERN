// Set Timeout
// var timerId = setTimeout(function() {
//     console.log(3)
// },3000);

// console.log("Timer Id : "  + timerId);

// var timerId2 = setTimeout(()=>{
//     console.log("Hello")
// },5000);

// console.log("Timer id2: "+ timerId2)

// clearTimeout(timerId)


// Set Interval
var intervalTimeId = setInterval(()=>{
    console.log(2);
},2000);

setTimeout(() => {
    clearInterval(intervalTimeId);
},4000);                                      // clear the interval after 4 seconds