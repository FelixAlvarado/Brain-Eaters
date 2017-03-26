let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");
let img = new Image();
img.src = "zombie.gif";
let death = new Image();
death.src = "death.jpg";
let blue = new Image();
blue.src = "background.jpg";
let grass = new Image();
grass.src ="grass.jpg";
let hero = new Image();
hero.src ="hero.jpg";
let first = (Math.ceil(Math.random()*4))*60;
let second = ((Math.ceil(Math.random()*4))+4)*60;
let third = (Math.ceil(Math.random()*4))*60;
let fourth = ((Math.ceil(Math.random()*4))+4)*60;
let fifth = (Math.ceil(Math.random()*4))*60;
let sixth = ((Math.ceil(Math.random()*4))+4)*60;
// objects on window
let h1 = {
  X: 240,
  Y: 60
}
let z1 = {
  X: 120,
  Y: 420
}
let z2 = {
  X: 420,
  Y: 420
}

//making the game field
function makeField() {
  context.drawImage(img, z1.X, z1.Y, 60,60);
 context.drawImage(img, z2.X, z2.Y, 60,60);
   context.drawImage(hero, h1.X, h1.Y, 60,60);
  for (let i = 0;i < 600; i = i + 60){
  context.drawImage(grass,i,0, 60, 60);
  context.drawImage(grass,i,540, 60, 60);
  context.drawImage(grass,i,480, 60, 60);
  context.drawImage(grass,0,i, 60, 60);
  context.drawImage(grass,540,i, 60, 60);
}
for (let i = 0;i < 600; i = i + 60){
  if (i == first || i == second){
    continue
  }
  context.drawImage(grass,i,120, 60, 60);
}
for (let i = 0;i < 600; i = i + 60){
  if (i == third || i == fourth){
    continue
  }
  context.drawImage(grass,i,240, 60, 60);
}
for (let i = 0;i < 600; i = i + 60){
  if (i == fifth || i == sixth){
    continue
  }
  context.drawImage(grass,i,360, 60, 60);
}

}

window.addEventListener('load', () => {
    makeField();
 });
