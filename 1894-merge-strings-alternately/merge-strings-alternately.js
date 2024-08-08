/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var p1 = 0;
    var p2 = 0;
    var flen = word1.length;
    var slen = word2.length;
    var res = "";

    while(p1 + p2 < flen + slen){
        if((p1 == p2 || p2 >= slen)  && p1 < flen){
            res += word1[p1++]
        }else{
            res += word2[p2++]
        }
    }
    return res;
};