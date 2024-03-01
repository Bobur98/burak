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

// H-TASK

function getPositive(arr: number[]) {
    let positiveNums = ''

    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > 0) {
           positiveNums += arr[i]   
        }
     }

     return positiveNums
}

console.log(getPositive([1,-4,2,-1,5]));


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
