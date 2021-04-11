const p = {
  name: 'hugh',
  age: '35',
  sex: 'male'
}

const f1 = (person) => {console.log(`I am ${person.name}`)};
f1(p);

const f2 = ({name}) => {console.log(`I am ${name}`)};
f2(p);
const f3 = ({name, age}) => {console.log(`I am ${name} and I am ${age}`)};
f3(p);