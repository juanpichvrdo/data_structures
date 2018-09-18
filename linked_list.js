class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return val;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.prev = null;
    } else {
      this.tail = null;
    }
    return val;
  }
}

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
