//CLOSURES - when a function ran it will never be executed again
// but it's child scope will be remembered in memory, in this case second() can be called
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

//Currying - a one parameter function that returns another function
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); //prints 25

//Compose -- output of one function is input of another
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
compose(sum,sum)(5); // print 7

// Deterministic Functions - a principle that says minimize side effect (changing values of outside a function using a function)
// and function ALWAYS RETURN a value not just undefined