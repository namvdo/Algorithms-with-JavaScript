/* 
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

Example

For n = 5, the output should be
digitDegree(n) = 0;
For n = 100, the output should be
digitDegree(n) = 1.
1 + 0 + 0 = 1.
For n = 91, the output should be
digitDegree(n) = 2.
9 + 1 = 10 -> 1 + 0 = 1.
*/
// helper function, add sum of digits

        const add = (a, b) => {
            if( a < 10){
                return b
            }else{
                var t = 0;
                while(a > 0){
                    t += a % 10;
                    a = Math.floor(a/10);
                }
                return add(t, b + 1);
            }
        }
        function digitDegree(n) {
            return add(n, 0)
        }
