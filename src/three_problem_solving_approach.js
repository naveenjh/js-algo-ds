/*===============================================================================
Resources:
    1.Concept Array and Objects link   -- https://cs.slides.com/colt_steele/problem-solving-patterns#/
    2. Performnce Tracker - https://rithmschool.github.io/function-timer-demo/
    algorithm == A process or set of steps to accomplish a certain task.
Notes:
    steps
    UNDERSTAND THE PROBLEM
        Can I restate the problem in my own words?
        What are the inputs that go into the problem?
        What are the outputs that should come from the solution to the problem?
        Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
        How should I label the important pieces of data that are a part of the problem?
    Concrete Examples
        EXPLORE EXAMPLES
            Start with Simple Examples
            Progress to More Complex Examples
            Explore Examples with Empty Inputs
            Explore Examples with Invalid Inputs

    Break Down
        write all the steps as comments

    Solve / Simplify


   




===============================================================================*/
/* The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
  With strict mode, you can not, for example, use undeclared variables. */

  /* Write a function which takes in a string and returns counts of each character in the string. */
'use strict';
console.log(charCount("aaa  my name")); // should return {a:4}

/* function charCount(str) {
    // make object
    var result = {};
    // loop each char in string
    for (var i=0; i<=str.length; i++)   {
        var char = str[i]; // char is key and we are trying to update its value
        console.log(result);
        if(/[a-z0-9]/.test(char))    {
            if(result[char]>0) { // checking if result already has char
                // if char is letter/number and is key in object . add  1 to count
                result[char]++; // this updates result object with key:count
            } else {
                result[char] =1;
                // if char is letter/number and is key not in object . add  it to object and set count as 1
            }
        }  
    }    
    // if char is something else .,space etc dont do anything
    //return object at end
    return result; 

}*/


//Refactored

function charCount(str) {
    // make object
    var result = {};
    // loop each char in string
    for (var char of str)   {
          // char is key and we are trying to update its value
        console.log(result);
        if(/[a-z0-9]/.test(char))    {
            result[char] = ++result[char] || 1; // same as if result[char] is true
            /* if(result[char]>0) { // checking if result already has char
                // if char is letter/number and is key in object . add  1 to count
                result[char]++; // this updates result object with key:count
            } else {
                result[char] =1;
                // if char is letter/number and is key not in object . add  it to object and set count as 1
            } */
        }  
    }    
    // if char is something else .,space etc dont do anything
    //return object at end
    return result; 

}


// for loop with in 
//The JavaScript for/in statement loops through the properties of an object:
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
console.log(text);

/* for (variable of iterable) {
    // code block to be executed
    variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
    iterable - An object that has iterable properties.
  } */

  var cars = ['BMW', 'Volvo', 'Mini'];
var x1;

for (x1 of cars) {
  console.log(x1);
}