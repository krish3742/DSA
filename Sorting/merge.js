function mergeSort(arr, low, high) {
    if(low >= high) {
        return;
    }
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid+1;
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left++]);
        } else {
            temp.push(arr[right++]);
        }
    }
    while(left <= mid) {
        temp.push(arr[left++]);
    }
    while(right <= high) {
        temp.push(arr[right++]);
    }
    let index = 0;
    for(let i = low; i <= high; i++) {
        arr[i] = temp[index];
        index++;
    }
}

let arr = [3, 1, 2, 4, 1, 5, 2, 6, 4];
mergeSort(arr, 0, 8);
console.log(arr);