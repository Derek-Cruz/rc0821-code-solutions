/* exported maxValue */

function maxValue(stack) {
  let maxNum = -Infinity;
  while (stack.peek() !== undefined) {
    maxNum = Math.max(maxNum, stack.pop());
  }
  return maxNum;
}
