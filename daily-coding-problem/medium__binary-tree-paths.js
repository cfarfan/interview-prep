/**
 * Given a binary tree, return all paths from the root to leaves.
 * For example, given the tree:
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 *
 * Return [[1, 2], [1, 3, 4], [1, 3, 5]].
 */

function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const createTree = function (nums, i = 0) {
  if (nums[i] === null) return undefined;

  const node = new Node(
    nums[i],
    2 * i + 1 < nums.length ? createTree(nums, 2 * i + 1) : undefined,
    2 * i + 2 < nums.length ? createTree(nums, 2 * i + 2) : undefined
  );
  return node;
};

/**
 * @param {Node} root
 * @return {Number[][]}
 */
const getLeafPaths = function (root) {
  const paths = [];
  const dfs = (node, path) => {
    if (node == null) return;
    path.push(node.val);
    if (!node.left && !node.right) {
      paths.push(path);
    }
    dfs(node.left, [...path]);
    dfs(node.right, [...path]);
  };
  dfs(root, []);
  return paths;
};

console.log(getLeafPaths(createTree([1, 2, 3, null, 5])));
console.log(getLeafPaths(createTree([1, 2, 3, null, null, 4, 5])));
