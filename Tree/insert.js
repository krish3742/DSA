//Leetcode Question No: 701
var insertIntoBST = function(root, val) {
    function insert(node) {
        if(node && node.val > val) {
            if(node.left === null) {
                node.left = new TreeNode(val);
            } else {
                insert(node.left);
            }
        } else if(node && node.val < val) {
            if(node.right === null) {
                node.right = new TreeNode(val);
            } else {
                insert(node.right);
            }
        }
    }
    if(root) {
        insert(root);
    } else {
        root =  new TreeNode(val);
    }
    return root;
};