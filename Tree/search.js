//Leetcode Question No: 700
var searchBST = function(root, val) {
    let res = null;
    function search(node) {
        if(node && node.val === val) {
            res = new TreeNode(node.val, node.left, node.right);
        }
        if(node) {
            search(node.left);
            search(node.right);
        }
    }
    search(root);
    return res;
};