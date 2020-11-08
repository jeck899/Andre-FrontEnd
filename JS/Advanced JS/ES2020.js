// BigInt - new type
//safe number - (9 * 10 ^ 15) or Number.MAX_SAFE_INTEGER 
//for numbers over 9 quadrillion use BigInt!!
// 1n - put n beside number

// Optional Chaining Operator -  "?"" checks if property is present 
let will = {
    pikachu:{
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning'
    }
}

let jake = {
    raichu:{
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 12,
        power: 0
    }
}

let weight = will?.pikachu?.weight
console.log(weight) // prints 6

// Nullish Operator - checks if value is null or undefined
let power = jake?.pikachu?.weight||'no power'
console.log(power) // prints 'no power'
let power = jake?.pikachu?.weight??'no power'
console.log(power) // prints 0