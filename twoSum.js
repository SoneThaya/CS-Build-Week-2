/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (var x = 0; x < nums.length; x++){
      var find = target - nums[x];
      if((nums.indexOf(find) in nums ) && (nums.indexOf(find) !== x)){
          return [x, nums.indexOf(find)];
      }
  }
};