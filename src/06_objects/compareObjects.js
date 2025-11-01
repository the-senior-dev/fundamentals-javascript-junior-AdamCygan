/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */

function getType(value) {
  return Object.prototype.toString.call(value);
}

function shouldDeepCompare(type) {
  return type === '[object Object]' || type === '[object Array]';
}

function compareObjects(obj1, obj2) {
  const typeA = getType(obj1);
  const typeB = getType(obj2);

  if (typeA === typeB && shouldDeepCompare(typeA) && shouldDeepCompare(typeB)) {
    const entriesA = Object.entries(obj1);
    const entriesB = Object.entries(obj2);

    if (entriesA.length !== entriesB.length) {
      return false;
    }

    return entriesA.every(
      ([k, v]) => Object.hasOwn(obj2, k) && compareObjects(v, obj2[k])
    );
  }
  return Object.is(obj1, obj2);
}

module.exports = compareObjects;
