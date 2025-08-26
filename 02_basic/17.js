// const tinderUser = new Object()     //singleton object 

const tinderUser = {}  // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "rahulkeshri2244@gmail.com",
    fullname : {
        userFullname: {
            firstname : "Rahul",
            lastname: "keshari"
        }
    }
}

// console.log(regularUser.fullname.userFullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = Object.assign({},obj1,obj2,obj4)
console.log(obj3);




