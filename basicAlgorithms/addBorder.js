/* 
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
											"*****"]

*/

function addBorder(picture) {
	return [
			('*').repeat(picture[0].length + 2),
			...picture.map(index => {return "*" + index + "*"}),
			('*').repeat(picture[0].length + 2)
	]
}