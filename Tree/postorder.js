//Leetcode Question No: 145
var postorderTraversal = function(root) {
    const res = [];
    function postorder(node) {
        if(!node) {
            return;
        }
        postorder(node.left);
        postorder(node.right);
        res.push(node.val);
    }
    postorder(root);
    return res;
};