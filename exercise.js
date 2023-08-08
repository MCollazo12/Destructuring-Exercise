/*
ES5 code: Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
*/
const obj = {
    [numbers]: {
        a: 1,
        b: 2,
    }
}

//Extract a and b using object destructuring
const { a, b } = obj;

/*
ES5 code: Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
*/

let arr = [1, 2]
[arr[0], arr[1]] = [arr[1], arr[0]]

/* Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest. Write a one line function to make this work using: an arrow function, destructuring, enhanced object assignment */
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });
