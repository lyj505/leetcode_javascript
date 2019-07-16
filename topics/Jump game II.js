// 45. Jump Game II
// Hard

// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//提供一个非负整数的数组,初始位置是数组的第一个索引。
// Each element in the array represents your maximum jump length at that position.
// 数组中的每个元素表示该位置的最大跳转长度。
// Your goal is to reach the last index in the minimum number of jumps.
//您的目标是在最少的跳跃次数中达到最后一个索引。
// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Note:

//到达最后一个索引的最小跳跃数是2。 返回次数就ok了

// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */

// 主要利用贪心算法的动态规划来解决问题


// 我们核心思想是尽可能多的跳跃到更远的地方，以来减少跳跃的次数，如果跳了一次之后还不能到，就需要多跳一次
// 首先创建三个参数counter表示跳跃的次数，curr_end表示当前起跳点的位置的下标，curr_farthest表示当前起跳点可以跳的最远位置的下标
// 然后通过curr_farthest = max(curr_farthest, i + nums[i])来更新最远位置的下标，然后等到i遍历到起跳点的时候，如果此时还不是到最后，那就用最贪心的方式，从起跳点跳最远距离curr_farthest，直到我们到达终点


const jump = function (nums) {
    var res = 0, n = nums.length, i = 0, cur = 0
    while (cur < n - 1) {
        ++res;
        console.log('-当前位置', cur);
        var pre = cur;
        for (; i <= pre; i++) {
            console.log('???i', i)
            console.log(nums[i])
            console.log('假设循环')
            cur = Math.max(cur, i + nums[i]);
        }
        if (pre === cur) {
            return -1
        }
    }
    console.log(res)
    return res
};

jump([2, 3, 0, 1, 4])

//2 + 3   1 + 3 实际上用的是 1 + 3

//2 + 1 + 1 + 4 实际上用的是 2 + 1 + 1 


{

    //for循环先失败了
    const jump = function (nums) {
        let count = 0;
        if (nums.length == 1) {
            return 0;
        }
        let cur = 0;
        for (let i = 0; i < nums.length; i++) {
            console.log('---i', i)
            count++
            let pre = cur;
            let j = i;
            for (; j <= pre; j++) {
                nums[j] && (cur = Math.max(cur, j + nums[j]));
                console.log(cur)
            }
            i += cur - 1
        }
        console.log(count)
        return count
    };

    jump([2, 3, 0, 1, 4])

}