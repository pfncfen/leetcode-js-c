/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zeroCount = 0, length = nums.length;
   for(var i = 0; i < length; i++) {
      if(nums[i] === 0) {
        nums.splice(i, 1)
        i--
        zeroCount++
        debugger
      }
   }
   for(var j = 0; j < zeroCount; j++) {
     nums.push(0)
   }
};