//player death
function gameOver(){
  if ((h1.X == z1.X && h1.Y == z1.Y) || (h1.X == z2.X && h1.Y == z2.Y)){
  context.drawImage(death, 0, 0, 600,600);
  alert('Your player died a horrible death!');
  }
}
 // moving left
 document.addEventListener('keydown', (e)=>{
if(e.keyCode==37){
  if (h1.X - 60 < 60){
    alert('Out of Bounds!')
  }
  else if (((h1.X - 60 != first) && (h1.X - 60 != second) && h1.Y == 120) ||((h1.X - 60 != third) && (h1.X - 60 != fourth) && h1.Y == 240) ||((h1.X - 60 != fifth) && (h1.X - 60 != sixth) && h1.Y == 360) ){
    alert ('Out of Bounds!')
  }
  else{
h1.X = h1.X - 60;
  z1Move();
  z2Move();
   context.drawImage(blue, h1.X + 60, h1.Y, 60,60);
makeField();
}
gameOver();
}
 });
 //moving right
 document.addEventListener('keydown', (e)=>{
if(e.keyCode==39){
  if (h1.X + 60 > 480){
    alert('Out of Bounds!')
  }
  else if (((h1.X + 60 != first) && (h1.X + 60 != second) && h1.Y == 120) ||((h1.X + 60 != third) && (h1.X +60 != fourth) && h1.Y == 240) ||((h1.X + 60 != fifth) && (h1.X + 60 != sixth) && h1.Y == 360) ){
    alert ('Out of Bounds!')
  }
  else{
h1.X = h1.X + 60;
  z1Move();
    z2Move();
   context.drawImage(blue, h1.X - 60, h1.Y, 60,60);
makeField();
}
gameOver();
}
 });
 //moving up
 document.addEventListener('keydown', (e)=>{
if(e.keyCode==38){
  if (h1.Y - 60 < 60){
    alert('Out of Bounds!')
  }
  else if (((h1.X != first) && (h1.X != second) && (h1.Y - 60 == 120)) ||((h1.X != third) && (h1.X != fourth) && (h1.Y - 60 == 240)) ||((h1.X != fifth) && (h1.X != sixth) && (h1.Y - 60 == 360)) ){
    alert ('Out of Bounds!')
  }
  else{
h1.Y = h1.Y - 60;
  z1Move();
    z2Move();
   context.drawImage(blue, h1.X, h1.Y + 60, 60,60);
makeField();
}
gameOver();
}
 });
 //moving down
 document.addEventListener('keydown', (e)=>{
if(e.keyCode==40){
  if (h1.Y + 60 > 420){
    alert('Out of Bounds!')
  }
  else if (((h1.X != first) && (h1.X != second) && (h1.Y + 60 == 120)) ||((h1.X != third) && (h1.X != fourth) && (h1.Y + 60 == 240)) ||((h1.X != fifth) && (h1.X != sixth) && (h1.Y + 60 == 360)) ){
    alert ('Out of Bounds!')
  }
  else{
h1.Y = h1.Y + 60;
  z1Move();
    z2Move();
   context.drawImage(blue, h1.X, h1.Y - 60, 60,60);
makeField();
}
gameOver();
}
 });

 //zombie1 move
 function z1Move(){
   gameOver();
   //if zombie is below player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (z1.Y > h1.Y){
  //player moving through opening
  if ((z1.X != z2.X || z1.Y - 60 != z2.Y) && (z1.Y ==120 || z1.Y == 240 || z1.Y == 360)){
    z1.Y = z1.Y - 60;
       context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
  }
  //zombie moving into opening
 else if (((((z1.X == first) || (z1.X == second)) && (z1.Y - 60 == 120)) ||(((z1.X == third) || (z1.X == fourth)) && (z1.Y - 60 == 240)) ||(((z1.X == fifth) || (z1.X == sixth)) && (z1.Y - 60 == 360))) ){
   z1.Y = z1.Y - 60;
      context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
  }
  //zombie moving right toward opening
 else if ((z1.X < first && z1.Y == 180) || (z1.X < third && z1.Y == 300 ) || (z1.X < fifth && z1.Y == 420)){
  if(z1.X + 60 != z2.X || z1.Y != z2.Y){
    z1.X = z1.X + 60;
       context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
}
else if(z1.X - 60 != z2.X || z1.Y != z2.Y){
  z1.X = z1.X - 60;
     context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
}
else{
  z1.Y = z1.Y + 60;
  context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
}
 }
 // zombie moving left toward opening
else if ((z1.X > first && z1.Y == 180) || (z1.X > third && z1.Y == 300 ) || (z1.X > fifth && z1.Y == 420)){
  if(z1.X - 60 != z2.X || z1.Y != z2.Y){
    z1.X = z1.X - 60;
       context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
}
else if(z1.X + 60 != z2.X || z1.Y != z2.Y){
  z1.X = z1.X + 60;
     context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
}
else{
  z1.Y = z1.Y + 60;
  context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
}
 }
 else{
   z1.Y = z1.Y + 60;
      context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
 }
 }
 //if zomebie is above player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
