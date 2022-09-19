/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  /** unshift(val): add new value to start of list. */

  /* 1. if the list is empty, we add the value to the head and the tail, increment the length
  2. if list is not empty, then we take the current head and set that equal to the new node's next
  3. set head to that new node and increment the length
  */
  unshift(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    } else {
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      this.length++;
    }
  }

  /** pop(): return & remove last item. */
  /* 1. walk to end of the list because we can't go backwards and get the penultimate node
  2. as we walk, check current.next.next === null, this. tail = current, this.tail.next = null

  5 -> 10 -> null
  5 -> null
  null

   */

  pop() {
    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length --;
      return current.val;
    } else if (current === null) {
      throw new Error('cannot pop from empty list');
      return undefined;
    }

    while (current.next !== null) {
      if (current.next.next === null) {
        let removed = this.tail.val;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return removed;
      }
      current = current.next;
    }

  }

  /** shift(): return & remove first item. */

  shift() {

    if (this.length === 0) {
      throw new Error('cannot shift from empty list');
      return null;
    }
    if (this.length === 1) this.tail = null;
    let firstVal = this.head;
    this.head = firstVal.next;
    firstVal.next = null;
    this.length--;

    return firstVal.val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error('item at index does not exist');
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i <= idx; i++){
        if ( i === idx) return current.val;
        current = current.next;
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx >= this.length || idx < 0) {
      throw new Error('item at index does not exist');
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i <= idx; i++){
        if ( i === idx) current.val = val;
        current = current.next;
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */
  //
  //

  insertAt(idx, val) {

    if (idx > this.length || idx < 0) {
      throw new Error('item at index does not exist');
      return undefined;
    }

    if ( this.length === 0){
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
      return undefined;
    }

    if (idx === this.length){
      this.push(val);
      return undefined;
    }

    if ( idx === 0){
      let temp = this.head;
      this.head = new Node(val);
      this.head.next = temp;
      this.length++;
      return undefined;
    }


    let current = this.head;

    for (let i = 0; i <= idx; i++){
        if ( (i + 1) === idx) {
          let temp = current.next;
          current.next = new Node(val);
          current.next.next = temp;
          this.length++;
        }
        current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error('item at index does not exist');
      return undefined;
    }

    let current = this.head;

    if (idx === this.length){
      return this.pop();
    }

    if (idx === 0){
      return this.shift();

    }

    for (let i = 0; i <= idx; i++){
        if ( (i + 1) === idx) {

        let temp = current.next.val;
        current.next = current.next.next;
        this.length--;

        return temp;
      }
      current = current.next;
    }

  }

  /** average(): return an average of all values in the list */

  average() {

    let sum = 0;
    let current = this.head;

    if (this.length === 0 ) return 0;

    while (current !== null){
      sum += current.val;
      current = current.next;
    }
  return sum / this.length;
  }
}

module.exports = LinkedList;

// let current = this.head;
// console.log('current', current);

// while (current !== null) {
//   console.log("entered loop", val, current);
//   if (current.next === null) {
//       current.next = new Node(val);
//       this.tail = current.next;
//       this.length++;
//       current = current.next;
//   }
// }

// if (this.length === 0) {
//     this.head = new Node(val);
//     this.tail = this.head;
//     this.length++;
//     current = this.tail;
//   }