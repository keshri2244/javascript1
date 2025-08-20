const jsuser = {
    name : "Rahul",
    "full name " : "Rahul Keshari",
    [mySym] : "mykey1"
    age : 20,
    location : "Ranchi",
    email : "rahulkeshri2244@gmail.com"
    isLoggedIn : false,
    lastLoginDays :["Monday", " Saturday"]
}

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]); //Symbol is represented by []

