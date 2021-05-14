const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    });
    return promise;
}

setTimeout(() => {
    console.log('time expired');
    fetchData()
        .then(text => {
            console.log(text);
        })
        .then(()=>{
            console.log('Are we there yet?');
        });
}, 2000);