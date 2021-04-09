// declaring functions
let bluto = 'bluto was here';

let foo = () => { console.log("I am foo!")}
foo();

function bar() { console.log('I am bar!')};
bar();

const baz = function(user){ console.log(`baz for ${user}`)}
baz('frodo');

const barbill = () => {console.log(`barbill says ${bluto}`)}
barbill();
// this hides the bluto var!
const bar2 = () => {console.log(`barbill says ${this.bluto}`)}
bar2();

const add1 = (a, b) => a + b;
console.log(add1(3,7));

let p1 = {
    first: 'Billy',
    age: 13,
    sex: 'male',
    f1: () => {console.log(first + ' was bad this year!')}
};
p1.f1();