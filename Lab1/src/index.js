import {incVal} from "./func.js";
import {incRef} from "./func.js";
import {countTypes} from "./func.js"

let y = 12;
let x = 10;

console.log("by Value");
console.dir({y, x}); 
x = incVal(y);
console.dir({y, x});

console.log("by Reference");
const n=0;
const n1 =2;
const obj = {n, n1};
console.dir(obj);
incRef(obj);
console.dir(obj);

console.log("count Types of Array");
const Types = { number:0, string:0, boolean:0};
const Array = ["apple", 123, true, "banana", 456, false, "cherry", 789, true, "dragonfruit", 101112, false, "elderberry", 131415, true, "fig", 161718, false, "grape", 192021, true, "honeydew", 222324, false, "kiwi", 252627, true, "lemon", 282930, false];
countTypes(Array,Types);
console.dir(Types);
