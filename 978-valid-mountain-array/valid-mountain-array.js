/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    let increased = false;
    let isIncreasing = true;
    const len = arr.length;
    if (len <= 2) {
        return false;
    }

    for (var i = 1; i < len; i++) {
        if(arr[i-1] == arr[i]){
            return false;
        }
        if(isIncreasing){
            if(arr[i - 1] > arr[i]){
                if(increased == false){
                    return false
                }
                isIncreasing = false;
                continue;
            }else{
                increased = true;
            }
        } else if (arr[i - 1] <= arr[i]) {
            return false;
        }
    }
    return !isIncreasing;
};