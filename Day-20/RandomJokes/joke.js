let button = document.getElementsByClassName('btn')
let contents = document.getElementById('content')
let emoji = document.getElementById('emoji')

async function fetchdata()  {
    
   let response = await fetch ('https://api.chucknorris.io/jokes/random')
    let data = await response.json();
    contents.innerText = `${data.value}`
    emoji.innerText = '😁'
    
    

}















document.getElementById('button').addEventListener('click',(event => {
    event.preventDefault();
    fetchdata();
}))