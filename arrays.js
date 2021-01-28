"use strict";


// 1. printIndices
function printIndices(items) {
  // Print each item in the array, followed by its index.

  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Print an array of every other item in 'items'
  const result = []

  for (const i in items){
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
