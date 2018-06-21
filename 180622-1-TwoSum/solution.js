/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var length = nums.length, minus, minusPos;
    for(var i = 0; i < length; i++) {
      minus = target - nums[i]
      let minusPos = nums.slice(i + 1).indexOf(minus)
      if( minusPos !== -1) {
        return [i, minusPos + i + 1]
      }
    }
};

//4次通过
