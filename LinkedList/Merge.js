//Leetcode Question No: 21
var mergeTwoLists = function(list1, list2) {
    let temp = new ListNode();
    let dummy = temp;
    while(list1 || list2) {
        let value1 = list1 ? list1.val : null;
        let value2 = list2 ? list2.val : null;
        if(value1 <= value2 && list1) {
            dummy.next = new ListNode(value1);
            list1 = list1.next;
        } else if(value1 === null && list2) {
            dummy.next = new ListNode(value2);
            list2 = list2.next;
        } else if(value2 === null && list1) {
            dummy.next = new ListNode(value1);
            list1 = list1.next;
        } else if(list2) {
            dummy.next = new ListNode(value2);
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    return temp.next;
};