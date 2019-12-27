import Queue from "./Queue.js";

const queue = new Queue();

console.log(queue.getSize());
console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.front());

console.log(queue.dequeue());
console.log(queue.front());
