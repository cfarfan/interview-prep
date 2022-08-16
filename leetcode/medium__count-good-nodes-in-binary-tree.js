/**
 * URL: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 *
 * Given a binary tree root, a node X in the tree is named good if in the path from
 * root to X there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let counter = 0;
  const count = (node, max) => {
    if (node === null) return;

    if (node.val >= max) {
      counter = counter + 1;
      max = node.val;
    }

    count(node.left, max);
    count(node.right, max);
  };

  count(root, root.val, 0);
  return counter;
};
