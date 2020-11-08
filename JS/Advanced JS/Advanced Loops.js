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