/**
 * @param {Function}
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let current = cache;

    for (const arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    if (current.has("result")) {
      return current.get("result");
    }

    const result = fn.apply(this, args);
    current.set("result", result);

    return result;
  };
}
