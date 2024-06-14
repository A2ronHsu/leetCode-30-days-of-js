/**
 * 2723. Add Two Promises
 * https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return promise1
        .then( x => promise2
            .then( y => x + y))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

//uma forma mais bonita 
async function addTwoPromises(promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
  }
  