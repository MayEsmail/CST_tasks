function bottle(arr){
    if(arr.length<2)
        return "invalid input, array size must be greater than 1";
    else{
        var res = new Array(2);
        var elem1indx,elem2indx;
        elem1indx=Math.floor(Math.random()*arr.length);
        do{
            elem2indx=Math.floor(Math.random()*arr.length);
        }while(elem2indx==elem1indx);
        return arr[elem1indx] + " and " +arr[elem2indx];
    }
}