// @leet start
class MyQueue {
  private readonly incoming: number[] = [];
  private readonly outgoing: number[] = [];

  constructor() {}

  push(x: number): void {
    this.incoming.push(x);
  }

  pop(): number {
    if (this.outgoing.length) return this.outgoing.pop()!;
    while (this.incoming.length) {
      this.outgoing.push(this.incoming.pop()!);
    }
    return this.outgoing.pop()!;
  }

  peek(): number {
    if (this.outgoing.length) return this.outgoing[this.outgoing.length - 1]!;
    while (this.incoming.length) {
      this.outgoing.push(this.incoming.pop()!);
    }
    return this.outgoing[this.outgoing.length - 1];
  }

  empty(): boolean {
    return !this.incoming.length && !this.outgoing.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @leet end
