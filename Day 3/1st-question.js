
let array1= {name:"person1",age:5}
let array2={age:5,name:'person1'}

let a =Object.entries(array1)
let b= a.sort();
let c = Object.entries(array2)
let d=c.sort();

let obj1=Object.assign({},b)
let obj2=Object.assign({},d)

let result = JSON.stringify(obj1) === JSON.stringify(obj2)

if (result === true){
    console.log(' The given JSON have the same properties')
}
else{
    console.log(' The given two JSON is not equal')
}




