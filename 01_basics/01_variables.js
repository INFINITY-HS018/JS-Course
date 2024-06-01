const accountId = 23223
let accountEmail = "harsh@gmail.com"
var accountPassword = "1234"
accountCity = "Kanpur"
let accountState;

// accountId = 23 // not allowed

accountEmail = "newemail@gmail.com"
accountPassword = "4321"
accountCity = "Lucknow"

/*
Prefer not to use var
because problem in block scope and functional scope
*/

console.log(accountId,accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])