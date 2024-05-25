
function firstElements(arr, n) {
    return arr.slice(0, n);
}

console.log(firstElements([1, 2, 3, 4], 1));
console.log(firstElements([1, 2, 3, 4], 3));

// Practice 2
// Write a JavaScript function that finds the most frequent item in an array.

// The Array

let myArray = [1, 2, "a", "a", 5, 15, true, "a"];

function findMostFrequentItem(arr) {

    const myArr = {};  
    
    for (let item of arr) { 
        if (myArr[item]) {
            myArr[item]++;
        } else {
            myArr[item] = 1;
        }
    }

    
    let mostFrequentItem = arr[0];
    let highestFrequency = myArr[arr[0]];

    for (let item in myArr) {
        if (myArr[item] > highestFrequency) {
            mostFrequentItem = item;
            highestFrequency = myArr[item];
        }
    }

    return mostFrequentItem;
}

console.log(findMostFrequentItem(myArray)); // Ausgabe: "a"

// Practice 3
// Write a Javascript function that returns the product of an array of integers. If an element is not an integer the function should return -1

function productOfArray(ArrMultiply) {

    let product = 1;

    for (let i = 0; i < ArrMultiply.length; i++) {
        if (Number.isInteger(ArrMultiply[i])) {
            product *= ArrMultiply[i];
        } else {
            return -1;
        }
    }

    return product;
        
}

console.log(productOfArray([1, 2, 5]));
console.log(productOfArray([1, 2, true]));
// Practice 4
// Write a Javascript function removes non-integer values from an array

function removeNonIntegers(array) {

    for (let i = array.length -1; i >= 0; i--) {
        if (!Number.isInteger(array[i])) {
            array.splice(i, 1);
        } 
    }
    return array;
}
console.log(removeNonIntegers([1, 2, 3])) // [1, 2, 3]
console.log(removeNonIntegers([1, true, NaN, "a", 10])) // [1, 10]
// Practice 5
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(originalString, stringToInsert, position = 1) {
    
    let firstPart = originalString.slice(0, position - 1);
    let secondPart = originalString.slice(position - 1);

    let newString = firstPart + stringToInsert + secondPart;

    return newString;
}


// Examples:

console.log(insert('We are doing some exercises.','JavaScript ')) //  "JavaScript We are doing some exercises." 
console.log(insert('We are doing some exercises.','JavaScript ',18)); //  "We are doing some JavaScript exercises."