function quickSort(arr, low, high) {
    if(low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot-1);
        quickSort(arr, pivot+1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low, j = high;
    while(i < j) {
        while(arr[i] <= pivot && i <= high) {
            i++;
        } 
        while(arr[j] > pivot && j >= low) {
            j--;
        }
        if(i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[low] = arr[j];
    arr[j] = pivot;
    return j;
}

let arr = [4, 6, 2, 5, 7, 9, 1, 3];
quickSort(arr, 0, 7);
console.log(arr);