var src_arr=["gray.png","red.png","orange.png","green.png"];
var play_button=document.getElementById("play");
var stop_button=document.getElementById("stop");
var home_button=document.getElementById("home");
var end_button=document.getElementById("end");
var next_button=document.getElementById("next");
var prev_button=document.getElementById("previous");
var img=document.getElementsByTagName("img")[0];
play_button.addEventListener("click",on_play);
stop_button.addEventListener("click",on_stop);
home_button.addEventListener("click",on_home);
end_button.addEventListener("click",on_end);
next_button.addEventListener("click",on_next);
prev_button.addEventListener("click",on_prev);
var interval;
var index=0;
function on_play(){
    clearInterval(interval);
    interval=setInterval(show,500);
}
function show(){
    img.setAttribute("src",src_arr[index++]);
    index%=4;
}
function on_stop(){
    clearInterval(interval);
}
function on_home(){
    clearInterval(interval);
    index=0;
    img.setAttribute("src",src_arr[0]);
}
function on_end(){
    clearInterval(interval);
    index=3;
    img.setAttribute("src",src_arr[3]);
}
function on_next(){
    clearInterval(interval);
    if(index<3)index++;
    img.setAttribute("src",src_arr[index]);
}
function on_prev(){
    clearInterval(interval);
    if(index>0)index--;
    img.setAttribute("src",src_arr[index]);
}