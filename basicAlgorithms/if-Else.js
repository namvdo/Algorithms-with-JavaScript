/* Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If 25 < score <= 30, then grade = A.
If 20 < score <= 25, then grade = B.
If 15 < score <= 20, then grade = C.
If 10 < score <= 15, then grade = D.
If 5 < score <= 10, then grade = E .
If 0 < score <= 5, then grade = F .
Input Format

Stub code in the editor reads a single integer denoting score from stdin and passes it to the function.

Constraints

Output Format

The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.

Sample Input 0

11
Sample Output 0

D
Explanation 0

Because score = 11, it satisfies the condition 10 < score <= 15 (which corresponds to D). Thus, we return D as our answer.

*/

function getGrade(score) {
    let grade;
    if (score <= 5) {
        grade = 'F';
    } else if (score <= 10) {
        grade = 'E';
    } else if (score <= 15) {
        grade = 'D';
    } else if (score <= 20) {
        grade = 'C';
    } else if (score <= 25) {
        grade = 'B';
    } else
        grade = 'A';
    return grade;
}