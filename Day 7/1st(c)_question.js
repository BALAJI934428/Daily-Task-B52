let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){
let users = JSON.parse(xhr.responseText);

console.log(`c) Print the following details name, capital, flag using forEach function

`)

let val =Object.entries(users)

val.forEach((value)=>{
console.log(`NAME OF THE COUNTRY: ${value[1].name.common}
CAPITAL OF THE COUNTRY: ${value[1].capital}
FLAG OF THE COUNTRY: ${value[1].flag}
`)})}


xhr.send();