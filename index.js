// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// /*
//   Write the Big O time complexity of your function here

//   The time complexity of this function is O(n^2), because we are using nested loops
//   to check each pair of numbers in the array.
// */

// /*
//   Add your pseudocode here

//   Pseudocode:
//   - for each number in the array
//     - for each subsequent number in the array
//       - if the sum of the current number and the subsequent number is equal to the target
//         - return true
//   - if no pair of numbers adds up to the target, return false
// */

// /*
//   Add written explanation of your solution here

//   We iterate through the array once for each number in the array (n iterations),
//   and for each iteration we iterate through the remaining numbers in the array (n - 1 iterations).
//   This gives us n * (n - 1) total iterations, or O(n^2) time complexity.
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// solution 2 - using a hash table
function hasTargetSum(arr, target) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(arr[i]);
  }
  return false;
}

/*
The time complexity of this function is O(n), because we are iterating through the array once
and performing constant-time lookups and insertions into the hash table.
*/

/*
Pseudocode:
- initialize an empty hash table (Set)
- for each number in the array
    - calculate the complement of the current number (target - current number)
    - if the complement is in the hash table
      - return true
    - add the current number to the hash table
  - if no pair of numbers adds up to the target, return false
  */

/*
 In the worst case, we will iterate through the entire array once (n iterations),
 performing a constant-time lookup and insertion for each iteration. This gives us O(n) time complexity.
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 2, 4, 6, 8], 8));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 1));
}

module.exports = hasTargetSum;
