const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
        if(false) {
            reject('Reject');
        }
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max'}, {age: 30});
mergedObj.name;