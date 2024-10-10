//Leetcode Question No: 83
var deleteDuplicates = function(head) {
    let temp = new ListNode();
    let dummy = temp;
    let duplicate = null;
    while(head) {
        if(head.val !== duplicate) {
            dummy.next = new ListNode(head.val);
            dummy = dummy.next;
            duplicate = head.val;
        }
        head = head.next;
    }
    return temp.next;
};