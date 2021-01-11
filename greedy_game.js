function greedy(money){
    var ret="you have : "
    ret += Math.floor(money)+" dollers, ";
    money-=Math.floor(money);
    var strmoney=""+money.toFixed(2);
    strmoney=strmoney.slice(2,strmoney.length);
    money=parseInt(strmoney);
    ret +=Math.floor(money/25) +" quarters, ";
    money-=Math.floor(money/25)*25;
    ret +=Math.floor(money/10) +" dimes ";
    money-=Math.floor(money/10)*10;
    ret +=Math.floor(money/5) +" nickles ";
    money-=Math.floor(money/5)*5;
    ret+="and "+money+" cent.";
    return ret;
}