/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const adjacencyArr = new Array(n).fill(0).map(() => []);

  edges.forEach(([parent, child]) => {
    adjacencyArr[parent].push(child);
    adjacencyArr[child].push(parent);
  });

  console.log(adjacencyArr);
  function helper(node, parent) {
    let time = 0;

    for (const child of adjacencyArr[node]) {
      if (child === parent) continue;

      time += helper(child, node);
    }

    if (node == 0) return time;
    return time > 0 || hasApple[node] ? time + 2 : 0;
  }

  return helper(0, -1);
};