else if (z1.Y < h1.Y){
   //player moving through opening
   if ((z1.X != z2.X || z1.Y + 60 != z2.Y) && (z1.Y ==120 || z1.Y == 240 || z1.Y == 360)){
     z1.Y = z1.Y + 60;
        context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
   }
   //zombie moving into opening
  else if (((((z1.X == first) || (z1.X == second)) && (z1.Y + 60 == 120)) || (((z1.X == third) || (z1.X == fourth)) && (z1.Y + 60 == 240)) ||(((z1.X == fifth) || (z1.X == sixth)) && (z1.Y + 60 == 360))) && (z1.X != z2.X || z1.Y + 60 != z2.Y) ){
    z1.Y = z1.Y + 60;
       context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
   }
   //zombie moving right toward opening
else  if ((z1.X < first && z1.Y == 60) || (z1.X < third && z1.Y == 180 ) || (z1.X < fifth && z1.Y == 300)){
   if(z1.X + 60 != z2.X || z1.Y != z2.Y){
     z1.X = z1.X + 60;
        context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
 }
 else if(z1.X - 60 != z2.X || z1.Y != z2.Y){
   z1.X = z1.X - 60;
      context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
 }
 else{
   z1.Y = z1.Y - 60;
   context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
 }
  }
  // zombie moving left toward opening
  else if ((z1.X > first && z1.Y == 60) || (z1.X > third && z1.Y == 180 ) || (z1.X > fifth && z1.Y == 300)){
   if(z1.X - 60 != z2.X || z1.Y != z2.Y){
     z1.X = z1.X - 60;
        context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
 }
 else if(z1.X + 60 != z2.X || z1.Y != z2.Y){
   z1.X = z1.X + 60;
      context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
 }
 else{
   z1.Y = z1.Y - 60;
   context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
 }
  }
  else {
    z1.Y = z1.Y - 60;
       context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
  }
  }
  //if zombie is in the same line as player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
else  if (z1.Y == h1.Y){
    if ((z1.X != z2.X || z1.Y - 60 != z2.Y) && (z1.Y ==120 || z1.Y == 240 || z1.Y == 360)){
      z1.Y = z1.Y - 60;
         context.drawImage(blue, z1.X, z1.Y + 60, 60,60);
    }else if ((z1.X == z2.X && z1.Y - 60 == z2.Y) && (z1.Y ==120 || z1.Y == 240 || z1.Y == 360)){
      z1.Y = z1.Y + 60;
         context.drawImage(blue, z1.X, z1.Y - 60, 60,60);
    }
    else if(z1.X < h1.X && (z1.X + 60 != z2.X || z1.Y != z2.Y)){
      z1.X = z1.X + 60;
         context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
    } else if (z1.X < h1.X && (z1.X + 60 == z2.X && z1.Y == z2.Y)) {
      z1.X = z1.X - 60;
         context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
    }
    else if(z1.X > h1.X && (z1.X - 60 != z2.X || z1.Y != z2.Y)){
      z1.X = z1.X - 60;
         context.drawImage(blue, z1.X + 60, z1.Y, 60,60);
    } else if (z1.X > h1.X && (z1.X - 60 == z2.X && z1.Y == z2.Y)) {
      z1.X = z1.X + 60;
         context.drawImage(blue, z1.X - 60, z1.Y, 60,60);
    }
  }
 }


