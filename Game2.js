var canvas = document.getElementById("Canvas");
var ctx= canvas.getContext('2d');
var cl1 = Math.floor(Math.random()*255);
var cl2 = Math.floor(Math.random()*255);
var cl3 = Math.floor(Math.random()*255);
var planeColor1 = "rgb("+(255-cl1)+","+(255-cl2)+","+(255-cl3)+")";
var planeColor2 = "rgb("+cl1+","+cl2+","+cl3+")";
var life = 100;
var time = 1*60;
const sec = 50/1000;
var score = 0;
var planeX = -5;
var planeY = -5;
var bluetX = planeX+45;
var bluetY = planeX+45;
var bluetXSp = Math.floor(Math.random()*5)+10;
var bluetYSp = Math.floor(Math.random()*5)+10;
var enemyW = Math.floor(Math.random()*20)+1;
var enemyH = Math.floor(Math.random()*40)+30;
var enemyX = Math.floor(Math.random() * 20)+10;
var enemyY = Math.floor(Math.random() * 20);
var enemy2X = Math.floor(Math.random() * 20)+70;
var enemy2W = Math.floor(Math.random() * 20)+1;
var enemy2H = Math.floor(Math.random() * 40) + 30;
var enemy2Y = canvas.height-( Math.floor(Math.random()*20)+enemy2H+30);
var body = document.getElementById("body");
var restart = document.getElementById("restart");
var Total = document.getElementById("Total");
var Mute = document.getElementsByClassName("Adc")[0];
var Play = document.getElementsByClassName("Adc")[1];
var lfPrgs = document.getElementsByTagName("progress")[0];


 document.getElementById("start").onclick = function() {
   
   playMusic();
  this.style.display = "none";
  body.style.display = "block";
var stop = setInterval(control,50);


//Music control 
Mute.onclick = function(){
  pauseMusic();
}
Play.onclick = function(){
  playMusic();
}


  function control(){
    
    var img = new Image();
    img.src = "Night-Stars-Png-Clip-Art-Library-lEeJcl2T5tunfM_copy_384x216.png";
    img.onload = function(){
ctx.drawImage(img,0,0,canvas.width,canvas.height);
if (enemyX > canvas.width || enemy2X > canvas.width) {
  life = 50;
}
var timen2 = Math.ceil(time)-1;
    if(enemyX>=canvas.width && enemy2X>=canvas.width){
      life = 0;
      clearInterval(stop);
      alert("Game Over");
Total.innerHTML = "Remaining target : "+(250-score)+"<br />" +"Remaining time : "+ timen2 + " s" + "<br />"+ " Your life : "+ life + "%" +"<hr />" + "Total score : "+ (score-(250-score)+timen2+life);
 body.style.display = "none";
restart.style.display = "block";
}
lfPrgs.setAttribute("value",life);
restart.onclick = function(){
 location.reload();
}
    timer();
 function timer(){
      time-=sec;
    var timen = time.toFixed(3);
    //console.log(timen);
      document.getElementById("time").innerHTML = "Time : " + timen + " s";
      if (timen <= 0 && score< 250){
        clearInterval(stop);
        alert("Time out");
  Total.innerHTML = "Remaining target : "+(250-score) +"<br />" +"Remaining time : "+ timen2 + " s" + "<br />"+ " Your life : "+ life + "%" +"<hr />"+ "Total score : "+ (score-(250-score)+timen2+life);
 body.style.display = "none";
restart.style.display = "block";
      }
    }
var mxScr = Math.ceil(score+time);
    if(score >= 250 && time >= 0){
      clearInterval(stop);
      alert("You win");
 Total.innerHTML = "Extra gain : "+(Math.abs(250-score))+ "<br />"+"Remaining time : "+ timen2 + " s" + "<br />"+ " Your life : "+ life + "%" + "<hr />" + "Total score : "+ (score-(250-score)+timen2+life);
body.style.display = "none";
restart.style.display = "block";
    }
document.getElementById("score").innerHTML = "Your score : "+ score ;
  // console.log(planeY+24,enemyY+enemyH);
    if (bluetX < canvas.width-enemyX) {
      bluetX += 10;
      if (planeY + 25 >= enemyY && planeY + 24 <= enemyY + enemyH) {
        if (bluetX >= canvas.width - enemyX) {
          enemyW -= 1.5;
          score += 1;
        }
        else { 
          enemyX++;
        }
      }
      else {
        enemyX++;
      }
    }
    else {
      bluetX = planeX+45;
    }
    if(enemyW<1){
      score += 10;
      enemyX=10;
      enemyW = Math.floor(Math.random()*30)+1;
    }
    else{
      enemyX++;
    }
 //console.log(planeY+153,enemy2Y,enemy2Y+enemy2H);
    //bulet 2 start
 if (bluetY < canvas.width - enemy2X) {
   bluetY += 10;
   if (planeY + 153 >= enemy2Y && planeY + 153 <= enemy2Y + enemy2H) {
     if (bluetY >= canvas.width - enemy2X) {
       enemy2W -= 1.5;
       score += 1;
     }
     else {
       enemy2X++;
     }
   }
   else {
     enemy2X++;
   }
 }
 else {
   bluetY = planeX + 45;
 }
 if (enemy2W < 1) {
   score+= 10;
   enemy2X = 10;
   enemy2W = Math.floor(Math.random() * 30)+1;
 }
 else {
   enemy2X++;
 }
    circle(bluetX, planeY+15, 7, "#090");
    circle(bluetY, planeY+148, 7, "#090");
    document.getElementsByTagName("button")[0].onclick = function(){
      planeX -= canvas.width/15;
      plane();
    }
    document.getElementsByTagName("button")[1].onclick = function(){
    planeY -= canvas.width/15;
    plane()
    }
    document.getElementsByTagName("button")[2].onclick = function(){
    planeX += canvas.width/15;
    plane()
    }
    document.getElementsByTagName("button")[3].onclick = function(){
    planeY += canvas.width/15;
    plane()
    }
    plane()
    enemy(enemyX,enemyY,enemyW,enemyH);
    enemy(enemy2X,enemy2Y,enemy2W,enemy2H);
  }
}
}
   function plane(){
   planePsr2(planeX,planeY,planeColor2);
   planePsr1(planeX,planeY,planeColor2);
   planeFlsW1(planeX,planeY,planeColor1);
   planeFlsW2(planeX,planeY,planeColor1);
   planeExW1(planeX,planeY,planeColor2);
   planeExW2(planeX,planeY,planeColor2);
   planeW1(planeX,planeY,planeColor2);
   planeW2(planeX,planeY,planeColor2);
   planeDs1(planeX,planeY,planeColor1);
   planeDs2(planeX,planeY,planeColor1);
   planeR1(planeX,planeY,planeColor1);
   planeR2(planeX,planeY,planeColor1);
   planeBody(planeX,planeY,planeColor1);
   pailot(planeX,planeY);
 planeDs3(planeX,planeY,"rgb("+Math.floor(Math.abs(Math.cos(cl1))*255)+","+Math.floor(Math.abs(Math.cos(cl2))*255)+","+Math.floor(Math.abs(Math.cos(cl3))*255)+")");
  }
 // console.log(Math.floor(Math.abs(Math.cos(cl1))*255),cl1);
  function enemy(Ex,Ey,Eh,Ew){
    square(canvas.width-Ex,Ey,Eh,Ew,"#afd");
  }
var Audio = document.getElementById("Music");
function playMusic(){
  Audio.play();
  Audio.loop = true;
  Mute.style.display = "block";
  Play.style.display = "none";
}
function pauseMusic(){
  Audio.pause();
  Audio.loop = false;
  Mute.style.display = "none";
  Play.style.display = "block";
}
