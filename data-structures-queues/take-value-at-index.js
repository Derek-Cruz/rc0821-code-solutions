/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let front = queue.dequeue();
  let cycle = index;
  if (typeof front === 'undefined') {
    return;
  }
  while (cycle > 0) {
    queue.enqueue(front);
    front = queue.dequeue();
    cycle--;
  }
  return front;
}
