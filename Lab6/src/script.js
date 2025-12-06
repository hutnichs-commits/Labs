function pipe() {
  const fns = Array.from(arguments);

  if (!fns.every(function (fn) { return typeof fn === 'function'; })) {
    throw new TypeError('Всі аргументи повинні бути функціями');
  }

  return function (x) {
    return fns.reduce(function (v, fn) {
      return fn(v);
    }, x);
  };
}

function compose() {
  const fns = Array.from(arguments);
  const handlers = [];

  function composed(x) {
    if (fns.length === 0) return x;

    const last = fns.length - 1;
    let res = x;

    try {
      for (let i = last; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  }

  composed.on = function (name, handler) {
    if (name === 'error') {
      handlers.push(handler);
    }
  };

  return composed;
}

function inc(x) {
  return x + 1;
}

function twice(x) {
  return x * 2;
}

function cube(x) {
  return x * x * x;
}

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, 7, cube)(5)); 
