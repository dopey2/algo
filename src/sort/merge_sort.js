


const _arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];


function merge_sort(arr){
    if(arr.length < 2){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid , arr.length);

    left = merge_sort(left);
    right = merge_sort(right);

    return merge(left, right);
}

function merge(arr1, arr2){
    const result = [];

    while(arr1.length || arr2.length){

        if((arr1[0] < arr2[0] && arr1.length !== 0) || arr2.length === 0){
            result.push(arr1[0]);
            arr1.splice(0, 1);
        }
        else {
            result.push(arr2[0]);
            arr2.splice(0, 1)
        }
    }

    return result;
}

module.exports = merge_sort;

const aa = merge_sort(_arr);
