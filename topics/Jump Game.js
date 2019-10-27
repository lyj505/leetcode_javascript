// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

/**
 * @param {number[]} nums
 * @return {boolean} 30行
 */
var canJump = function (nums) {
  let canJumpFlag = true;
  for (let step = 0; step < nums.length; step++) {
    const currentVal = nums[step];
    if (currentVal === 0) {
      if (nums[step + 1] != undefined && nums[step + 1] == 0) {
        continue;
      }
      canJumpFlag = false;
      const isLast = (step == nums.length - 1);
      let isBeforeCanJump = nums[step - 1] === undefined;
      for (let j = step - 1; j >= 0; j--) {
        if (step - j < nums[j] || (isLast && step - j == nums[j])) {
          canJumpFlag = true;
          break;
        }
      }
      if (isBeforeCanJump && isLast) {
        canJumpFlag = true;
        break;
      }
      if (!canJumpFlag) {
        canJumpFlag = false;
        break;
      }
    } else {
      step += (currentVal - 1)
    }
  }
  return canJumpFlag;
};

canJump([0]);
// Output: true
// Explanation: Jum])


//分析：

//1.首先跳过0的数字
//2.如果跳到最后一个为0,则也可以过。
//3.如果有连续0,必须跳过最后一个0。

//[0]
//[2,0,0]
//[2,1,0,0]

//46行 未优化前
var canJump = function (nums) {
  let canJumpFlag = true;
  for (let step = 0; step < nums.length; step++) {
    const currentVal = nums[step];
    if (currentVal === 0) {
      if (nums[step + 1] != undefined && nums[step + 1] == 0) {
        continue;
      }
      canJumpFlag = false;
      let innerCanJumpLoop = 0;
      const isLast = (step == nums.length - 1);
      let innerCanJump = false;
      for (let j = step - 1; j >= 0; j--) {
        innerCanJumpLoop++;
        if (isLast) {
          if (step - j <= nums[j]) {
            canJumpFlag = true;
            innerCanJump = true;
            break;
          } else {
            canJumpFlag = false;
          }
        } else {
          if (step - j < nums[j]) {
            canJumpFlag = true;
            innerCanJump = true;
            break;
          } else {
            canJumpFlag = false;
          }
        }
      }
      if (innerCanJumpLoop == 0 && step == nums.length - 1) {
        canJumpFlag = true;
        break;
      } else {
        if (!innerCanJump) {
          canJumpFlag = false;
          break;
        }
      }
    } else {
      step += (currentVal - 1)
    }
  }
  return canJumpFlag;
};