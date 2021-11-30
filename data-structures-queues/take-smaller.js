/* exported takeSmaller */

function takeSmaller(queue) {
  const front = queue.dequeue();
  const second = queue.dequeue();
  return (typeof second === 'undefined')
    ? front
    : (front < second)
        ? (queue.enqueue(second), front)
        : (front === second)
            ? (queue.enqueue(second), front)
            : (front > second)
                ? (queue.enqueue(front), second)
                : undefined;
}
