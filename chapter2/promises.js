setTimeout(() => {
  console.log('I am awake!');
}, 2000);
console.log('waiting');
console.log('waiting more...');

const fetchData = () => {
  const promise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve('32!');
    }, 1500);
  });
  return promise;
}
fetchData()
  .then(text => console.log(`promise returned ${text}`));
