/**
 * 2637. Promise Time Limit
 * https://leetcode.com/problems/promise-time-limit/?envType=study-plan-v2&envId=30-days-of-javascript
 * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function(fn, t) {
    
//     return async function(...args) {
//         return new Promise((res,rej)=>{
//             let timer = setTimeout(()=>rej("Time Limit Exceeded"),t)
//             fn(...args).then((result)=>{
//                 clearTimeout(timer)
//                 res(result)
//             }).catch(error=>{
//                 clearTimeout(timer)
//                 rej(error)
//             })
            
//         })
// }
// }



let fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
  }
let t = 50;
const limited = timeLimit(fn, t);
limited(5).then(console.log).catch(console.log) // "Time Limit Exceeded" at t=100ms



