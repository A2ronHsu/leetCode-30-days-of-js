/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
   return async function(...args) {
      return new Promise((res, rej)=>{
         let timer = setTimeout(()=>rej("Time Limit Exceeded"),t)

         fn(...args)
         .then(value => { 
            clearTimeout(timer);
            res(value)
         }).catch((value)=>{
            clearTimeout(timer);
            rej(value)
         })
      })
   }
};


let fn = (t) => new Promise(res => setTimeout(()=>res("finished at 100"), t));
const limited = timeLimit(fn, 1000);
limited(500).then(console.log).catch(console.log) // "Time Limit Exceeded" at t=100ms
