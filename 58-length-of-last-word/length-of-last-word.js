var lengthOfLastWord = function(s) {
    let c=0
    let space=0;
    for (let i =s.length-1;i>=0;i--){
        if(s[i]===" "){
            space++;
        }
        else {
            c++;
        }
        if(s[i]===" "&&c>0&&space>0){
            break;
        }
   
    }
    return c;
};