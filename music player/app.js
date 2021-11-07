const audio=document.querySelector("audio");
const ns=document.querySelector(".nextsong");
let progress=document.querySelector(".progresss");
audio.onloadedmetadata=function(){
    window.set=setInterval(function(){
        
        window.audioa=audio.currentTime/audio.duration*100+"%";
        //console.log(window.audioa);
        progress.style.width=(window.percent);
        progress.style.width=audioa;
       
    },1)
}      

$(document).ready(function(){
    $(window).dblclick(function(){
        document.body.requestFullscreen();
    })
});
const prevsong=document.querySelector("#prev");
const nextsong=document.querySelector("#forw");

const btnp=document.querySelector("#play");

const img=document.querySelector("img");
const songs=['waves','stiches','dusktilldawn','falling',];

let index=1;

console.log(songs[index]);
function playsong(song){
 
audio.src=`${song}.mp3`;
btnp.querySelector("i").classList.remove("fa-play");
        btnp.querySelector("i").classList.add("fa-pause");
        img.classList.add("play");
audio.play();
img.src=`${song}.jpg`
}



setInterval(function nextsongg(){
    if(audio.ended){
        index++;
        if(index>=songs.length){
            index=index-songs.length;
        }
        playsong(songs[index]);
        document.title=songs[index];
        
    }
},1000);
console.log(audio.duration);




btnp.addEventListener("click",function(){
    ns.style.display="block";
    document.title=songs[index];
    if(btnp.querySelector("i").classList.contains("fa-play")){
        audio.play();
       btnp.querySelector("i").classList.remove("fa-play");
        btnp.querySelector("i").classList.add("fa-pause");
        img.classList.add("play");

    }
    else if(btnp.querySelector("i").classList.contains("fa-pause")){
        audio.pause();
        btnp.querySelector("i").classList.remove("fa-pause");
        btnp.querySelector("i").classList.add("fa-play");
        img.classList.remove("play");
    }
    console.log(this);
});
    
    
   


prevsong.addEventListener("click",function(){
    index--;
    if(index<=-1){
        index=index+songs.length;
        }
        else{
            index;
        }
    playsong(songs[index]);
    document.title=songs[index];
    console.log(this);
});

nextsong.addEventListener("click",function(){
    index++;
    if(index>=songs.length){
    index=index-songs.length;
    }
    else{
        index;
    }
   document.title=songs[index];
    
    playsong(songs[index]);
    //console.log(this.style.backgroundColor="red");
});


    
            
    
    

    
