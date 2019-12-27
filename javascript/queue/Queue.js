class Queue {
  constructor() {
    this.queue = new Array();
  }

  getSize() {
    return this.queue.length;
  }

  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }

  front() {
    return this.queue[0];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    this.queue.reverse();
    let dequeuedElement = this.queue.pop();
    this.queue.reverse();
    return dequeuedElement;
  }
}

export default Queue;
