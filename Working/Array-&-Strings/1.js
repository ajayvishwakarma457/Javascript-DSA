
// Reverse an array (Easy)
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3, 4]));
// 💡 Use Case: Undo/redo feature → if you want to display the history in reverse order (latest first).


// 2. Find the maximum and minimum in an array (Easy)
function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

console.log(findMinMax([1, 2, 3, 4]));
//💡 Use Case: E-commerce → show the lowest and highest product prices in a category.


// 3. Check if a string is a palindrome (Easy)
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); 
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); // true
// 💡 Use Case: Username or coupon validation → some apps prevent palindromes because they’re easily guessable.

// 4. Rotate an array by k steps (Medium)
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 5));
// 💡 Use Case: Playlist → rotate songs so that the "next up" order changes.


// 5. Find the first non-repeating character in a string (Medium)
function firstUniqueChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstUniqueChar("swiss")); // w
// 💡 Use Case: Messaging → detect the first unique character in a username for quick tagging/shortcuts.


// 6. Longest substring without repeating characters (Hard)
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Example
console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
