var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for (var i = minIndex + 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

var selectionSort = function(array) {
    var minIndex = 0;
    var minValue = array[minIndex];
    for (var i = 0; i < array.length; i++) {
        swap(array, i, indexOfMinimum(array, i));
    }
    return array
};

var array = [22, 11, 99, 88, 9, 7, 42];
console.log(selectionSort(array)); // [7, 9, 11, 22, 42, 88, 99]
