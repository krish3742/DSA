//Leetcode Question No: 496
var nextGreaterElement = function(nums1, nums2) {
    let element = [];
    for(let i = 0; i < nums1.length; i++) {
        let num2Index = nums2.indexOf(nums1[i]) + 1;
        let flag = 1;
        for(let j = num2Index; j < nums2.length; j++) {
            if(nums2[j] > nums1[i]) {
                flag = 0;
                element.push(nums2[j]);
                break;
            }
        }
        if(flag) {
            element.push(-1);
        }
    }
    return element;
};
