var todos = ["clean","study","exercise","eat","brush"];

// FOR LOOP
for (var i=0;i<todos.length;i++){
    console.log(todos[i]);
};
// for (start var;end;iterator){expression}

// WHILE LOOP - condition first before do
var counterOne = todos.length
while (counterOne >= 0){
    console.log(todos[counterOne]);
    counterOne--;
};

// DO LOOP - do first before condition
var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0)

// FOR EACH foreach(function(parameter,index))
todos.forEach(function(i,index){
    console.log(index + ":" + i + "!")
});


// Ternary Operator
// condition ? exp1 : exp2

var answer = isUserValid(true) ? "You may enter" : "Access denied";

function isUserValid(bool) {
    return bool;
}

// switch
var day = 1
var dayname
switch (day) {
    case 1:
        dayName = "Monday";
        break;
        case 2:
            dayName = "Tuesday";
            break;
            case 3:
                dayName = "Wednesday";
                break;
                case 4:
                    dayName = "Thursday";
                    break;
                    case 5:
                        dayName = "Friday";
                        break;
                        case 6:
                            dayName = "Saturday";
                            break;
                            case 7:
                                dayName = "Sunday";
                                break;
}

// Object.values & Object.entries & Object.keys(past version)
let object = {username:'jeck899',username2:'jex899'}
Object.keys(obj).forEach((key,index)=> {console.log(key,obj[key])}); // used in the past
Object.keys(obj).forEach((value)=> {console.log(value)}); // prints jeck899 & jexx899
Object.entries(obj).forEach((value)=> {console.log(value)}); // converts objects to array


const basket = ['apples','oranges','grapes']
const detailedBasket = { 
    'apples' : 5,
    'oranges' : 20,
    'grapes' : 1000
}

// for of -- arrays & strings
// iteration
for (item of basket) {
    console.log(item);
}

// for in -  objects
// enumeration
for (item in detailedBasket){
   // console.log(item) // prints apples oranges grapes
    console.log(`Buy ${item} with quantity of ${detailedBasket[item]}`)
}