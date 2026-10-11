// @leet start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  const nodes = new Map<_Node | null, _Node | null>();
  nodes.set(null, null);

  let node = head;
  while (node) {
    nodes.set(node, new _Node(node.val));
    node = node.next;
  }

  const newHead = nodes.get(head)!;
  for (const [orig, copy] of nodes) {
    if (orig && copy) {
      copy.next = nodes.get(orig.next) ?? null;
      copy.random = nodes.get(orig.random) ?? null;
    }
  }

  return newHead;
}
// @leet end
