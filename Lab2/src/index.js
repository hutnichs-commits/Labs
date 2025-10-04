console.log("identifiers");

const myName = "Svitlana";
const myYear = 2007;
function greet(myName) {
    console.log(`Hello, ${myName}!`);
}
greet(myName);

console.log("loops");
function range() {
    console.log("normal");
    for (let i = 15; i<=30; i++) {
        console.log(i);
    }
}
const numbers = range(15, 30);

function rangeOdd() {
    console.log("odd");
    for (let j = 15; j<=30;j+=2) {
        console.log(j);
    }
}
const numberss = rangeOdd(15, 30);

console.log("function");

function average(a, b){
    return (a+b)/2;
}
console.log(average(4,2));

function square(c){
    return (c*c);
}
console.log(square(5));

function cube(d){
    return (d*d*d)
}
console.log(cube(9));

function calculate(){
    const temp =[]; 
    for (let e=0; e<=9; e++){
        temp.push(average(square(e),cube(e)));
    }
    return temp;
}
let calcResult = [];
calcResult=calculate();
console.log(calcResult);

console.log("objects");
const fn = () => {
    const obj1 = {name: 'Marcus'};
    let obj2 = {name: 'Marcus'};

    obj1.name = 'Aurelius';
    obj2.name = 'Aurelius';


    obj2 = { name: 'Marcus Aurelius' };
};
fn ();
const createUser = (name, city) => {
    let obj3 = {name: "", city:""};
    obj3.name=name;
    obj3.city=city;
    return obj3;
};
console.log(createUser("Svitlana", "Kyiv"))

console.log("collection");
const phonebook = [
    {name: "Euler", phone: "+380442027594"},
    {name: "Faraday", phone: "+380442027533"},
    {name: "Hertz", phone: "+380442027523"}
];
const findUserByPhone = (name) => {
    for (const obj of phonebook){
        if (obj.name===name) return obj.phone;
    }
};
console.log(findUserByPhone('Euler'));
console.log(findUserByPhone('Faraday'));
console.log(findUserByPhone('Hertz'));
const hash = {
    Euler: '+380442027594,',
    Faraday: '380442027533,',
    Hertz: '380442027523,'
};
function findUserByPhone1(name) {
    return hash[name];
};
console.log(findUserByPhone("Euler"));
console.log(findUserByPhone("Faraday"));
console.log(findUserByPhone("Hertz"));
