let books = [{
    author: 'sathish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
}, {
    author: 'krish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
},
{
    author: 'sathish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
}];

//for loop

console.log(`FOR LOOP 
output: `)

for (i=0;i<books.length;i++){
    console.log(books[i])
}
console.log()

// for in loop

console.log(`

FOR IN LOOP 
output: `)

for (i in books){
    console.log(books[i])
}


// for  of loop

console.log(`

FOR OF LOOP 
output: `)


for (book of books){
    console.log(book)
}


// for each loop

console.log(`

FOR EACH LOOP 
output: `)


books.forEach((element)=>console.log(element))