// function delay(ms) {
//     return new Promise( (resolve, reject) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log('runs after 3 seconds'))

console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)))

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7)