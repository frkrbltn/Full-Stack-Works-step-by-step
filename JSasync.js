console.clear()

// find . -name 'Icon?' -type f -delete

// function fetchSync (URL) {
//     let result;
//     console.log('1. Open Connection to ', URL);
//     console.log('2. send request');
//     console.log('3. Receive and parse response');
//     result = {body: "it works", status: 200}
//     return result;
// }

// console.log('Work before request');
// console.log('Response', fetchSync('https://ncsu.edu'));
// console.log('Work after request');

// Now use setTimeout

function fetchAsync (URL) {
    let result;

    setTimeout(() => {
        console.log('1. Open Connection to ', URL);
        console.log('2. send request');
        console.log('3. Receive and parse response');
        result = {body: "it works", status: 200}
    }, 500)

    return result
}

console.log('Work before request');
console.log('Response', fetchAsync('https://ncsu.edu'));
console.log('Work after request');



