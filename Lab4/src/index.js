function sum1 (...args) {
  let value = 0;
  for (let i = 0; i < args.length; i++) {
    value += args[i];
  }
  return value;
};
function sum2 (...args) {
  let value = 0;
  for (const arg of args) value += arg;
  return value;
};
function sum3 (...args) {
  let value = 0;
  while (args.length > 0) {
    value += args.pop();
  }
  return value;
};
function sum4 (...args) {
  if (args.length === 0) return 0;
  let value = 0;
  do {
    value += args.pop();
  } while (args.length > 0);
  return value;
};
function sum5 (...args) {
  args.reduce((a, b) => (a + b), 0)
};
console.log(sum1(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 5));
console.log(sum3(1, 2, 4, 5));
console.log(sum4(1, 3, 4, 5));
console.log(sum5(2, 3, 4, 5));
function max(matrix) {
  let value = matrix[0][0];
  for (const row of matrix) {
    for (const cell of row) {
      if (cell > value) value = cell;
    }
  }
  return value;
}
console.log(
  max([
    [1, 2, 3],  
    [4, 5, 6],
    [7, 8, 9]
  ])
);
const ages = (persons) => {
  const data = {};
  for (const name in persons) {
    const person = persons[name];
    data[name] = person.died - person.born;
  }
  return data;
};
console.log(
  ages({
    Петро: { born: 1900, died: 1970 },
    Марія: { born: 1920, died: 2000 }
  })
);

