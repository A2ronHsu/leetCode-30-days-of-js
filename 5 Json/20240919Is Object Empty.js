/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
   return JSON.stringify(obj).length == 2;
};

var isEmpty2 = function(obj) {
   let i = 0;
   for ( let elem in obj){
      i++;
   }
   return i == 0;
};


const obj = new Array();
console.log( isEmpty2(obj));



