//Leetcode Question No: 1290
var getDecimalValue = function(head) {
    let binaryNumber = "";
    while(head) {
        binaryNumber += head.val; 
        head = head.next;
    }
    return parseInt(binaryNumber, 2);
};