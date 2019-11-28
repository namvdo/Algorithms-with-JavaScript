function insertionSort(arr) {
    debugger
    let i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i]; // insert arr[i] as a key to the sorted sequence [1...i-1]
        j = i - 1;

        /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // after checking value at j index, if it is not less then then set a[j + 1] is key
    }
    return arr
}
insertionSort([5, 7, 2, 1, 4, 6]) // [1, 2, 4, 5, 6, 7]