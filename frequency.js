function frequency(str,c){
    var arr=[];
    for(let i=0;i<str.length;i++)
        if(str[i]==c.toLowerCase()||str[i]==c.toUpperCase())
            arr.push(i+1);
    return arr;
}