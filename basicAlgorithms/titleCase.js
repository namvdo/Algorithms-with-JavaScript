// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length);
};

function titleCase(str) {
  var newTitle = str.split(' ');
  var updatedTitle = [];
  for (var st in newTitle) {
      updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }
  return updatedTitle.join(' ');
}
titleCase("I'm a little tea pot") // I'm A Little Tea Pot