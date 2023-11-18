let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){

  let users = JSON.parse(xhr.responseText);
  

  let val =Object.entries(users)
  let population = []
 val.forEach((value)=>{
  population.push(value[1].population)

 })
 let sumof = population.reduce((a,b)=>a+b)
 console.log('Total Number of Population in the given Countries is '+sumof)




}

xhr.send();