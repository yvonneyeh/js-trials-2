"use strict";


// 1. countWords
function countWords(phrase) {
  // Return a plain object of each word and the no. of times they appear.

  const wordCounts = {}

  for (const word of phrase.split(' ')) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    }
    else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Return the array of melons that cost 'price'.
  
  const melonPrices = {
    '2.5': ['Canteloupe', 'Honeydew'],
    '2.95': ['Watermelon'],
    '3.25': ['Musk','Crenshaw'],
    '14.25': ['Christmas']
  };
  if (!melonPrices[price]){
    return null;
  }
  return melonPrices[price].sort();
}
