$.fn.colorify=function(col){
    if(typeof col==="string"){
        //string
        this.css({color:col});
    }
    else if(typeof col==="object"&&col.length!=undefined){
        //array
        for(let i=0,idx=0;i<this.length;i++,idx++){
            if(idx>=col.length)
                idx-=col.length;
            this[i].style.color=col[idx];
        }
    }
    else if(typeof col==="object"){
        //object
        this.css(col);
    }
    else{
        this.css({color:"cyan"});
    }
    return this;
}
$("a").colorify(["red","green","blue","yellow"]);