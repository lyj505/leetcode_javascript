/**
 *   title         generate-parentheses
 *   difficulty     medium
 * 
 * @param {number} n
 * @return {string[]}
 */


/** 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]
 * 
*/


//()()()  排列组合的

//((()))   包裹最深    1个单个
//(()())              2个单个
//(())()              2个单个  
//()(())              2个单个
//()()()   0包裹      3个单个

let time = 0;
var generateParenthesis = function (n) {
  let res = [], temRes = '', left = 0, right = 0, level = n;
  helper(temRes, left, right, level, res)
  return res
};

function helper(temRes, left, right, level, res) {
  ++time;
  // console.log(`第${time}次`, left, right, temRes)
  if (left > level || right > left)
    return;

  if (left === right && level * 2 === temRes.length) {
    console.log('命中', left, right, temRes, `第${time}次`);
    res.push(temRes);
    return;
  }

  helper(temRes + '(', left + 1, right, level, res);
  // console.log('指针2不变,指针1变', left, right, temRes, `第${time}次`);
  if (temRes.length == 5) {
    // console.log('---前面一次', left, right, temRes, `第${time}次`);
  }
  helper(temRes + ')', left, right + 1, level, res)
  // console.log('指针1不变,指针2变', left, right, temRes, `第${time}次`);
}
const a = generateParenthesis(3);
console.log(a);
console.log(time)

/***
*
*         
*                                                                        (
*                                  ((                                                                                          ()
*            (((                                    (()                                            ()(                                                  ())
*      *              ((()                    (()(       (())                         ()((                        ()()                                  rt 
*              *            ((())        *      (()()           (())(            *        ()(()             ()()(          ()()) rt         
*                          *      1((()))      *      2(()())          3(())()           *     4()(())    *     5()()()              
* 
* 
* 
* 
* 
*                                                         )  rertun wrong
* 
*                               )(                                   ))
*  
* 
* 
* 
* 
 *  */














// window.generateParenthesis = generateParenthesis;
//第2次 1 0 (

//第11次 2 1 ((

//第17次 2 2 (()

//第21次 2 3 (()))

//第29次 2 2 ()()

//第33次 2 3 ()())


// {
//   var generateParenthesis = function (n) {
//     let res = [], temRes = '', left = 0, right = 0, level = n;
//     helper(temRes, left, right, level, res)
//     return res
//   };

//   function helper(temRes, left, right, level, res) {
//     if (left > level || right > left)
//       return
//     if (left === right && level * 2 === temRes.length) {
//       res.push(temRes);
//       return;
//     }

//     helper(temRes + '(', left + 1, right, level, res)
//     helper(temRes + ')', left, right + 1, level, res)
//   }
// }



//()
//(()
//(((

//       ())
//        ()