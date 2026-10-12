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
  if (!head) return head;
  const evenHead = head.next;
  let odd = head;
  let even = evenHead;

  while (even?.next) {
    odd.next = even.next; // odd skips over even
    odd = odd.next;
    even.next = odd.next; // even skips over the new odd
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}
// @leet end
