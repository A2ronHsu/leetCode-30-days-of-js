var TimeLimitedCache = function() {
   this.valuePair = {}
   this.size = 0
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
   if(this.valuePair[key]){
      return true
   }else{
      this.valuePair[key] = value;
      this.size++;
      setTimeout(()=>{
         delete this.valuePair[key];
         this.size--;
      },duration)
   }
   return false;
   
   
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
   const value = this.valuePair[key];
   return value ? value : -1;
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
   return this.size;
   
};


const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 0)); // false
setTimeout(()=>{
   console.log(timeLimitedCache.get(1)) // 42
   console.log(timeLimitedCache.count()) // 1
}, 0);