//zombie 2 move!!!!!!!!!!!!!!!!!!!!!!!
//zombie1 move
function z2Move(){
  gameOver();
  //if zombie is below player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (z2.Y > h1.Y){
 //player moving through opening
 if ((z1.X != z2.X || z2.Y - 60 != z1.Y) && (z2.Y ==120 || z2.Y == 240 || z2.Y == 360)){
   z2.Y = z2.Y - 60;
      context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
 }
 //zombie moving into opening
else if (((((z2.X == first) || (z2.X == second)) && (z2.Y - 60 == 120)) ||(((z2.X == third) || (z2.X == fourth)) && (z2.Y - 60 == 240)) ||(((z2.X == fifth) || (z2.X == sixth)) && (z2.Y - 60 == 360))) ){
  z2.Y = z2.Y - 60;
     context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
 }
 //zombie moving right toward opening
else if ((z2.X < second && z2.Y == 180) || (z2.X < fourth && z2.Y == 300 ) || (z2.X < sixth && z2.Y == 420)){
 if(z2.X + 60 != z1.X || z1.Y != z2.Y){
   z2.X = z2.X + 60;
      context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
}
else if(z2.X - 60 != z1.X || z1.Y != z2.Y){
 z2.X = z2.X - 60;
    context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
}
else{
 z2.Y = z2.Y + 60;
 context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
}
}
// zombie moving left toward opening
else if ((z2.X > second && z2.Y == 180) || (z2.X > fourth && z2.Y == 300 ) || (z2.X > sixth && z2.Y == 420)){
 if(z2.X - 60 != z1.X || z1.Y != z2.Y){
   z2.X = z2.X - 60;
      context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
}
else if(z2.X + 60 != z1.X || z1.Y != z2.Y){
 z2.X = z2.X + 60;
    context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
}
else{
 z2.Y = z2.Y + 60;
 context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
}
}
else{
  z2.Y = z2.Y + 60;
     context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
}
}
//if zomebie is above player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
else if (z2.Y < h1.Y){
  //player moving through opening
  if ((z2.X != z1.X || z2.Y + 60 != z1.Y) && (z2.Y ==120 || z2.Y == 240 || z2.Y == 360)){
    z2.Y = z2.Y + 60;
       context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
  }
  //zombie moving into opening
 else if (((((z2.X == first) || (z2.X == second)) && (z2.Y + 60 == 120)) || (((z2.X == third) || (z2.X == fourth)) && (z2.Y + 60 == 240)) ||(((z2.X == fifth) || (z2.X == sixth)) && (z2.Y + 60 == 360))) && (z1.X != z2.X || z2.Y + 60 != z1.Y) ){
   z2.Y = z2.Y + 60;
      context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
  }
  //zombie moving right toward opening
else  if ((z2.X < second && z2.Y == 60) || (z2.X < fourth && z2.Y == 180 ) || (z2.X < sixth && z2.Y == 300)){
  if(z2.X + 60 != z1.X || z1.Y != z2.Y){
    z2.X = z2.X + 60;
       context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
}
else if(z2.X - 60 != z1.X || z1.Y != z2.Y){
  z2.X = z2.X - 60;
     context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
}
else{
  z2.Y = z2.Y - 60;
  context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
}
 }
 // zombie moving left toward opening
 else if ((z2.X > second && z2.Y == 60) || (z2.X > fourth && z2.Y == 180 ) || (z2.X > sixth && z2.Y == 300)){
  if(z2.X - 60 != z1.X || z1.Y != z2.Y){
    z2.X = z2.X - 60;
       context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
}
else if(z2.X + 60 != z1.X || z1.Y != z2.Y){
  z2.X = z2.X + 60;
     context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
}
else{
  z2.Y = z2.Y - 60;
  context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
}
 }
 else {
   z2.Y = z2.Y - 60;
      context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
 }
 }
 //if zombie is in the same line as player !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
else  if (z2.Y == h1.Y){
   if ((z1.X != z2.X || z2.Y - 60 != z1.Y) && (z2.Y ==120 || z2.Y == 240 || z2.Y == 360)){
     z2.Y = z2.Y - 60;
        context.drawImage(blue, z2.X, z2.Y + 60, 60,60);
   }else if ((z1.X == z2.X && z2.Y - 60 == z1.Y) && (z2.Y ==120 || z2.Y == 240 || z2.Y == 360)){
     z2.Y = z2.Y + 60;
        context.drawImage(blue, z2.X, z2.Y - 60, 60,60);
   }
   else if(z2.X < h1.X && (z2.X + 60 != z1.X || z1.Y != z2.Y)){
     z2.X = z2.X + 60;
        context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
   } else if (z2.X < h1.X && (z2.X + 60 == z1.X && z1.Y == z2.Y)) {
     z2.X = z2.X - 60;
        context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
   }
   else if(z2.X > h1.X && (z2.X - 60 != z1.X || z1.Y != z2.Y)){
     z2.X = z2.X - 60;
        context.drawImage(blue, z2.X + 60, z2.Y, 60,60);
   } else if (z2.X > h1.X && (z2.X - 60 == z1.X && z1.Y == z2.Y)) {
     z2.X = z2.X + 60;
        context.drawImage(blue, z2.X - 60, z2.Y, 60,60);
   }
 }
}
