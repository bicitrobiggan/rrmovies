window.onload = function(){
  document.getElementById("body").style.display = "block";
}
const name = document.querySelector("#name");
const lib = document.querySelectorAll(".library")[0];
const banner = document.getElementsByClassName("banner");
const info = document.querySelector(".info");
const Header1 = document.getElementById("Header1");
var img = new Image();
function Random(min,max){
  return (((min+Math.random()*max)/2)+(min+(Math.random()*(max-(2*min))))/2);
}
img.src = "Moon.jpg";
lib.appendChild(img);
for(var i = 0; i <= 125; i++){
  lib.innerHTML += "<div class='banner'></div>";
 // console.log(i);
banner[i].style.animationDelay = (Math.random()*12.5)+"s";
banner[i].style.animationDuration = (Random(1,3))+"s";
banner[i].style.transform = "scale("+(Math.random())+")";
}
name.innerHTML = prompt("Please enter your name");
info.style.marginLeft = ((innerWidth/2)-(info.offsetWidth/2))+"px";
Header1.innerHTML = Header1.textContent.replace(/\S/g, "<div class='span'>$&</div>");
const span = document.querySelectorAll(".span");
for(var n = 0; n < span.length; n++){
  //console.log(span[n]);
 span[n].style.animationDelay =  n*0.05+"s";
}