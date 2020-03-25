// Create a new variable/constant called mystring and assign a value to it 

console.log('Between two comments');

/*

I can write an entire story in here if i
wanted to

*/

// String practice
const mystring = 'hello';

const doublequote = "hahahaha";

const ownership = "Brian's computer";

// String template literals
const mytemplate = `hello
this is a multi-line string
and Javascript doesn't care.
And oh by the way, you could use "double" quotes.`;

const templating = `We should be very careful with ${ownership}.`;
const normy = "We should be very careful with " + ownership + ".";

console.log(mystring);
console.log(doublequote);
console.log(ownership);
console.log(mytemplate);
console.log(templating);
console.log(normy);

// numbers
const myAge = 39;
const otherAge = (30 + 9);

// arrays
const array1 = [1, 2, 3];
const array2 = [myAge, otherAge, normy];
const array3 = ['string1', 'string2', '3'];
const multidimensionalarray = [
    [1, 2, 3], array2, [
        [1, 2],
        [2, 3]
    ]
];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(multidimensionalarray);


// objects
const myObject = {
    name: "Brian",
    age: 39,
    favoriteColor: "blue"
};
// log entire object
console.log(myObject);
// log specific keys using dot notation
console.log(myObject.age);
console.log(myObject.favoriteColor);

// log specific keys another way
console.log(myObject['age']);

// example of why you would NOT use dot notation
const myKeys = Object.keys(myObject);
for (let i = 0; i < myKeys.length; i++) {
    console.log(myObject[myKeys[i]]);
}

// variables
var flavor;
flavor = `chocolate`;
console.log(`flavor: ${flavor}`);
var money;
money = 33;
console.log(`money: ${money}`);

let movie = `Liar Liar`;
console.log(`movie: ${movie}`);

// constants
const pen = 'blue';
console.log(`pen: ${pen}`);


// breakthrough
let person = `brian`;
let otherperson = person;
person = "dave";


console.log(`person: ${person}`);
console.log(`otherperson: ${otherperson}`);


const dog = {
    breed: "collie"
}
dog.fleas = true;

console.log(`dog: `, dog);

let brian = {
    name: `Brian`,
    age: 39,
    job: `Software Developer`
};

brian.eyes = `blue`;

brian.name = `Dave`;

const dave = brian;
dave.eyes = 'green';

const pers1 = brian;
const pers2 = brian;
const pers3 = dave;

pers3.pet = 'goldfish';

const dad = brian;

const idiot = brian;

console.log(`brian: `, brian);
console.log(`dave: `, dave);
console.log('pers3: ', pers3);