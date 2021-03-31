// program to display text 10 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}

// program to display numbers from 1 to 5
const n1 = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n1; i++) {
    console.log(i);     // printing the value of i
}

// Iteration	Variable	Condition: i <= n	Action
// 1st	i = 1

// 					n = 5	true	1 is printed.

// 					i is increased to 2.
// 2nd	i = 2

// 					n = 5	true	2 is printed.

// 					i is increased to 3.
// 3rd	i = 3

// 					n = 5	true	3 is printed.

// 					i is increased to 4.
// 4th	i = 4

// 					n = 5	true	4 is printed.

// 					i is increased to 5.
// 5th	i = 5

// 					n = 5	true	5 is printed.

// 					i is increased to 6.
// 6th	i = 6

// 					n = 5	false	The loop is terminated.

// program to display the sum of natural numbers
let sum = 0;
const n2 = 100

for (let i = 1; i <= n2; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

//same program to display  the sum of natural numbers in other format 
let sum4 = 0;
const n4 = 100;

for(let i = n4; i >= 1; i-- ) {
 
    sum4 += i; 
}

console.log('sum4:',sum4);


// program to display numbers from 1 to 5
// initialize the variable
let a1 = 2, z1 = 5;

while (a1 <= z1) {
    console.log(a1);
    a1 += 1;
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum34 = 0;

let number34 = parseInt(prompt('Enter a number: '));

while(number34 >= 0) {

    sum34 += number34;

   
    number34 = parseInt(prompt('Enter a number: '));
}

console.log(`The sum is ${sum34}.`);

// program to display numbers
let i = 5;
const v = 5;

// do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= v);


let sumx = 0;
let numberx = 0;

do {
    sumx += numberx;
    numberx = parseInt(prompt('Enter a number: '));
} while(numberx >= 0)

console.log(`The sum is ${sumx}.`);

// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// program to find the sum of positive numbers

// let sumz = 0, numberz;

// while(true) {

//     // take input again if the number is positive
//     numberz = parseInt(prompt('Enter a number: '));

//     // break condition
//     if(numberz < 0) {
//         break;
//     }

//     // add all positive numbers
//     sumz += numberz;

// }

// // display the sum
// console.log(`The sum is ${sumz}.`);


// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}


// let sum9 = 0;
// let number9 = 0;

// while (number9 >= 0) {

//     // add all positive numbers
//     sum9 += number9;

//     // take input from the user
//     number9 = parseInt(prompt('Enter a number: '));

//     // continue condition
//     if (isNaN(number9)) {
//         console.log('You entered a string.');
//         number9 = 0; // the value of number is made 0 again
//         continue;
//     }

// }

// // display the sum
// console.log(`The sum is ${sum9}.`);



// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}