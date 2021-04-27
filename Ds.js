function circle(x, y, r,color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(2+x,r+1+y);
  ctx.lineTo(3+x,r+y);
  ctx.lineTo(8+x,r+y);
  ctx.lineTo(8+x,r+1+y);
  ctx.lineTo(9+x,r+y);
  ctx.lineTo(12+x,r+y);
  ctx.lineTo(14+x,(r-2)+y);
  ctx.lineTo(12+x,(r-4)+y);
  ctx.lineTo(9+x,(r-4)+y);
  ctx.lineTo(8+x,(r-5)+y);
  ctx.lineTo(8+x,(r-4)+y);
  ctx.lineTo(3+x,(r-5)+y);
  ctx.lineTo(2+x,(r-5)+y);
  ctx.lineTo(2+x,r+1+y);
  ctx.fill();
}
  function square(x,y,width,height,color){
   ctx.fillStyle = color;
   ctx.fillRect(x,y,width,height);
   }