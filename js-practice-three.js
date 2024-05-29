// // Exercise 1: Part A

const greets = (name) => `Hello, ${name}!`;

console.log(greets("Alice"));

// // Part B: Use the spread operator to merge two arrays and the rest operator to create a function that accepts any number of arguments.

// // Merge these arrays using the spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const sumAll = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sumAll(1, 2, 3, 4)); // Should print: 10

// Exercise 3: Promises

function delay(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function simulateTask(taskName, delayTime) {
  console.log(`Starting task: ${taskName}`);
  await delay(delayTime);
  console.log(`Task "${taskName}" completed after ${delayTime} milliseconds`);
}

simulateTask('Task 1', 2000);
simulateTask('Task 2', 3000);
