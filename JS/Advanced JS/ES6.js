// let vs const
// unlike var let follows scope dynamics
// const - makes the variable immutable, object properties of const can be changed
const player = 'jake';
let experience = 100;
let wizardlevel = false; 

if (experience>90){
    let  wizardlevel = true;
    console.log(wizardlevel) // prints true
}
console.log(wizardlevel) //prints false

// vs using var 
var experience = 100;
var wizardlevel = false; 
if (experience>90){
    var wizardlevel = true;
    console.log(wizardlevel) // prints true
}
console.log(wizardlevel) //prints true

const obj = {
    player: 'jake',
    experience: 100,
    wizardlevel: false 
    }

// Destructuring
const {player,experience} = obj;
let wizardlevel = obj;

// Dynamic Object properties
const name = 'Jon Snow';
const obj2 = {
    [name]: 'hello',
    [1+2]: 'hi!'
}

// String Templates
`Hello! my name is ${name} and i am ${age} years old I have a ${pet}.`

// Default Arguments
function greet(name = 'Jon Doe',age=10,pet='dog'){
    return `Hello! my name is ${name} and i am ${age} years old I have a ${pet}.`
}

// Arrow FUNCTIONS
(a,b) => a+b;
// (parameters) => return expressions; 


console.log("a")
