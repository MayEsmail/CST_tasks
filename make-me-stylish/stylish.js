function stylish(tag,obj){
    var elements_arr=document.getElementsByTagName(tag);
    for(let i=0;i<elements_arr.length;i++){
        for(var key in obj){
            elements_arr[i].style[key]= obj[key];
        }
    }
}