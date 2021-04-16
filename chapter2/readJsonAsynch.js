const fs = require('fs');

let args = process.argv.slice(2);
if (args.length < 1) {
    throw ('missing file');
}

// setTimeout(() => { console.log(args[0]) }, 2000);

fs.readFile(args[0], (err, data) => {
    if (err != null) {
        console.log(typeof err);
        console.log(err);
        return null;
    } else {
        let obj = JSON.parse(data);
        console.log(obj);
        return obj;
    }
});

const fetchJson = (fileName) => {
    const promise = new Promise((resolve, reject)=>{
        let stream = fs.readFileSync(fileName);
        resolve(JSON.parse(stream));
    });
    return promise;
};

fetchJson(args[0]).then(o =>console.log(o));

