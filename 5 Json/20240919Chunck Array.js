/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
   let result = [];
   for (let i = 0; i < arr.length; ){
      let temp = [];
      for (let j = 0; j < size && i < arr.length; i++, j++){
         temp.push(arr[i]);
      }
      result.push(temp);
   }
   return result;
};
