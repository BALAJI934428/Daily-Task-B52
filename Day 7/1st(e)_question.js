

let XMLHttpRequest = require('xhr2')

const getUSDollar = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.responseType = "json";

  xhr.onload = () => {
    const data = xhr.response;


console.log(`
e) Print the country that uses US dollars as currency.
    
OUTPUT:
`)

data.filter((item) => item?.currencies?.USD).map((value) => 
{console.log(`Country Name: ${value.name.common}
Currencies: USD
`)});
   
    
  }
  xhr.send()
}

getUSDollar();

