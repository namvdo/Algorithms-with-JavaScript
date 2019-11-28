/* BASIC ALGORITHMS #1: CONVERT CELSIUS TO FAHRENHEIT

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 

Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 

*/


function converttoF(celsius){
    // CREATE A VARIABLE FAHRENHEIT, USING THE ALGORITHM MENTIONED ABOVE
    let fahrenheit = celsius * (9/5) + 32;
    // ONE OF THESE TWO THINGS CAN HAPPEN, IF FAHRENHEIT IS DEFINED, THEN RETURN THE NUMBER
    if (typeof fahrenheit !== undefined){
        return fahrenheit;
    // IF NOT, RETURN A MESSAGE
    }else{
        return "fahrenheit is not defined";
    }
}
// CALL THE FUNCTION ((GIVE ARGUMENT (CELSIUS) EQUAL 30))
converttoF(30);
