let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){

  let users = JSON.parse(xhr.responseText);
  console.log(`
  
b) Get all the countries with a population of less than 2 lakhs using Filter function

OUTPUT:
`)

  let val =Object.entries(users)
  val.filter((value) =>{
   if(value[1]['population'] <200000){
console.log(`Country Name: ${value[1].name.common}
Country Population: ${value[1].population}
`)

   }
  })


}

xhr.send();