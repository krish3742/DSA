//Leetcode Question No: 1008
var bstFromPreorder = function(preorder) {
    const root = preorder[0];
    const tree = new TreeNode(root);
    let dummy = tree;
    for(let i = 1; i < preorder.length; i++) {
        dummy = tree;
        while(dummy) {
            if(dummy.val < preorder[i]) {
                if(dummy.right === null) {
                    dummy.right = new TreeNode(preorder[i]);
                    break;
                }
                dummy = dummy.right;
            } else if(dummy.val > preorder[i]) {
                if(dummy.left === null) {
                    dummy.left = new TreeNode(preorder[i]);
                    break;
                }
                dummy = dummy.left;
            }
        }
    }
    return tree;
};