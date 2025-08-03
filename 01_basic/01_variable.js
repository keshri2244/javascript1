const accountID = 144553
let accountemail = " rahulkeshri2244@gmail.com"
var accountpassword =  "12345" // not used now a days because of scope problem prefer using let
accountcity = " Jaipur"
 
// accounID = 2 not allowed because it is decleared constant
console.log(accountID);

accountemail = "hcbc@gmail.com"
accountpassword = "58798"
accountcity = "Ranchi"
// let accountatate;
console.table([accountID, accountemail,accountpassword,accountcity]);

/*
prefer not to use var 
because of in block scope and functional scope
*/