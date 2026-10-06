// @leet start
function isPossible(target: number[]): boolean {
  const cond = (a: number, b: number) => a > b;

  const addToHeap = (heap: number[], x: number) => {
    heap.push(x);
    normalize(heap, heap.length - 1);
  };

  const popHeap = (heap: number[]) => {
    const top = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
      heap[0] = last!;
      normalizeToBottom(heap, 0);
    }

    return top;
  };

  const normalize = (heap: number[], x: number) => {
    if (x === 0) return;
    const p = Math.trunc((x - 1) / 2);
    if (!cond(heap[x], heap[p])) return;
    [heap[p], heap[x]] = [heap[x], heap[p]];
    normalize(heap, p);
  };

  const normalizeToBottom = (heap: number[], x: number) => {
    const l = 2 * x + 1;
    const r = l + 1;
    let m = x;
    if (l < heap.length && cond(heap[l], heap[m])) m = l;
    if (r < heap.length && cond(heap[r], heap[m])) m = r;
    if (m === x) return;
    [heap[x], heap[m]] = [heap[m], heap[x]];
    normalizeToBottom(heap, m);
  };

  const inp: number[] = [];
  let sum = 0;
  for (const t of target) {
    addToHeap(inp, t);
    sum += t;
  }
  /*
   * [8, 5]
   */

  while (true) {
    const top = popHeap(inp);
    const rest = sum - top;
    if (top === 1 || rest === 1) return true;
    if (top <= rest || rest === 0 || top % rest === 0) return false;
    addToHeap(inp, top % rest);
    sum = rest + (top % rest);
  }
}
// @leet end
