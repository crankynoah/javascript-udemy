// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);
// let firstName = "Matilda";
// let PI = 3.1415;

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// //front but

// console.log(country);
// console.log(continet);
// console.log(population);
// console.log(true);
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 432);
// console.log(typeof "helo");

// javascriptIsFun = "Yes";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year = 1998;
// console.log(typeof year);
// console.log(typeof null);

// let age = 30;

// age = 31;

// const birthYear = 1991
// var job = "programmer";
// job = "Teacher";

// lastName = "mickuse";
// console.log(lastName);

// let country = "USA";
// let continet = "North America";
// let population = 331;
// let isIsland = false;
// let language;
// console.log(typeof country);
// console.log(typeof continet);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);


// const markHeight = 188;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = (markBMI > johnBMI);
// console.log(markHigherBMI)

// const firstName = 'Noah';
// const job = 'web dev';
// const birthYear = 1998;
// const year = 2021;

// const noah = "I'm " + firstName + ', a ' + (year - birthYear) + ' old ' + job;

// console.log(noah);

// const noahNew = `I'm ${firstName}, a ${year - birthYear} old ${job}`;
// console.log(noahNew);

// const age = 15;
// const isOldEnough = age >= 18
// if (isOldEnough) {
//     console.log(`Jimbob can drive now 🚓`)
// } else {
//     console.log(`jimbob won't be driving soon`)
// }

// const markHeight = 188;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;
// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = (markBMI > johnBMI);
// if (markHigherBMI) {
//     console.log(`Mark's BMI, ${markBMI}, is higher than John's BMI ${johnBMI}`);
// } else {
//     console.log(`John's BMI, ${johnBMI}, is higher than Mark's BMI ${markBMI}`);
// }

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);
// console.log(Number('Harold'))
// console.log(String(32));

// //type coersion
// console.log('I am ' + 23 + 'years old');

// console.log(Boolean(0))

// prompt("what's your favorite number")

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);

// const dolphAvergae = (96 + 108 + 89) / 3;
// const koalaAverage = (88 + 91 + 110) / 3;

// console.log(dolphAvergae, koalaAverage);

// if (dolphAvergae > koalaAverage) {
//     console.log('The Dolphins are the winners');
// } else if (koalaAverage > dolphAvergae) {
//     console.log('The Koalas are the winners');
// } else {
//     console.log("It's a Draw");
// }

// const dolphAvergae = (97 + 112 + 101) / 3;
// const koalaAverage = (109 + 95 + 123) / 3;

// console.log(dolphAvergae, koalaAverage);

// if (dolphAvergae > koalaAverage && dolphAvergae > 100) {
//     console.log('The Dolphins are the winners');
// } else if (koalaAverage > dolphAvergae && koalaAverage > 100) {
//     console.log('The Koalas are the winners');
// } else if (dolphAvergae === koalaAverage && koalaAverage > 100) {
//     console.log("It's a Draw");
// }
// else {
//     console.log("No one wins");
// }

// const day = monday

// switch (day) {
//     case 'monday':
//         console.log('plan cousre structure');
//         console.log('go to boot camp')
//         break;
//     case 'tuesday':
//         console.log("prepare theory vids");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('record videos')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("enjoy the weekend");
//         break;

// }

const bill = 430;

const percent = bill > 50 && bill < 300 ? 0.15 : 0.2;

const tip = bill * percent;

console.log(`The tip is ${tip}`);
