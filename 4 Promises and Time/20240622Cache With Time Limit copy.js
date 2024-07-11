//https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
/**
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
 */

var TimeLimitedCache = function() {
    this.cache = {};
    this.lenght = 0;
    this.timer= {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   
   if(this.cache[key]){
      clearTimeout(this.timer[key]);

      this.cache[key] = value;
  
      this.timer[key] = setTimeout(()=>{
        this.cache[key] = -1;
        this.lenght--;
     }, duration);
      return true
   }else{
      this.cache[key] = value;
      this.lenght++;
  
      this.timer[key] = setTimeout(()=>{
        this.cache[key] = -1;
        this.lenght--;
     }, duration);
      return false
   }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
   const value = this.cache[key];
   if (!value) return -1
   else return value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.lenght;
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 500)); // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
setTimeout(() => {
   console.log(timeLimitedCache.get(1))
}, 200);
