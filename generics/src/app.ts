const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});