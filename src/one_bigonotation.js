/*===============================================================================
Resources:
    1.Concept Big O notation Slide link   -- https://cs.slides.com/colt_steele/big-o-notation
    2. Performnce Tracker - https://rithmschool.github.io/function-timer-demo/
Notes:
    1. time can't give you about algorithm performance (need to consider input value range, how much memory it uses, trade offs etc)
    2. number of operation gives fair idea about performance
    3. Big O Definition
        We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a 
        constant times f(n), as n increases
    4. Rules
    Time Complexity - number of operation
        O(n) + O(n) = O(n) , we have to see big picture 2 times infinity is infinity, n is always a big big number
        O(n) operation inside O(n) = O(n*n), nested loop
        constant dont matter 
            O(2n) = O(n)
            O(500) = O(1) which means constant run time, no matter what the n is, number of operations are constant
        smaller terms dont matter, always think n as huge
            O(n*n + 5n + 8) = O(n*n)
        Arithmetic operations are constant
        Variable assignment is constant
        Accessing elements in an array (by index) or object (by key) is constant
        In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
    
    Space Complexity -- auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
        Most primitives (booleans, numbers, undefined, null) are constant space
        Strings require O(n) space (where n is the string length)
        Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

    Logs
        log 2 (8) = 3 , 2 raise to power 3 = 8



===============================================================================*/
/* The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
  With strict mode, you can not, for example, use undeclared variables. */
'use strict';
/* 
  This is simple counter function which adds up to n number and gives us total 1+2+3 etc.
  we are comparing time to get some idea
*/
function addUpTov1(n) {
    let total = 0; // 1 assignment
    for (let i = 1; i <= n; i++) { // n addition, n assignment , n comparision, 1 assignment
      total += i; // n additions, n assignments
    } //total operation 5n +2 , big picture O(n)
    return total;
}

function addUpTov2(n) {
    let total = 0;
    return n*(n+1)/2  // 1 multi, 1 add, one divide operation, makes it total 3 operations, O(1) which is always constant, 3 operations thats it
}
  
//var t1 = performance.now();
var t1v1 = new Date().getTime(); // this returns number of milliseconds
addUpTov1(1000000000);
//var t2 = performance.now();
var t2v1 = new Date().getTime();
console.log(`Time Elapsed: ${(t2v1 - t1v1) / 1000} seconds.`)


//var t1 = performance.now();
var t1v2 = new Date().getTime(); // this returns number of milliseconds
addUpTov2(1000000000);
//var t2 = performance.now();
var t2v2 = new Date().getTime();
console.log(`Time Elapsed: ${(t2v2 - t1v2) / 1000} seconds.`)


