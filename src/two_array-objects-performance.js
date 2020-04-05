/*===============================================================================
Resources:
    1.Concept Array and Objects link   -- https://cs.slides.com/colt_steele/built-in-data-structures-25
    2. Performnce Tracker - https://rithmschool.github.io/function-timer-demo/
Notes:
    1. Objects  -- unordered , key-value pair
        let instructor = {
            firstName: "Kelly",
            isInstructor: true,
            favoriteNumbers: [1,2,3,4]
        }

        When you don't need any ordering, objects are an excellent choice for adding, deletion, access
        Insertion -   O(1)
        Removal -   O(1)
        Searching -   O(N)
        Access -   O(1)
        When you don't need any ordering, objects are an excellent choice!

        In JavaScript, arrays use numbered indexes.  
        In JavaScript, objects use named indexes.

    2. Array
        When you need order
        When you need fast access / insertion and removal (sort of....)
        Insertion -   It depends.... ( end of array - O(1), in beginning then need to reindex each element-- O(n))
        Removal -   It depends.... ( end of array - O(1), in beginning then need to reindex each element-- O(n))
        Searching -   O(N)
        Access -   O(1)
        push -   O(1)  // adding at the end
        pop -   O(1) // removing from end
        shift -   O(N) //adding at top
        unshift -   O(N) // removing from begining
        concat -   O(N)
        slice -   O(N)
        splice -   O(N)
        sort -   O(N * log N)
        forEach/map/filter/reduce/etc. -   O(N)




===============================================================================*/
/* The purpose of "use strict" is to indicate that the code should be executed in "strict mode". 
  With strict mode, you can not, for example, use undeclared variables. */
'use strict';

//OBJECTS
let instructor = { 
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

console.log("Keys : " + Object.keys(instructor))  // O(n)
console.log("Values : " + Object.values(instructor))  // O(n)
console.log("entries : " + Object.entries(instructor))  // O(n)
console.log("checkProperty : " + Object.hasOwnProperty("firstName"))  // O(1)

//Array

/* Array Methods */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

//accessing last array
console.log(fruits[fruits.length -1]);

//looping an array
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}
//second method
fruits.forEach(item => {
    console.log(item);
});

//Push method adds to the last
let x = fruits.push("Lemon"); // it also returns new array length
console.log(fruits);

// pop removes from last
 fruits.pop();
 console.log(x);
 console.log(fruits);

 // typeof gives you type object
 console.log(Array.isArray(fruits));
 console.log(fruits instanceof Array);

 // Array to string , comma separated its default
 console.log(fruits.toString());

 // join lets you define separator
 console.log(fruits.join(";"));

 // shift removes first element from array and return value of removed item
 fruits.shift();
console.log(fruits);

//unshift adds new element at top and return the value length

fruits.unshift("banana");
console.log(fruits);

// splicing the array splice(positionwhere_new_item_spliced_in, how many element removed, new elements optional)
fruits.splice(2,2,"Naveen","Khura");
console.log(fruits);

//concat two or more arrays

let family = ["shashi","chandra"];
console.log(fruits.concat(family));
console.log(fruits);
//Slice si to slice piece of array, it creates new array , it doesn't do anything to existing array
//slice(starting index, till how many)
console.log(fruits.slice(3));

console.log(fruits.slice(1,2));

// Iteration Method , very important
/* Several methods accept callback functions which are executed while processing the array. When these methods are called, 
the length of the array is sampled, and any element added beyond this length from within the callback is not visited. */
console.log(fruits);
const iterator = fruits.entries(); // entries() method gives iterator object
//console.log(iterator.next().value);
/* for(let i=0;i< fruits.length; i++)
{
    //console.log(e);
    console.log(iterator.next().value);
} */

for (let e of iterator) {
    console.log(e);
  }

  // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  const array1 = [5, 12, 8, 130, 44];

  const found = array1.find(value => value > 8);
  
  console.log(found);

  // The forEach() method executes a provided function once for each array element.
  const array4each = ['a', 'b', 'c'];

  array4each.forEach(element => console.log(element));

  //The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
  const array1k = ['a', 'b', 'c'];
   const iteratork = array1k.keys();

    for (const key of iteratork) {
    console.log(key);
    }
// map() The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1m = [1, 4, 9, 16];

// pass a function to map
const map1 = array1m.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
/* The reducer function takes four arguments:
Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)
Your reducer function's returned value is assigned to the accumulator, 
whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value. */

const array1re = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1re.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1re.reduce(reducer, 5)); // here 5 is initial value and will act as accumulator
// expected output: 15










    




