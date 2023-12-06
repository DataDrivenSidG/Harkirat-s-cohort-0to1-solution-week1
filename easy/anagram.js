/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//*
function isAnagram(str1, str2) {
  const strA = str1.toLowerCase();
  const strB = str2.toLowerCase();
  const strArray1 = Array.from(strA);
  const strArray2 = Array.from(strB);
  const spiltArray1 = strArray1.slice().sort();
  const spiltArray2 = strArray2.slice().sort();
  if (spiltArray1.length !== spiltArray2.length) {
    return false;
  }
  for (let i = 0; i < spiltArray1.length; i++) {
    if (spiltArray1[i] !== spiltArray2[i]) {
      return false;
    }
  }

  return true;
}
module.exports = isAnagram;
