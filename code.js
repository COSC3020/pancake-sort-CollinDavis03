function flip(array, n) {
    let start = 0; // Flip the first n elements
    let end = n - 1; 
    while (start < end) { 
        [array[start], array[end]] = [array[end], array[start]]; 
        start++; 
        end--; 
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let max = 0; 
        //find index of largest element in the unsorted portion
        for (let i = 1; i < size; i++) {
            if (array[i] > array[max]) {
                max = i; 
            } 
        }
        // If largest is not already found at the end of unsorted
        if (max !== size - 1) {
            if (max > 0) {
                flip(array, max + 1); //Flip largest to the top if not already
            }
            flip(array, size); //flip into the final sorted position 
        }
    }   
    return array;
}
