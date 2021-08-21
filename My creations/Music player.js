const container = document.querySelectorAll(".container")[0];
var idnum = 1;
const imgCont = document.getElementsByClassName("imgCont")[0];
const loop = document.getElementById("loop");
const volume = document.getElementById("volume");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const duration = document.getElementById("duration");
const drlblsrt = document.getElementById("drlblsrt");
const drlblend = document.getElementById("drlblend");
const playbtn = document.getElementById("playbtn");
const playFont = document.getElementById("playFont");
const music = document.getElementById("music");
const previous_10 = document.getElementById("previous_10")
const next_10 = document.getElementById("next_10");
var drval = 0;
//var,const

if (window.innerHeight < window.innerWidth) {
    container.classList.toggle("pc", true);
  } else {
    container.classList.toggle("pc", false);
  }

//audio

var audio = new Array;

audio = ["Music1.mp3","Music2.mp3","Music3.mp3"
  ]

//img

var Img = new Array;

Img = ["img1.jpg",
        "img2.jpg",
        "img3.jpg"];

// functions()
music.loop = false;
function vivo(){
  document.body.style.backgroundImage = "url('" + Img[idnum - 1] + "')";

  imgCont.style.backgroundImage = "url('" + Img[idnum - 1] + "')";
  music.setAttribute("src", audio[idnum - 1]);
  if(playFont.style.clipPath !== "polygon(0% 0%, 33% 0%, 33% 100%, 67% 100%, 67% 0%, 100% 0%, 100% 100%, 0% 100%)"){
  music.pause();
} else {
  music.play();
}
}
vivo();
  
  previous_10.addEventListener("click",function(){
    if(music.currentTime > 10){
    music.currentTime -= 10;
    }
    else{
      music.currentTime = 0;
    }
  });
  
  next_10.addEventListener("click",function(){
    music.currentTime += 10;
  });
  
  
  loop.addEventListener("click",function() {
    if(music.loop){
      music.loop = false;
      this.style.color = "#7C7C7C";
    } else {
      music.loop = true;
      this.style.color = "#FF3AD1";
    }
  });
  
  playbtn.addEventListener("click", playPas);
  
  previous.addEventListener("click",function(){
    if(idnum == 1){
      idnum = Img.length;
    }
    else{
      idnum--;
    }
    vivo();
    playbtn.addEventListener("click", playPas);
  });
  next.addEventListener("click", function() {
    if (idnum == Img.length) {
      idnum = 1;
    }
    else {
      idnum++;
    }
    vivo();
    
    playbtn.addEventListener("click", playPas);
  });
  
  var d = null;
  
  function main(){
    
    var tog = Math.floor(music.duration/60);
    var tog2 = Math.floor(music.duration%60);
    
    drlblend.innerHTML = tog+":"+tog2+":"+(Math.floor((music.duration - Math.floor(music.duration))*1000));
  
  duration.value = (music.currentTime/music.duration)*100;
    
  drval = music.currentTime;
  
 var drvalp = Math.floor((drval - Math.floor(drval))*1000);

   drlblsrt.innerHTML = Math.floor(drval/60)+":"+(Math.floor(drval%60)) + ":" + Math.floor(drvalp); 
  }
  function playPas() {
    setInterval(inte,100);
    if (music.paused) {
      music.play();
      playFont.style.clipPath = "polygon(0% 0%, 33% 0%, 33% 100%, 67% 100%, 67% 0%, 100% 0%, 100% 100%, 0% 100%)";
imgCont.style.animationPlayState = "running";
var anr = setInterval(main,200);
    } else {
      music.pause();
      playFont.style.clipPath = "polygon(75% 0%, 75% 0%, 0% 52%, 75% 100%, 75% 100%)";
imgCont.style.animationPlayState = "paused";
clearInterval(anr);
    }
  }
  function inte() {
    valvol = parseInt(volume.value);
    music.volume = (valvol/100);
  }