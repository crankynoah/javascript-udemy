'use strict';

// let hasDriversLicenes = false;
// const pastTest = true

// if (pastTest) hasDriversLicenes = true
// if (hasDriversLicenes) console.log('I can drive')

// function logger() {
//     console.log("My name is Noah");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// const fruitJuice = fruitProcessor(5, 0);
// console.log(fruitJuice);

// const pat = fruitProcessor(5, 12);
// console.log(pat);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(2021, 'tim'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applPieces = cutFruitPieces(apples);
//     const orngPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applPieces} pieces of apples and ${orngPieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(4, 5))

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1
//     }
//     // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1998, 'Noah'))

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3

// function checkWinner(avgDolph, avgKoala) {
//     if (avgDolph >= avgKoala * 2) {
//         return `Dolphins win ${avgDolph} to ${avgKoala}`;
//     } else if (avgKoala >= avgDolph * 2) {
//         return `Koalas win ${avgKoala} to ${avgDolph}`;
//     } else {
//         return `No winners today`;
//     }
// }

// const dolph = calcAverage(85, 54, 41)
// const koala = calcAverage(23, 34, 27)

// console.log(checkWinner(dolph, koala));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["harold", 'alex', 'time'];
// console.log(friends[0])
// console.log(friends[friends.length - 1])

//add elements
// const friends = ["harold", 'alex', 'time'];
// console.log(friends);
// const newlength = friends.push('Jay');
// console.log(friends);
// console.log(newlength);

// friends.unshift('terry');
// console.log(friends);

// //remover
// const popped = friends.pop();//last element
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('alex'));

// console.log(friends.includes("alex"));

// function calcTip(bill) {
//     let tip;
//     if (bill < 300 && bill > 50) {
//         tip = bill * .15;
//     } else {
//         tip = bill * .2;
//     }
//     return tip;
// }

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);

const noahArray = [
    'Noah',
    'Mickus',
    2021 - 1998,
    'dev',
    ['terry', 'jim']
];

const noah = {
    firstName: 'Noah',
    lastName: 'Mickus',
    age: 2021 - 1998,
    job: 'dev',
    friends: ['terry', 'jim']
}
console.log(noah);