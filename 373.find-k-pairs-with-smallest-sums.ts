// @leet start
function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  type THeap = [number, number, number];
  const heap: THeap[] = [];
  const less = (a: THeap, b: THeap) => a[0] < b[0];

  const addToHeap = (x: THeap) => {
    heap.push(x);
    normalize(heap.length - 1);
  };

  const popHeap = () => {
    const top = heap[0];
    const last = heap.pop();

    if (heap.length > 0) {
      heap[0] = last!;
      normalizeToBottom(0);
    }

    return top;
  };

  const normalize = (x: number) => {
    if (x === 0) return;
    const p = Math.trunc((x - 1) / 2);
    if (!less(heap[x], heap[p])) return;
    [heap[p], heap[x]] = [heap[x], heap[p]];
    normalize(p);
  };

  const normalizeToBottom = (x: number) => {
    const l = 2 * x + 1;
    const r = l + 1;
    let m = x;
    if (l < heap.length && less(heap[l], heap[m])) m = l;
    if (r < heap.length && less(heap[r], heap[m])) m = r;
    if (m === x) return;
    [heap[x], heap[m]] = [heap[m], heap[x]];
    normalizeToBottom(m);
  };

  const result: [number, number][] = [];

  for (let i = 0; i < Math.min(k, nums2.length); i++) {
    addToHeap([nums1[0] + nums2[i], 0, i]);
  }

  while (result.length < k && heap.length) {
    const first = popHeap();

    result.push([nums1[first[1]], nums2[first[2]]]);

    let next = first[1] + 1;
    if (next < nums1.length) {
      addToHeap([nums1[next] + nums2[first[2]], next, first[2]]);
    }
  }

  return result;
}

// @leet end
