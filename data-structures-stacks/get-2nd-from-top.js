/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const top = stack.pop();
  const second = stack.peek();

  if (top === undefined) {
    return;
  }
  stack.push(top);
  return second;
}
