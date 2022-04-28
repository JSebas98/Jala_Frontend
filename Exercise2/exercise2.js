// 1
// Expected: 2
// Result: 2
console.log('---1---');
console.log(null || 2 || undefined);

// 2
// Expected: 2
// Result: 1
// Result2: 2
console.log('---2---');
console.log(console.log(1) || 2 || console.log(3));

// 3
// Expected: 1 2
// Result: 1 undefined
console.log('---3---');
console.log(console.log(1) && console.log(2));

// 4
// Expected: 2 undefined
// Result: 3
console.log('---4---');
console.log(null || 2 && 3 || 4);

// 5
console.log('---5---');
let userAge = 90;
console.log(userAge >= 14 && userAge <= 90 ? "Valid age." : "Invalid age");

// 6
// Expected: null
// Result: null
// Result2: 2
console.log('---6---');
console.log(console.log(null) ?? null ?? 2 ?? console.log(3))

// 7
// Expected: A and C will execute
// Result: A and C executed
console.log('---7---');
// A
if (-1 || 0) {console.log('first')};
// B
if (-1 && 0) {console.log('second')};
// C
if (null || -1 && 1) {console.log('third')};

// 8
// Expected: Anonymous
// Result: Anonymous
console.log('---8---');
let user;
console.log(user ?? "Anonymous")

// 9
// Expected: Supercoder
// Result:
console.log('---9---');
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// 10
// Expected: Greetings!
// Result: Greetings!
console.log('---10---');
let age = 18;

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

console.log(message);
// 11
// Expected:
    // true
    // true
    // false
    // true
    // false
    // false
    // false
// Result:
    // true
    // false
    // true
    // true
    // false
    // false
    // false
console.log('---11---');
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");