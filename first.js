/**
 * For...Of Loop Practice
 * Demonstrates iterating over iterable objects (strings and arrays) using
 * the ES6 `for...of` loop to inspect characters and count matching words.
 */

// ==========================================
// 1. Iterating Over a String
// ==========================================

/**
 * Logs each individual character of a string on a new line.
 *
 * HOW IT WORKS:
 * In JavaScript, strings are iterable. A `for...of` loop automatically extracts
 * one character at a time from index 0 to the end of the string without needing
 * a manual index counter (`i`).
 *
 * @param {string} str - The string to iterate through.
 */
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}

printCharacters("hello");
/* Expected Output:
h
e
l
l
o
*/

// ==========================================
// 2. Iterating Over an Array & Counting Matches
// ==========================================

/**
 * Counts how many times a target word appears in an array of words,
 * logging each comparison and the running total along the way.
 *
 * @param {string[]} sentence - An array of word strings.
 * @param {string} match - The exact word to search for (case-sensitive).
 * @returns {number} The total number of matching words found.
 */
function getMatchedWordCount(sentence, match) {
  let count = 0;

  // Loop directly over each element (`word`) inside the `sentence` array
  for (const word of sentence) {
    // Use strict equality (`===`) so partial matches are not counted
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }

  return count;
}

// ==========================================
// 3. Example Usage & Test Cases
// ==========================================

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);
/* Expected Output:
Checking "I" against "really" | Running count: 0
Checking "really" against "really" | Running count: 1
Checking "really" against "really" | Running count: 2
Checking "really" against "really" | Running count: 3
Checking "like" against "really" | Running count: 3
Checking "to" against "really" | Running count: 3
Checking "code" against "really" | Running count: 3
3
*/

console.log(
  getMatchedWordCount(
    ["Do", "not", "fear", "the", "dandy", "lion"],
    "dandy"
  )
);
/* Expected Output:
Checking "Do" against "dandy" | Running count: 0
Checking "not" against "dandy" | Running count: 0
Checking "fear" against "dandy" | Running count: 0
Checking "the" against "dandy" | Running count: 0
Checking "dandy" against "dandy" | Running count: 1
Checking "lion" against "dandy" | Running count: 1
1
*/
