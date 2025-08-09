let obj = {
    name : "hey",
    age : 5,
    city : "bjn"
}
console.log(obj);
console.log(obj.name);       //access like object
console.log(obj["city"]);    //access like array
obj.city = "hello";         //update
obj.helo = "kkk";           //add
delete obj.helo;            //delete
console.log(obj);


//METHODS OF OBJECT

var keys = Object.keys(obj);              //1d array
var values = Object.values(obj); 
var entries = Object.entries(obj);        //2d array
console.log(keys);          
console.log(values);
console.log(entries);   

// Object.freeze(obj);                      //no modification or addtions of new property after using freeze but will not give any error if we try to 
obj.height = 3.3;
obj.city = 3.3;                         
console.log(obj);

// Object.seal(obj);                        // can update key's value  but can not add new property to object will not give any error if we try to add
obj.city = "jalan";
console.log(obj);

for( var i = 0 ; i < keys.length ; i++)      //obj.keys[i] will not work bcz keys[i] is string so it will give error.
    console.log(obj[keys[i]]);            

for(let i in obj){
    console.log(obj[i]);                      //obj.i will give undefined 
}
for(let i in obj){
    console.log(i);                     
}

//enumrable propeties - on which we can iterate

Object.defineProperty(obj , "cl" , {
    value : 5,
    enumerable : false,                   // it makes the variable non-enumerable so that we can not iterate on it also not visible in clg(obj) but we can acess it directly
    writable : false,                      //we can not update the value of "cl" bcz its non-writable
    // configurable : true
})

console.log(obj.propertyIsEnumerable("cl"));   //returns true/false
for(let i in obj){
    console.log(obj[i]);                     
}
console.log(obj);
console.log(obj.cl);



//SHALLOW AND DEEP COPY         **************INTERVIEW******************

let obj2 = {
    name : "Radha",
    age : 21,
    add : "lpu",
    nested : {
        hostel : "gh4",
    },
    equals : function(o){                   // if it would have been a fat arrow function then this keyword will not be able to find the age of the obj2
        if(this.age == o.age) return true;  // similarly write all conditions separated with && to equate objects
        else return false;
    }
}

// Difference between fat arrow and functional statement **************************INERVIEW*****************************
//in functional statment this points to the object in which function is defined bcz it is strongly binded with nearest object but fat arrow function is not binded with its nearest object so this keyword will not point to nearest object.

let shallowCopy1 =  obj2;
let deepCopy1 =  {...obj2};                //nested objec will not deep copy only name , age  and add will be deep copied

let deepCopy2 = Object.assign({} , obj2);  //will not work in nested objects 
//Object.assign() only copies enumerable properties.

let deepCopy3 = JSON.parse(JSON.stringify(obj2));  //will work in nested objects too.
console.log(shallowCopy1 == obj2);
console.log(deepCopy1 == obj2);
console.log(obj2.equals(deepCopy1));
console.log(obj2);
console.log(deepCopy1);
