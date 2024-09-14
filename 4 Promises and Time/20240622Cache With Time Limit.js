var TimeLimitedCache = function() {
    this.valuePair = {};
    this.timer={};
    this.size = 0;
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
   if (!this.valuePair[key]) {
      this.valuePair[key] = value;
      this.size++;
      this.timer[key] = setTimeout(()=>{
         delete this.valuePair[key];
         this.size--;
      },duration);
      return false;
   }else{
      clearTimeout(this.timer[key]);
      this.valuePair[key] = value
      this.timer[key] = setTimeout(()=>{
         delete this.valuePair[key];
         this.size--;
      },duration);
      return true;
   }

};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if( this.valuePair[key]){
      return this.valuePair[key]
    }else{
      return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */