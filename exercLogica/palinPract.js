function canFormPalindrome(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= 1;
}

console.log(canFormPalindrome("roupa"));
console.log(canFormPalindrome("civic"));
console.log(canFormPalindrome("ivicc"));
console.log(canFormPalindrome("raffaeellaa"));
console.log(canFormPalindrome("passaro"));
