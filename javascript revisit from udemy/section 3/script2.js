///////////////////////////////////////
// Coding Challenge #2

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
// 4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
// TEST DATA: 125, 555 and 44
// HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas67 = {
  firstName: 'Jonas67',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas67);
console.log(jonas67.lastName);
console.log(jonas67['lastName']);
const nameKey = 'Name';
console.log(jonas67['first' + nameKey]);
console.log(jonas67['last' + nameKey]);
// console.log(jonas67.'last' + nameKey)
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
if (jonas67[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
jonas67.location = 'Portugal';
jonas67['twitter'] = '@jonasschmedtman';
console.log(jonas67);
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas67.firstName} has ${jonas67.friends.length} friends, and his best friend is called ${jonas67.friends[0]}`);
///////////////////////////////////////
// Object Methods
const jonas68 = {
  firstName: 'Jonas68',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};
console.log(jonas68.calcAge());
console.log(jonas68.age);
console.log(jonas68.age);
console.log(jonas68.age);
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas68.getSummary());

///////////////////////////////////////
// Coding Challenge #3

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// GOOD LUCK 

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
///////////////////////////////////////
// Iteration: The for Loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas23 = [
  'Jonas23',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];
// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist
for (let i = 0; i < jonas23.length; i++) {
  // Reading from jonas array
  console.log(jonas23[i], typeof jonas[i]);
  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas23[i]);
}
console.log(types);
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas23[i] !== 'string') continue;
  console.log(jonas23[i], typeof jonas23[i]);
}
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas23.length; i++) {
  if (typeof jonas23[i] === 'number') break;
  console.log(jonas23[i], typeof jonas23[i]);
}
///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas45 = [
  'Jonas45',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas45.length - 1; i >= 0; i--) {
  console.log(i, jonas45[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}


///////////////////////////////////////
// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 
// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array
// GOOD LUCK 

const calcTipr = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const billsr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsr = [];
const totalsr = [];
for (let i = 0; i < bills.length; i++) {
  const tip = calcTipr(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(billsr, tips, totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
