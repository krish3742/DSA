function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let smallest = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[smallest] > arr[j]) {
                smallest = j;
            }
        }
        if(smallest !== i) {
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
    }
}

let arr = [7, 8, 3, 1, 2, -1];
selectionSort(arr);
console.log(arr);