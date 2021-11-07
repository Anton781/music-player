let x=document.querySelector(".progress_bar");
gsap.from(".btn", {
    opacity: 0, 
    y: 600, 
    stagger:0.5
  });

  gsap.from(".imgg", {
    opacity: 0, 
    x: -600, 
    duration:3
  });

  gsap.from(".btns",{
    y: '-100%',
    strength:1,
    ease: "bounce",
    duration:1
  });
  x.addEventListener("click",function(e){
    
       let y=e.offsetX;
       let percent=y/170*100+"%";
      
       audio.currentTime=y*170/100;
       progress.style.width=percent;
      
    });

  