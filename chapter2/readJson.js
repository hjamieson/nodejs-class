const fs = require('fs');

let rawdata = fs.readFileSync('readJson.json');
console.log(rawdata);
let student = JSON.parse(rawdata);
console.log(student);