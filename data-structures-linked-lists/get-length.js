/* exported getLength */

function getLength(list) {
  let listLength = 1;
  while (list.next) {
    listLength++;
    list = list.next;
  }
  return listLength;
}
