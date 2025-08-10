// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const OutsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);

const bigNumber = 3697854215879n // big int ban gaya hai






2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


const heros = ["Shaktiman","naagraj","doga"];
let myobj = {
    name : "Rahul",
    age :21,
}

const myFunction = function(){
    console.log("Hello World\n");
    
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
=>stack ( used in primitive data types)
jo bhi variable decleare kiya haiuska copy milta hai



////////////////////////////////////////////////////////////////////////////////////////////////////////////


=>primitive (used in non primitive data types)
yaha bhi jo bhi object heap k andar chala jata hai uska refrence milta hai , jo bhi chages datatypes pe hoga vo original values pe hoga


*/

let myYoutubename = "RahulKeshari.com"
let anotherName = myYoutubename
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myYoutubename);

 let userOne = {
    email : "rahulkeshri2244@gmail.com" ,
    upi :  "user@ybl"
}

let userTwo = userOne

userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);



