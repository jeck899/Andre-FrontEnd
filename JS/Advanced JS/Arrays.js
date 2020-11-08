const array = [1,2,10,16];
const doubledArray = []
// foreach - loops through an array and does the function but does not create a new array
const newArray = array.forEach((num) => {
    num * 2;
    doubledArray.push(num*2);
})
console.log(doubledArray);
// prints [2,4,20,32]

// map - loops through an array and returns a new array and saves to created variable
const mapArray = array.map((num) =>{
    return num * 2;
});
console.log(mapArray);
// prints [2,4,20,32]

// filter - loops and filters based on condition
const filterArray = array.filter((num) => {
    return num>5
});
console.log(filterArray);
//prints [10,16]

// Reduce
const reduceArray = array.reduce((accumulator,number) => {
    // accumulator - remembers previous value
    return accumulator + number;
}, 0 //default value of accumulator
);
console.log(reduceArray);
// print 29 - for every iteration the accumulator(previous loop value) adds to the number input(value in array)