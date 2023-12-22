
    
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        let countryNames = [];

        countries.forEach(country => {
            countryNames.push(country.name.common);
        })
        
        function getRandomItem(arr) {

            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];
        
            return item;
        }
        const result = getRandomItem(countryNames);
        



        let neededCountries = [result];
        let name = []
        let capital = []
        let region = []
        let code = []
        let cimage = []
        
        
        

        countries.forEach(country => {
            if (neededCountries.includes(country.name.common)) {
                name.push(country.name.common)
                capital.push(country.capital)
                region.push(country.region)
                code.push(country.flag)
                cimage.push(country.flags.png)
                
                }
       })
       let mname = name[0].toString();
       let cname = mname.toUpperCase();

       

          document.getElementById('countryname').innerText = cname
          document.getElementById('countrycapital').innerText = `Capital: ${capital}`
          document.getElementById('countryregion').innerText = `Region: ${region}`
          document.getElementById('countrycode').innerText = `Country Code: ${code}`
          let image = document.getElementById('cimg')
          image.setAttribute('src',`${cimage}`)


                // ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
                    let button = document.querySelector('.button')
                    let temp = document.querySelector('.temp');
                    let desc = document.querySelector('.desc');
                    let hum = document.querySelector('.hum');
                    let pre = document.querySelector('.pre');
                    let mtem = document.querySelector('.mtem');
                    let mintem = document.querySelector('.mintem');


                    // ADDING EVENT LISTENER TO SEARCH BUTTON  
                    button.addEventListener('click', function(){

                        // Fection data from open weather API
                        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
                        .then(response => response.json())
                        .then(
                            displayData)
                        .catch(err => alert('Weather Data Not Available')); 

})

// Function to diplay weather on html document
const displayData=(weather)=>{
    hum.innerText = `Humidity: ${weather.main.humidity}`
    pre.innerText = `Pressure: ${weather.main.pressure}`
    mtem.innerText = `Maximum Temperature: ${weather.main.temp_max}`
    mintem.innerText = `Minimum Temperature: ${weather.main.temp_min}`
    
    
    temp.innerText=`Temperature: ${weather.main.temp}°C`
    desc.innerText=`Climate: ${weather.weather[0].main}`

}



               
          

    });



  
    
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
    let countryNames = [];

    countries.forEach(country => {
        countryNames.push(country.name.common);
    })
    
    function getRandomItem(arr) {

        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
    
        return item;
    }
    const result = getRandomItem(countryNames);
    



    let neededCountries = [result];
    let name = []
    let capital = []
    let region = []
    let code = []
    let cimage = []
    
    
    

    countries.forEach(country => {
        if (neededCountries.includes(country.name.common)) {
            name.push(country.name.common)
            capital.push(country.capital)
            region.push(country.region)
            code.push(country.flag)
            cimage.push(country.flags.png)
            
            }
   })
   let mname = name[0].toString();
   let cname = mname.toUpperCase();

   

      document.getElementById('countryname1').innerText = cname
      document.getElementById('countrycapital1').innerText = `Capital: ${capital}`
      document.getElementById('countryregion1').innerText = `Region: ${region}`
      document.getElementById('countrycode1').innerText = `Country Code: ${code}`
      let image = document.getElementById('cimg1')
      image.setAttribute('src',`${cimage}`)


            // ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
                let button = document.querySelector('.button1')
                let temp = document.querySelector('.temp1');
                let desc = document.querySelector('.desc1');
                let hum = document.querySelector('.hum1');
                let pre = document.querySelector('.pre1');
                let mtem = document.querySelector('.mtem1');
                let mintem = document.querySelector('.mintem1');


                // ADDING EVENT LISTENER TO SEARCH BUTTON  
                button.addEventListener('click', function(){

                    // Fection data from open weather API
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
                    .then(response => response.json())
                    .then(
                        displayData)
                    .catch(err => alert('Weather Data Not Available')); 

                })

                // Function to diplay weather on html document
                const displayData=(weather)=>{
                    hum.innerText = `Humidity: ${weather.main.humidity}`
                    pre.innerText = `Pressure: ${weather.main.pressure}`
                    mtem.innerText = `Maximum Temperature: ${weather.main.temp_max}`
                    mintem.innerText = `Minimum Temperature: ${weather.main.temp_min}`
                    
                    
                    temp.innerText=`Temperature: ${weather.main.temp}°C`
                    desc.innerText=`Climate: ${weather.weather[0].main}`

                }


          
      

});

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
    let countryNames = [];

    countries.forEach(country => {
        countryNames.push(country.name.common);
    })
    
    function getRandomItem(arr) {

        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
    
        return item;
    }
    const result = getRandomItem(countryNames);
    



    let neededCountries = [result];
    let name = []
    let capital = []
    let region = []
    let code = []
    let cimage = []
    
    
    

    countries.forEach(country => {
        if (neededCountries.includes(country.name.common)) {
            name.push(country.name.common)
            capital.push(country.capital)
            region.push(country.region)
            code.push(country.flag)
            cimage.push(country.flags.png)
            
            }
   })
   let mname = name[0].toString();
   let cname = mname.toUpperCase();

   

      document.getElementById('countryname2').innerText = cname
      document.getElementById('countrycapital2').innerText = `Capital: ${capital}`
      document.getElementById('countryregion2').innerText = `Region: ${region}`
      document.getElementById('countrycode2').innerText = `Country Code: ${code}`
      let image = document.getElementById('cimg2')
      image.setAttribute('src',`${cimage}`)
      


        


                            // ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON.
                let button = document.querySelector('.button2')
                let temp = document.querySelector('.temp2');
                let desc = document.querySelector('.desc2');
                let hum = document.querySelector('.hum2');
                let pre = document.querySelector('.pre2');
                let mtem = document.querySelector('.mtem2');
                let mintem = document.querySelector('.mintem2');


                // ADDING EVENT LISTENER TO SEARCH BUTTON  
                button.addEventListener('click', function(){

                    // Fection data from open weather API
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cname}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
                    .then(response => response.json())
                    .then(
                        displayData)
                    .catch(err => alert('Weather Data Not Available')); 

                })

                // Function to diplay weather on html document
                const displayData=(weather)=>{
                    hum.innerText = `Humidity: ${weather.main.humidity}`
                    pre.innerText = `Pressure: ${weather.main.pressure}`
                    mtem.innerText = `Maximum Temperature: ${weather.main.temp_max}`
                    mintem.innerText = `Minimum Temperature: ${weather.main.temp_min}`
                    
                    
                    temp.innerText=`Temperature: ${weather.main.temp}°C`
                    desc.innerText=`Climate: ${weather.weather[0].main}`

                }


}

        

);



