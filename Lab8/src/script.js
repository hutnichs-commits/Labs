function iterate(obj, callback) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const value = obj[key];
    callback(key, value, obj);
  }
}

function store(x) {
  return function () {
    return x;
  };
}

function contract(fn, ...types) {
  return function (...args) {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const def = types[i];
      const name = def.name.toLowerCase();
      if (typeof arg !== name) {
        throw new TypeError(`Argument type ${name} expected`);
      }
    }

    const res = fn.apply(null, args);
    const def = types[types.length - 1];
    const name = def.name.toLowerCase();

    if (typeof res !== name) {
      throw new TypeError(`Result type ${name} expected`);
    }

    return res;
  };
}
