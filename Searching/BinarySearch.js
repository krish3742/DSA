//Leetcode Question No: 35
const searchInsert = function(nums, target) {
    let lower = 0;
    let upper = nums.length - 1;
    if(target < nums[lower]) {
        return lower;
    } else if(target > nums[upper]) {
        return upper+1;
    } else {
        while(lower <= upper) {
            let mid = Math.floor((lower + upper) / 2);
            if (nums[mid] < target && nums[mid+1] > target) {
                return mid+1;
            } else if(nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                lower = mid + 1;
            } else if (nums[mid] > target) {
                upper = mid - 1;
            }
        }
    }
};

//Leetcode Question No: 704
const search = function(nums, target) {
    let lower = 0;
    let upper = nums.length - 1;
    while(lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            lower = mid + 1;
        } else if (nums[mid] > target) {
            upper = mid - 1;
        }
    }
    return -1; 
};