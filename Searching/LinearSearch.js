//Leetcode Question No: 26
const removeDuplicates = function(nums) {
    let k = 1;
    for(let index = 1; index < nums.length; index++) {
        if(nums[index] !== nums[k-1]) {
            nums[k] = nums[index];
            k++;
        }
    }
    return k;
};

//Leetcode Question No: 27
const removeElement = function(nums, val) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        };
    };
    return index;
};