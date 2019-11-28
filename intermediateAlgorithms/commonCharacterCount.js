/* 
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer

*/
function commonCharacterCount(s1, s2) {
	let counter = 0;

	s1Array = s1.split('');
	s2Array = s2.split('');

	for (var i = 0; i < s1Array.length; i++) {
		for (var j = 0; j < s2Array.length; j++) {
			if (s1Array[i] == s2Array[j]) {
				s1Array.splice(i, 1);
				s2Array.splice(j, 1);
				counter++;
				i--;
			}
		}

	}
	return counter;

}
commonCharacterCount("something", "something"); // Expected output: 9