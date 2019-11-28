/*

Given a 12-hour time representation in the form of a string, your task is to find the angle (in degrees) between the hour and minute hands.

Example

For time = "12:00:00", the output should be clockHandAngle(time) = 0

When the hands are together, the angle between them is 0.

For time = "3:00:00", the output should be clockHandAngle(time) = 90

At this time, the minute and hour hands are perpendicular, which means the angle between them could be measured as 90 or 270 degrees, so we return 90 since it's smaller.

Input/Output

[execution time limit] 1 second

[input] string time

A string representation of the time in the format <hour>:<minute>:<second>. The time is in 12 hour format.

[output] float

The angle between the hour hand and the minute hand. If there are two possible angles, return the smaller value (Round the ouput to 5 decimal digits).

*/

function getSeconds(time) {
    var timeArray = time.split(":");
    return (parseInt(timeArray[0]) * 60 * 60 + parseInt(timeArray[1]) * 60 + parseInt(timeArray[2])) % 43200;
}

function clockHandAngle(time) {
    var totalSeconds = 43200;
    var hourSeconds = getSeconds(time);
    var minuteSeconds = getSeconds("00:" + time.slice(time.indexOf(":") + 1));

    var hourAngle = hourSeconds / totalSeconds * 360;
    var minAngle = minuteSeconds / 3600 * 360;

    return Math.min(Math.abs(minAngle - hourAngle), 360 + minAngle - hourAngle, 360 + hourAngle - minAngle).toFixed(5);
}