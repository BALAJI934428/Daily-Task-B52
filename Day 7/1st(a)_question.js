let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){

  let users = JSON.parse(xhr.responseText);
  

  let val =Object.entries(users)
console.log(`
  
a) Get all the countries from Asia continent /region using Filter function
Output:
`)
  val.filter((value) =>{
    if(value[1]['region'] == 'Asia'){
      console.log(value[1].name.common)
    }
    
  })

}

xhr.send();