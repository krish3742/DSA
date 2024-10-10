//Leetcode Question No: 206
const reverseList = function(head) {
    let prev = null;
    let next = null;
    let curr = head;
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
};