const p = {
  name : 'Hugh',
  age: 35,
  fn: function() {
    console.log('hello from ' + this.name);
  },
  fn2() {
    console.log(`hi, I am ${this.name} from fn2()`);
  },
  fn3() {
    console.log(`coming up on ${this.age + 1}`);
  }
}

p.fn();
p.fn2();
p.fn3();

a = ['hugh','kay','alex'];
console.log(a);
console.log(...a);

const p1 = {...p};
p1.name = 'Frodo';
p1.fn2();