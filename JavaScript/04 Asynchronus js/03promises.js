// promise object is an eventual completion or failure of an asynchronus method and its return value
// promise handling is to determine what to do when a promise is resolved or failed


// Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states
// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

var a = 10;

var promise = new Promise((resolve , reject)=>{
    if(a===10) resolve("Pizza");
    else reject("No pizza");
})

console.log(promise);  //if promise is resolved then it will print promise { 'pizza' } 
                        // if promise is not resolved then it will print promise {<resolved> 'no pizza'} +  UnhandledPromiseRejection (because we have not handled the promise)

//promise handling

promise.then((result)=>{
    console.log("Promise resolved " + result);
},(error)=>{
    console.log("Promise rejected " + error);
})

promise.then((result)=>{
    console.log("Promise resolved " + result);
}).catch((err)=>{
    console.log("Promise rejected " + err);
})