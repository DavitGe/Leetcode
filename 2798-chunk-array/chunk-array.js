/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var res = [];
    var resIndex = -1;
    arr.forEach((val, i) => {
        if(i % size){
            res[resIndex].push(val);
        }else{
            res.push([val]);
            resIndex++;
        }
        
    })
return res;
    
};
