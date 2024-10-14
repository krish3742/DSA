function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i-1;
        while(j >= 0 && current < arr[j]) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
}

let arr = [7, 2, 3, 1, 8];
insertionSort(arr);
console.log(arr);