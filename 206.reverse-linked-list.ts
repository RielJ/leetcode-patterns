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

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head) return head;

  const reverse = (
    prev: ListNode | null,
    node: ListNode | null,
  ): ListNode | null => {
    if (!node.next) {
      node.next = prev;
      return node;
    }

    const next = node.next;
    node.next = prev;

    return reverse(node, next);
  };

  return reverse(null, head);
}

function reverseListRecursivev2(head: ListNode | null): ListNode | null {
  if (!head?.next) return head;
  const reversed = reverseListRecursivev2(head.next);
  const next = head.next;
  head.next = null;
  next.next = head;

  return reversed;
}

function reverseListIterative(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let node = head;
  let prev = null;
  while (node.next) {
    let cur = node;
    node = node.next;
    cur.next = prev;
    prev = cur;
  }

  node.next = prev;

  return node;
}

function reverseList(head: ListNode | null): ListNode | null {
  return reverseListRecursivev2(head);
}

// @leet end
