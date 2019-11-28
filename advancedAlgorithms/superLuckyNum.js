/*
Your friend Jack is a talented and experienced mathematician who loves math puzzles. He's always talking about 'beautiful numbers', which are numbers that have only 4's and 7's in their decimal representation (e.g. 47, 4777, and 44 are beautiful numbers, while 46, 8, and 776 are not).

Just when you thought you had heard enough about beautiful numbers, you find out that Jack has a fresh new puzzle for you today:

Define a 'marvelous number' as a beautiful number with an equal amount of 4's and 7's. Given a large number n, find the smallest marvelous number not less than n.

Notes:

The first 10 marvelous numbers are 47, 74, 4477, 4747, 4774, 7447, 7474, 7744, 444777, and 447477.
n will be given as a string (since it might be a huge number), and the output is also expected to be a string (for the same reason).
n will not have any leading zeros.
Example

For n = "4587", the output should be marvelousNumber(n) = "4747"

For n = "1007", the output should be marvelousNumber(n) = "4477"

For n = "7774", the output should be marvelousNumber(n) = "444777"

Input / Output

[execution time limit] 4 seconds (js)

[input] string n

A string representing a huge number. It's guaranteed that the string does not contain any leading zeros.

Guaranteed constraints:
1 ≤ n.length ≤ 104
n[i] ∈ {"0" - "9"}

[output] string

A string representing the smallest marvelous number that's not less than n.

*/

function marvelousNumber(n) {
    //Greedy Algorithmn
    //_____________________________________________
    //Start to go from right to left
    //Since we are trying to create smallest marvelousNumer
    //digit 4 will have higher priority than digit 7
    //We'll try to use digit 4 first, if it fails, than we move on to the digit 7
    //Now we have the digit `a` of n, and a digit we are trying to use `b` (`b` can be 4 or 7)
    //NOTE: we will only try to use digit b if we the number of digits b left is bigger than 0
    //   If a < b:
    //       .set the digit of result to b 
    //       .decrease the number of digit b left
    //       .return result + b + '4'.repeat(number of 4 digits left) + '7'.repeat(number of 7 digits left)
    //   If a = b:
    //       .set the digit of result to b
    //       .decrease the number of digit b left (we use digit b)
    //       .move to the next position, by repeating the process
    //           check if we set the digit of result to b
    //           with a certain number of 4 digits left and 7 digits left
    //           can we eventually create a marvelousNumber not less then n
    //              - if this process success than just return the result
    //              - otherwise increase the number of digit b left (we do not use digit b)
    //_______________________________________________
    //i.e: 1007
    //Initially, the number of 4 digits is 2, and the number of 7 digits is 2, result = ''
    //Go from left to right: 
    //At position i = 0 we meet digit 1
    //We try use digit 4 first
    //1 < 4 so we wil use digit 4, we have 1 (digits 4) left
    //return result + '4' + '4'.repeat(1) + '7'.repeat(2) = '4477'  
    //_______________________________________________
    //i.e: 4587:
    //at position i = 0, we meet digit 4
    //We try use use digit 4 
    //4 == 4 so we try using digit 4, we have 1 (digits 4) left, set result = '4'
    //Now we have a smaller problem: 
    //create smallest marvelousNumber not less than '587' 
    //from 1 (digits 4) and 2 (digits 7)
    //let's do this quick: let's say f(x): is the result of this process:
    //First we meet digit 5:
    //  .We try using 4 and it fails (since 5 > 4)
    //  .We try using 7, 5 < 7 so we take digit 7, we have 1 (digits 7) left
    //  .return '7' + '4'.repeat(1) + '7'.repeat(1)
    //  => we get f(x) = '747'
    //The process succeeded, we get the output: result + f(x) = '4' + '747' = '4747'
    //_____________________________________________________
    //If the number of digits of n is odd, since a marvelousNumber has to have an even length
    //So we have to digit 4 and digit 4, each digit (k = (n.length + 1) / 2) times
    //return '4'.repeat(k) + '7'.repeat(k) 
    //i.e: 100 -> '4477'

    let len = n.length,
        k = Math.ceil(len / 2),
        digits = { 4: k, 7: k },
        _ = (s, t) => s.repeat(t),
        format = x => _('7', x) + _('4', digits[4]) + _('7', digits[7] - x),
        approach = (i, result) => {
            if (i >= len) return result
            let _ = n[i]
            for (let char of '47') {
                if (digits[char]) {
                    if (_ < char) return result + format(char == 7)
                    if (_ == char) {
                        digits[char]--
                            let echo = approach(i + 1, result + char)
                        digits[char]++
                            if (echo) return echo
                    }
                }
            }
        }
    return len & 1 ? format(0) : approach(0, '') || format(0, digits[4]++, digits[7]++)
}