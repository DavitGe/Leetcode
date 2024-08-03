/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    var res = {};
    this.forEach((el) => {
        const key = fn(el);
        if(!res[key]){
            res[key] = [el];
        }else{
            res[key].push(el);
        }
    })
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */