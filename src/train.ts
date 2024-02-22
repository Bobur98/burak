console.log("train is EXECUTED!");

// G-TASK

function getHighestIndex(nums: number[]) {
    let highestNums = 0;
    let maxIndex = 0;
    for(let i = 0; i <= nums.length; i++){
        if (nums[i] > highestNums){
            highestNums = nums[i];
            maxIndex = i

        }
    }
   return maxIndex
}


let test = [1,5,3,5]

console.log(getHighestIndex(test));
