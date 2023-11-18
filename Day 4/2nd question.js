// 2)-(a) arrow function


(()=>{
let odd = []
for (i=1;i<20;i++){
    if (i % 2 != 0){
        odd.push(i)
    }
}
console.log(`a) Odd numbers in array 
Output: ${odd}
`)
})();



// // 2)-(b) arrow function

(()=>{

let names = ['balaji', 'suriya', 'tamil', 'vicky'];
let output = [];
for (i=0;i<names.length;i++){
    output.push(names[i][0].toUpperCase()+names[i].slice(1));
};
console.log(`b) Convert all the strings to title caps in a string array
Output: ${output}
`);
})();



// //2)-(c) arrow function

(()=>{
let numbers = [1,2,3,4,7,9,24];
let sum = 0
 for (i=0; i<numbers.length;i++){
    sum += numbers[i]
 }
console.log(`c) Sum of all numbers in an array
Output: ${sum}
`)})();



// // 2)-(d) arrow function

(()=>{
var numArray =[23,4,2,5,7,9,5,3,4,6,8]
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
console.log(`d) Return all the prime numbers in an array
Output: ${numArray}
`)})();



// // 2)-(e) arrow function

(()=>{

let state = ['malayalam','tamil','madam','radar','balaji']
let state1 = []
let state2 = []
let palindrome =[]
for (i=0;i<state.length;i++){
    state1.push(state[i].split(''))};

    for (j=0;j<state.length;j++){
        let summ =[]
        for (i=state1[j].length-1;i>=0;i--){
    summ.push(state1[j][i])
}
state2.push(summ.join(''))
};
for (i=0;i<state.length;i++){
    if(state[i] == state2[i]){
        palindrome.push(state2[i])

    }
}
console.log(`e) Return all the palindromes in an array
Output: ${palindrome}
`)})();


































