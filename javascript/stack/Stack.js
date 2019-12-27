class Stack {
  constructor() {
    this.stack = new Array();
  }

  getSize() {
    return this.stack.length;
  }

  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.stack[this.getSize() - 1];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }
}

export default Stack;
