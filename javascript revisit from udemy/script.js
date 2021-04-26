// Values and Variables
let country = 'Portugal';
 let continent = 'Europe';
 let population = 10;
 console.log(country);
 console.log(continent);
 console.log(population);


//  Data Types
 let isIsland = false;
 let language;
 console.log(typeof isIsland);
 console.log(typeof population);
 console.log(typeof country);
 console.log(typeof language);

//  let, const and var

 language = 'portuguese';
 const country1 = 'Portugal';
 const continent1 = 'Europe';
 const isIsland1 = false;




 //math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


//assingment operators
let x = 10 + 5;//15
x += 10;//x = x + 10
x++;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah);// >, <, >-, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;



//precedence of different operators

console.log(now - 1991 > now - 2018)

// console.log(25-10-5);

let x1, y1;
x1 = y1 = 25 -10 -5;//x=y=10
console.log(x1, y1);


const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah)



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn /(heightJohn * heightJohn);

// const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

