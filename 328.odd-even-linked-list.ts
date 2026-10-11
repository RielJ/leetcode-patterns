// @leet start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  let node = head;
  let evenHead = head?.next ?? null;
  let odd = head;

  let i = 1;
  while (node?.next) {
    let prev = node.next;
    node.next = node.next.next;

    if (i % 2 === 0) {
      odd = prev;
    }

    node = prev;
    i++;
  }

  if (odd) odd.next = evenHead;

  return head;
}
// @leet end
