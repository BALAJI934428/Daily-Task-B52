

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' );

xhr.onload = function(){
  let data = JSON.parse(xhr.responseText);




  
  data.forEach(country => { console.log(`
  Country Name: ${country.name.common}
  Country Region : ${country.region}
  Country Subregion : ${country.subregion}
  Country Population : ${country.population}

  `)
    
  });
  

}
xhr.send();


