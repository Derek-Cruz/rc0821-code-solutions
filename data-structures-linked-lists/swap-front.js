/* exported swapFront */

function swapFront(list) {
  const swap = list.next;
  if (list.next === null) {
    return list;
  }
  list.next = swap.next;
  swap.next = list;
  return swap;
}
