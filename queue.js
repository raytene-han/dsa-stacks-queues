/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.size === 0) {
      this.first = new Node(val);
      this.last = this.first;
      this.size++;
    } else {
      this.last.next = new Node(val);
      this.last = this.last.next;
      this.size++;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error('cannot dequeue from empty queue');
      return null;
    }

    if (this.size === 1) {
      let temp = this.first.val;
      this.first = null;
      this.last = null;
      this.size--;
      return temp;
    }

    let firstVal = this.first;
    this.first = firstVal.next;
    firstVal.next = null;
    this.size--;

    return firstVal.val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) return null;

    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
