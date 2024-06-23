class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const nodeArr = new Array<TreeNode | null>();
  function helper(node: TreeNode | null): boolean {
    if (node === null) return false;

    const isOwn = node.val === p?.val || node.val === q?.val;

    // own node && right or own node && left or left && right

    const foundLeft = helper(node.left);
    const foundRight = helper(node.right);

    const flag =
      (isOwn && foundLeft) ||
      (isOwn && foundRight) ||
      (foundLeft && foundRight);
    if (flag === true) nodeArr.push(node);

    return isOwn || foundLeft || foundRight;
  }

  helper(root);

  return nodeArr.pop() ?? null;
}
