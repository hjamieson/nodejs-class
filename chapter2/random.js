const crypto = require('crypto');

let r1 = crypto.randomInt(100);
console.log(r1);

const person = {
  name: 'Hugh',
  age: crypto.randomInt(100),
  foo: () => {return 'hello' + crypto.randomInt(100)}
}
console.log(person);
console.log(person.foo());

let sports = ['football','soccer','hockey','tennis','basketball'];
console.log(sports.length + '|' + sports[2]);
for (let s of sports){
  console.log(s);
}
console.log(sports.map(s => s.length));
console.log(sports.includes('futbol'));

const dog = {
  name: 'fido',
  breed: 'rotweiller',
  age: 7,
  color: 'black',
  disposition: 'gentle'
}
let {name, disposition} = dog;
console.log(name, disposition);