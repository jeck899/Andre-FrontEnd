// ES 7

// .includes()

'Albert'.includes('ert'); //true
const pets=['cat','dog']
pets.includes('snake') //false

// exponential
4 ** 2 // print 16
2 ** 3 // print 8

// ES 8
// .padStart() & .padEnd()
'Turtle'.padStart(3)// print '   Turtle' - 3 spaces

// trailing commas - now doesn't throw an error

// Object.values & Object.entries & Object.keys(past version)
let object = {username:'jeck899',username2:'jex899'}
Object.keys(obj).forEach((key,index)=> {console.log(key,obj[key])}); // used in the past
Object.keys(obj).forEach((value)=> {console.log(value)}); // prints jeck899 & jexx899
Object.entries(obj).forEach((value)=> {console.log(value)}); // converts objects to array


// Async Await + ES 9 discussed in backend

// ES 10 

// .flat()
const array = [[1,[2,3]],[4,5]]
array.flat(1) // [1,[2,3],4,5] -- flat array by 1 level
array.flat(2) // [1,2,3,4,5] -- flat array by 2 level

//flatMap()

// .trimStart() & trimEnd() - removes blank spaces
userEmail = '             jeck899@gmail.com'
userEmail.trimStart() // 'jeck899@gmail.com'

// fromEntries - converts array to objects
userProfiles = [['commanderTom',23],['DerekZealander',40]]
Object.fromEntries(userProfiles) // {commanderTom:23,...}

// try & catch block
try {
    4+5 // runs if there are no errors
} catch {
    console.log("There's error") // runs if there are errors
}