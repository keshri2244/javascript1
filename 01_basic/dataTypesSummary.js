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






// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


const heros = ["Shaktiman","naagraj","doga"];
let myobj = {
    name : "Rahul",
    age :21,
}

const myFunction = function(){
    console.log("Hello World\n");
    
}