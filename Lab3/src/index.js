function random (min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};
console.log(random(1, 10)); 

function generateKey (length, possible) {
  const base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};
console.log(generateKey(16, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));

const ipToInt = (ip = '') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};
console.log(ipToInt('116.154.58.45'));

function methods (iface) {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};
