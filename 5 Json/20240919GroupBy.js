/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function(fn) {
   let result = {};
   for (let elem of this){
      const key = fn(elem);
      if(result[key]) result[key].push(elem)
      else result[key] = [elem]
      
   }
   return result;
};


console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}