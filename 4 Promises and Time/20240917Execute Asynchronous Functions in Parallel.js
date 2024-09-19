/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
   let promiseArray = [];
   for (func of functions){
      const elem = func();
      promiseArray.push(elem);
   }
   return Promise.all(promiseArray);
};

const array = [() => new Promise(resolve => setTimeout(() => resolve(4), 50)),
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))];
const promise = promiseAll(array)
console.log(promise);
promise.then(res => console.log(res)); // [42]
setTimeout(console.log, 300, promise);
