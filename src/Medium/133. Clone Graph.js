/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (node === null) return null;
  if (node.neighbors.length === 0) return new Node(node.val);

  const nodeMap = new Map(); // track index -> node
  let callQueue = []; // track what to compute next;
  let nodeTracker = new Set();

  callQueue.push(node ?? null);
  while (callQueue.length > 0) {
    const currNode = callQueue.shift();
    if (currNode == null || nodeTracker.has(currNode.val)) continue;

    nodeTracker.add(currNode.val);
    callQueue.push(...(currNode.neighbors ?? []));
    nodeMap.set(currNode.val, new Node(currNode.val, []));
  }

  // {1=> {val:1, neighbors:[....]} , 2=> {val:2, neighbors:[....]}}
  nodeTracker = new Set();
  callQueue = [];
  callQueue.push(node);

  const head = nodeMap.get(node.val);

  while (callQueue.length > 0) {
    const currNode = callQueue.shift();
    if (currNode === null || nodeTracker.has(currNode.val)) continue;

    nodeTracker.add(currNode.val);

    const newNode = nodeMap.get(currNode.val);
    const nodeNeighbors = newNode.neighbors ?? [];

    currNode.neighbors.forEach((neighborNode) => {
      nodeNeighbors.push(nodeMap.get(neighborNode.val));
    });
    newNode.neighbors = nodeNeighbors;

    callQueue.push(...currNode.neighbors);
  }

  return head;
};

// better solution using dfs
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node == null) {
    return null;
  }

  let visited = new Map();

  function dfs(node) {
    if (visited.has(node)) {
      return visited.get(node);
    }

    let clone = new Node(node.val);
    visited.set(node, clone);

    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};
