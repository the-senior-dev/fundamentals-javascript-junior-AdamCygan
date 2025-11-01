/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
  const tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    tempArr.push(arr[i]);
  }

  return tempArr;
}

module.exports = reverseArray;
