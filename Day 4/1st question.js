

// //1)-(a)  print odd numbers in array

// //1)-(a) anonymous function

let oddnumbers =function () {
    let odd = []
    for (i=1;i<20;i++){
        if (i % 2 != 0){
            odd.push(i)
        }
    }
    console.log(`1)-(a) print odd numbers in array
    
    1)-(a) anonymous function 

    Output: ${odd}
    
    `)
    }
    oddnumbers();
    
    // //1)-(a) IIFE function
    
    (function(){
        let odd = [];
        for (i=1;i<20;i++){
            if (i % 2 != 0){
                odd.push(i)}}
    console.log(`
    1)-(a) IIFE function 

    Output: ${odd}
                
    `)
        
    })();
    
    
    
    
    
    //1)-(b) Convert all the strings to title caps in a string array
    
    //1)-(b) anonymous function
    
    let caps = function(){
    
    let names = ['balaji', 'suriya', 'tamil', 'vicky'];
    let output = [];
    for (i=0;i<names.length;i++){
        output.push(names[i][0].toUpperCase()+names[i].slice(1));
    };

console.log(`1)-(b) Convert all the strings to title caps in a string array
    
    1)-(b) anonymous function

    Output: ${output}
    `)
    }
    caps();
    
    // //1)-(b) IIFE function
    
    (function(){
        let names = ['balaji', 'suriya', 'tamil', 'vicky'];
    let output = [];
    for (i=0;i<names.length;i++){
        output.push(names[i][0].toUpperCase()+names[i].slice(1));
    };
    console.log(`
    1)-(b) IIFE function 

    Output: ${output}
                
    `)
    })();
    
    
    
    
    
    
    
    // //1)-c) Sum of all numbers in an array
    
    // //1)-(c) anonymous function
    
    let sumofarray = function(){
    let numbers = [1,2,3,4,7,9,24];
    let sum = 0
     for (i=0; i<numbers.length;i++){
        sum += numbers[i]
     }
console.log(`1)-c) Sum of all numbers in an array
    
    1)-(c) anonymous function
 
    Output: ${sum}
     `)};
    sumofarray();
    
    //1)-(c) IIFE function
    
    (function(){
        let numbers = [1,2,3,4,7,9,24];
    let sum = 0
     for (i=0; i<numbers.length;i++){
        sum += numbers[i]
     }
    console.log(`
    1)-(b) IIFE function 

    Output: ${sum}
                
    `)
    })();
    
    
    
    
    
    
    
    //1)-d) Return all the prime numbers in an array 
    
    //1)-(d) anonymous function
    
    let primenumbers = function(){
    var numArray =[23,4,2,5,7,9,5,3,4,6,8]
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
          });
          
console.log(`1)-d) Return all the prime numbers in an array 
    
    1)-(d) anonymous function
 
    Output: ${numArray}
    `)};
          primenumbers();
    
    //1)-(d) IIFE function
    
    (function(){
        var numArray =[23,4,2,5,7,9,5,3,4,6,8]
        numArray = numArray.filter((number) => {
            for (var i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) return false;
            }
            return true;
          });
          
    console.log(`
    1)-(d) IIFE function 
      
    Output: ${numArray}
                      
    `)
    
    })();
    
    
    
    
    
    
    
    //1)-(e) Return all the palindromes in an array
    
    // 1)-(e) anonymous function
    
    let palindromewords = function(){
    
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
console.log(`1)-(e) Return all the palindromes in an array
    
    1)-(e) anonymous function
 
    Output: ${palindrome}
    `)};
    
    palindromewords();
    
    //1)-(e) IIFE function
    
    (function(){
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
    console.log(`
    1)-(e) IIFE function 
      
    Output: ${palindrome}
                      
    `)
    
    })();
    
    
    
    
    
    
    // //1)-(f) Return median of two sorted arrays of the same size.
    
    // //1)-(f) anonymous function
    
    let answer = function(){
    let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    let legntharr1 = arr1.length
    
    for (i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    
    let median = (arr1[legntharr1]+arr2.length)/2
    
console.log(`1)-(f) Return median of two sorted arrays of the same size.
    
    1)-(f) anonymous function
 
    Output: ${median}}
    `)};
    
    answer();
    
    // //1)-(f) IIFE function
    
    (function(){
        let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    let legntharr1 = arr1.length
    
    for (i=0;i<arr2.length;i++){
        arr1.push(arr2[i])
    }
    
    let median = (arr1[legntharr1]+arr2.length)/2
    
    console.log(`
    1)-(f) IIFE function 
      
    Output: ${median}
                      
    `)
    })();
    
    
    
    
    
    
    
    // // 1)-(g) Remove duplicates from an array
    
    //1)-(g) anonymous function
    
    
    let removeduplicate=function(){
    let numbers = [1,2,3,4,2,5,3,6,7,8,4]
    let result = []
    for (i=0;i<numbers.length;i++){
        if(numbers[i]===numbers[0]){
            result.push(numbers[i])
        }
        if(result.indexOf(numbers[i])===-1){
            result.push(numbers[i])
        }
        
    }
console.log(`1)-(g) Remove duplicates from an array
    
    1)-(g) anonymous function
 
    Output: ${result}}
    `)};
    removeduplicate();
    
    
    //1)-(e) IIFE function
    (function(){
        let numbers = [1,2,3,4,2,5,3,6,7,8,4]
    let result = []
    for (i=0;i<numbers.length;i++){
        if(numbers[i]===numbers[0]){
            result.push(numbers[i])
        }
        if(result.indexOf(numbers[i])===-1){
            result.push(numbers[i])
        }
        
    }
    console.log(`
    1)-(g) IIFE function 
      
    Output: ${result}
                      
    `)
    
    })();
    
    
    
    
    
    
    
    
    
    
    
    