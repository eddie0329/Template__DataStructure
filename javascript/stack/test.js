import Stack from "./Stack.js";

const stack = new Stack();

console.log(stack.getSize());
console.log(stack.isEmpty());

stack.push(1);
console.log(stack.getSize());
stack.push(2);
console.log(stack.top());
stack.pop();
console.log(stack.top());
console.log(stack.isEmpty());
