let name = 'max';
console.log(name);
let age = 63;
let hasHobbies = true;

function summarize(userName, userAge, userHasHobbies){
  return (
    'name is ' +
    userName +
    ', age is ' +
    userAge +
    ', and the user has hobbies: ' +
    userHasHobbies
  );
}

console.log(summarize(name, age, true));

const foo = (u) => {console.log("foo called with " + u);}
foo('wank');

const bar = () => {
  console.log("this.age = " + this.age);
}
bar();