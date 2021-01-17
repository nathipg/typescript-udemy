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
console.log(mergedObj.name);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if(element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}

console.log(countAndPrint('Hello'));
console.log(countAndPrint(['Sports', 'Foods']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({name: 'Max'}, 'name');