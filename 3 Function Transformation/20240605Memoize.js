/**
 * 2623. Memoize
 * https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {

    let memo=[];
    let result=[];

    return function(...args) {
        let cur = `${args}`;

        if (memo.includes(cur)){
            return result[memo.indexOf(cur)]
        }else{
            memo.push(cur);
            result.push(fn(...args))

            return result[memo.indexOf(cur)]
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

 let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
  callCount += 1;
   return a + b;
 })
 memoizedFn(2, 3) // 5
 console.log(memoizedFn(2, 3)) // 5
 console.log(memoizedFn(2, 2)) // 5
 console.log(memoizedFn(2, 1)) // 5
 console.log(callCount) // 1 