

///STRINGS 

const firstName2 = 'Jonas';
const job = 'teacher';
const birthYear =1991;
const year = 2037;

const jonas = "I'm " + firstName2 +',a' + (year - birthYear) +'years old' + job + '!';
console.log(jonas);

const jonasNew = `Im ${firstName2}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);


console.log('just a regular string.....');

console.log('string with \n\
multiple \n\
lines');


///if else 

const age =19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license');
}else {
    const yearsleft = 18 - age;
    console.log(`sarah is too young. wait another ${yearsLeft} years:)`);
}


const birthYear1 = 2012;

let century;
if(birthYear1 <= 2000) {
    century = 20;
}else {
    century = 21;
}
console.log(century);


//type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);

// console.log(String(23), 23);


//type coercion
console.log('i am' + 23 + ' years old');
console.log('23' - '10' - 3); //10
console.log('23' + '10' + 3);// 23103
console.log('23' / '2'); //11.5
console.log('23' * '2'); //46
console.log('23' > '2'); // true


let n = '1' + 1;
n = n - 1;
console.log(n);

//2+3+4+'5'---- 2345

//truthy values


console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean('Jonas'));

console.log(Boolean({}));


const money = 0;
if(money) {
    console.log("DONT SPEND IT ALL");
}else {
    console.log('you should get a job');
}

///equality operators 


const age1 = '18';
if (age1 === 18) console.log('you just became an  adult :D (strict)');

if (age1 == 18) console.log('you just became an adult: D (loose)');


//Boolean logic
//   a
//  and true false
// b true true false
//  false false false

//  a
//  or true false
// b true true true
//  false true false
//logical operators

const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasGoodVision && hasDriversLicense);
console.log(hasDriversLicense || hasGoodVision);




const day = 'monday';


switch(day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    default:
        console.log('not a valid day');
}


const age2 = 15;

const drink = age2 >= 18 ? 'wine' : 'water';
console.log(drink)


let drink2;
if  (age >= 18) {
    drink2 = 'wine';
}else {
    drink2 = 'water';
}
console.log(drink2);
console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);