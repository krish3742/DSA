//Leetcode Question No: 203
var removeElements = function(head, val) {
    const temp = new ListNode();
    let dummy = temp;
    let curr = head;
    while(curr !== null) {
        if(curr.val !== val) {
            dummy.next = new ListNode(curr.val);
            dummy = dummy.next;
        }
        curr = curr.next;
    }
    return temp.next;
};