/*
    2665. Counter II
    https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    return {
        increment: () => ++counter,
        decrement: () => --counter,
        reset: () => counter = init
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());