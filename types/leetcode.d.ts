// Classes that LeetCode's TypeScript runtime defines as globals. The problem
// templates only show them in a comment, so declare them here to let solution
// files type-check in the editor. LeetCode supplies the real classes on submit.

declare class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null);
}

declare class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}

// `_Node` is problem-specific: LeetCode gives it different fields in different
// problems. This is the shape from 138 (Copy List with Random Pointer). Update
// it when a problem uses another shape, such as 116 (left/right/next) or 133
// (neighbors).
declare class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;
  constructor(val?: number, next?: _Node, random?: _Node);
}
