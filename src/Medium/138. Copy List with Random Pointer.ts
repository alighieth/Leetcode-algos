class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: _Node | null): _Node | null {
  if (head === null) return null;

  const randomMap = new Map<_Node, _Node | null>();

  let currentNode: _Node | null = head;
  while (currentNode !== null) {
    randomMap.set(currentNode, new _Node(currentNode?.val, null, null));
    currentNode = currentNode.next;
  }

  currentNode = head;

  while (currentNode !== null) {
    const node = randomMap.get(currentNode) ?? null;
    node.next = randomMap.get(currentNode.random) ?? null;
    node.random = randomMap.get(currentNode.random) ?? null;
    currentNode = currentNode.next;
  }

  return randomMap.get(head);
}
