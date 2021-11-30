/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (typeof first === 'undefined') {
    return;
  } else if (typeof second === 'undefined') {
    return first;
  }
  queue.enqueue(first);
  return second;
}
