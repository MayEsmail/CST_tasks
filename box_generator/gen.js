var nxt=["red","blue","yellow","green","red"];
var scripts= $("script:eq(0)");
$("body").on("click","div:last",function(){
    scripts.before(`<div class='${nxt[nxt.indexOf($(this).attr('class'))+1]}'></div>`);
    console.log($("div"));
});
$("body").on("mouseover","div",function(){$(this).css("backgroundColor",nxt[nxt.indexOf($(this).attr('class'))+1]);})
$("body").on("mouseout","div",function(){$(this).css("backgroundColor",$(this).attr('class'));})
