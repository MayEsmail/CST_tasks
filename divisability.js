function fuzzbuzz(num){
    if(num%15===0)
        console.log("FUZZBUZZ");
    else if(num%3===0)
        console.log("FUZZ");
    else if(num%5===0)
        console.log("BUZZ");
    else 
        console.log("none");
}
