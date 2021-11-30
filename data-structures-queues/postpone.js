/* exported postpone */

function postpone(queue) {
  const postPone = queue.dequeue();
  if (typeof postPone === 'undefined') {
    return;
  }
  queue.enqueue(postPone);
}
