const seq = (f) => (g) =>
  (typeof g === 'number'
    ? f(g)
    : seq((x) => f(g(x))));

const double = x => x * 2;
const add5 = x => x + 5;
const pipeline = seq(double)(add5);
console.log(pipeline(3)); 



const array = () => {
  const data = [];
  return {
    get: (i) => data[i],  
    push: (x) => data.push(x), 
    pop: () => data.pop(),   
  };
};
const arr = array();
arr.push(10);
arr.push(20);
console.log(arr.get(0)); 
console.log(arr.get(1)); 
arr.pop();
console.log(arr.get(1)); 
