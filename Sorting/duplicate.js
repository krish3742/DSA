//Leetcode Question No: 217
var containsDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === nums[i+1]) {
            return true;
        }
    }
    return false;
};