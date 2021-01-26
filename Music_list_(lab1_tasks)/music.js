var soundarr=['Bach_Violin_Concerto_in A_minor.mp3','Kiss_of_fire_violin.mp3','Summer_nights_dreams.mp3','Shadows_Lindsey_Stirling.mp3','Interstellar_Main_Theme.mp3']
var ids=[0,1,2,3,4];
var curidx=-1;
var play_btn=document.getElementById("play");
var repeat_btn=document.getElementById("repeat");
var shuffle_btn=document.getElementById("shuffle");
var track1=document.getElementById("one");
var track2=document.getElementById("two");
var track3=document.getElementById("three");
var track4=document.getElementById("four");
var track5=document.getElementById("five");
var audio=document.getElementsByTagName("audio")[0];
var del=document.getElementsByTagName("img");
var table=document.getElementsByTagName("table")[0];
var cur_playing=document.getElementById("cur_playing");
var table_rows= document.getElementsByTagName("tr");
cur_playing.textContent=soundarr[0];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function change_cur_playing(song_idx){
    cur_playing.innerText=soundarr[song_idx];
    for(let i=0;i<table_rows.length;i++)
        table_rows[i].style.background="rgba(0,0,0,0.4)";
    table_rows[song_idx].style.background="black";
}
function playaudio(){
    audio.pause();
    audio.currentTime=0;
    if(curidx<4)curidx++;
    audio.setAttribute('src',soundarr[curidx]);
    audio.play();
    change_cur_playing(curidx);
}

function repaudio(){
    audio.currentTime=0;
    audio.play();
}

function shuffle_ev(){
    audio.setAttribute('src',soundarr[curidx=getRandomInt(0,5)]);
    audio.play();
    change_cur_playing(curidx);
}

play_btn.addEventListener("click",playaudio);
repeat_btn.addEventListener("click",repaudio);
shuffle_btn.addEventListener("click",shuffle_ev);
track1.addEventListener("click",()=>{
    curidx=0; 
    audio.setAttribute('src',soundarr[curidx]);
    audio.pause();
    audio.currentTime=0;
    audio.play();
    change_cur_playing(curidx);
});
track2.addEventListener("click",()=>{
    curidx=1;
    audio.setAttribute('src',soundarr[curidx]);
    audio.pause();
    audio.currentTime=0;
    audio.play();
    change_cur_playing(curidx);
});
track3.addEventListener("click",()=>{
    curidx=2;
    audio.setAttribute('src',soundarr[curidx]);
    audio.pause();
    audio.currentTime=0;
    audio.play();
    change_cur_playing(curidx);
});
track4.addEventListener("click",()=>{
    curidx=3;
    audio.setAttribute('src',soundarr[curidx]);
    audio.pause();
    audio.currentTime=0;
    audio.play();
    change_cur_playing(curidx);
});
track5.addEventListener("click",()=>{
    curidx=4;
    audio.setAttribute('src',soundarr[curidx]);
    audio.pause();
    audio.currentTime=0;
    audio.play();
    change_cur_playing(curidx);
});
for(let i=0;i<del.length;i++){
    del[i].addEventListener("click",()=>{
        console.log("h3");
        soundarr.splice(ids.indexOf(i), 1);
        table.deleteRow(ids.indexOf(i));
        ids.splice(ids.indexOf(i),1);
    })
}
document.getElementsByTagName("button")[0].addEventListener("click",()=>{
    location.href= "form.html";
})