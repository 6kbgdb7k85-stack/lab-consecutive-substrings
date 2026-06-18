//O(n^2)
function consecutiveSubstrings(string) {
  let currentString = ""; //substring builder var
  const subStrings = []; //array of resulting substrings
  //loop through the array
  for (let i = 0; i < string.length; i++) {
    //reset the substring builder to the current character and push it to subStrings array
    currentString = string[i];
    subStrings.push(currentString);
    //loop through the remaining characters to get each subsequent substring
    for (let j = i + 1; j < string.length; j++) {
      //add the next char to the substring builder to generate the next substring and push it to subStrings
      currentString += string[j];
      subStrings.push(currentString);
    }
  }
  return subStrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;
