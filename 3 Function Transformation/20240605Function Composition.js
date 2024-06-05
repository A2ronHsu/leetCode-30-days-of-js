/**
2629. Function Composition
https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
 */

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if (functions.length === 0 ) return x;
        let cur = functions[functions.length-1](x);
        for (let i = functions.length-2; i > -1; i--){
            cur = functions[i](cur);
        }
        return cur;        
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4));