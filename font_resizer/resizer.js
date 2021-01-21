$("input:eq(0)").click(plus);
$("input:eq(1)").click(minus);
function plus(){
    $(".msg:eq(1)").hide();
    let cursize=parseInt($("#hello").css('font-size'));
    cursize+=10;
    if(cursize>255){
        $(".msg:eq(0)").show();
        return;
    }
    $("#hello").css('font-size',cursize);
}
function minus(){
    $(".msg:eq(0)").hide();
    let cursize=parseInt($("#hello").css('font-size'));
    cursize-=10;
    if(cursize<8){
        $(".msg:eq(1)").show();
        return;
    }
    $("#hello").css('font-size',cursize);
}