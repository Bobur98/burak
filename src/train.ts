console.log("train is EXECUTED!");

/* Project Standards:
  - Logging standards
  - Naming standards
    function, method, variable => CAMEL 
    class => PASCAL
    folder => KEBAB
    css = > SNAKE
   - Error handling
 */

/*
 Traditional API
 REST API
 GraphQL Api
*/

/** Cookies
 * request join
 * self destroy
 */

/** Validation:
 * Frontend validation
 * Backend validation
 * Database validation
 */

// R-TASK

function calculate(str:string) {
    // Splitting the expression based on the operator
    let plus = str.split('+');
    
    // Parsing the operands and summing them up
    let sum = 0;
    for (let i of plus) {
        sum += parseInt(i);
    }
    
    return sum;
}

// Test
console.log(calculate("1+3")); // Output: 4



// Q-TASK
//   function hasProperty(obj:any, str:string) {
//     let has = false
//     for (let key in obj) {
//         if(key === str) has = true
//         else has = false
//     }
//     return has
// }
// console.log('MIT TASK Q-TASK:');
// console.log(hasProperty({name: "BMW", model: "M3"}, "moddel"));

// // P-TASK
//  function objectToArray (obj:Object) {
  
//     return Object.entries(obj);
//  }

//  console.log(objectToArray( {a: 10, b: 20}));
 


// O-TASK
// function calculateSumOfNumbers(arr: any[]) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length; i++){
//    if(typeof arr[i] === 'number') sum += arr[i]
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));


// N-TASK
// function palindromCheck(word: string) {
//   let backward = ''
//   let forward = word.toLowerCase()
//   for(let i = forward.length-1; i >= 0; i--){
//     backward += forward[i]
//   }

//   return backward === forward
// }

// console.log(palindromCheck('dad'));


// M-TASK
// function getSquareNumber(arr: number[]){
//    let newArr = [];

//    for(let i = 0; i < arr.length; i++) {
//     newArr.push({number: arr[i], square: arr[i]*arr[i]})
//    }

//    return newArr
// }

// console.log(getSquareNumber([1,2,3]));


// L-TASK
// function reverseSentence(str: string) {
//   const splittedStr = str.split(' ')
//   let reversedStr = []

//   for(const word of splittedStr){
//     reversedStr.push(word.split('').reverse().join(""))
//   }

//   return reversedStr.join(' ')
// } 

// console.log(reverseSentence('we like Coding!'));

// K-TASK
// function countVowels(str: string) {
//   return str.match(/[aeiou]/ig)?.length
// }

// console.log(countVowels('string'));


// J-TASK

// function findLongestWord(str: string) {
//    const splitedStr = str.split(" ")
   
//    let longestWord = splitedStr[0]

//    for(let word of splitedStr) {       
 
//     if(word.length >= longestWord.length) longestWord = word
    
//    }

  
//   return longestWord
// }

// console.log(findLongestWord('I am from   Uzbekistan'));


// I-TASK

// function getDigits(str: string){
  
//   const digits = str.match(/\d/g);

//   return digits?.join('')
// }

// console.log(getDigits('s45f5s'));


// Challange task
// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;

// function decodeMessage(message: string, secret: number) {
//   let lowerCaseMessage = message.toLowerCase();
//   let decoded_msg = [];
//   for (let i = 0; i < lowerCaseMessage.length; i++){

//     let char_code = lowerCaseMessage.charCodeAt(i)
    
//     if(char_code >= 97 && char_code <= 122){
     
//         if(char_code + secret > 122) {
//           let startOver = (char_code + secret) - 122
//           decoded_msg.push(String.fromCharCode(96 + startOver))
//         } else if(char_code + secret < 97) {
//           let startBehind = 97 - (char_code + secret)          
//           decoded_msg.push(String.fromCharCode(123 - startBehind))
//         } else {
//           decoded_msg.push(String.fromCharCode(char_code + secret))
//         }
      
//     } else {
//       decoded_msg.push(String.fromCharCode(char_code))
//     }
//   }
   
//    return decoded_msg.join("")
// }
// const message = "Salom muchi, qalaysan?";


// const secret_msg = decodeMessage(message, code)
// console.log("Secret => ", secret_msg);

// setTimeout(() => {
//   code *= -1;
//   const msg_encoded = decodeMessage(secret_msg, code);
//   console.log("Original => ",msg_encoded);
  
// }, 3000);



// H-TASK

// function getPositive(arr: number[]) {
//     let positiveNums = ''

//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] > 0) {
//            positiveNums += arr[i]   
//         }
//      }

//      return positiveNums
// }

// console.log(getPositive([1,-4,2,-1,5]));


// G-TASK

// function getHighestIndex(nums: number[]) {
//     let highestNums = 0;
//     let maxIndex = 0;
//     for(let i = 0; i <= nums.length; i++){
//         if (nums[i] > highestNums){
//             highestNums = nums[i];
//             maxIndex = i

//         }
//     }
//    return maxIndex
// }


// let test = [1,5,3,5]

// console.log(getHighestIndex(test));
