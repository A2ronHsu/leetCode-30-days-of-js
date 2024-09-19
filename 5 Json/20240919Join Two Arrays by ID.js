/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1=[], arr2=[]) {
   let result = arr1.slice();
   return arr2.map((cur, i) =>{
      if
      for( let key in cur){
         if(result[i][key]){
            result[i][key] = cur[key];
         }else{
            result[i] = cur
         }

      }
   })
};

arr1 = [
   {"id": 1, "x": 1},
   {"id": 2, "x": 9}
], 
arr2 = [
   {"id": 3, "x": 5}
]

join(arr1, arr2);