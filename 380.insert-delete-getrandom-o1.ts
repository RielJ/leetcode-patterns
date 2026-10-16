// @leet start
class RandomizedSet {
  private readonly map = new Map<number, number>();
  private readonly arr: number[] = [];
  private arrSize = 0;

  constructor() {}

  insert(val: number): boolean {
    if (this.map.has(val)) return false;
    this.map.set(val, this.arrSize);
    this.arr[this.arrSize++] = val;
    return true;
  }

  remove(val: number): boolean {
    const idx = this.map.get(val);
    if (idx === undefined) return false;
    if (idx !== this.arrSize - 1) {
      this.arr[idx] = this.arr[this.arrSize - 1];
      this.map.set(this.arr[idx], idx);
    }
    this.arrSize--;
    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arrSize)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @leet end
