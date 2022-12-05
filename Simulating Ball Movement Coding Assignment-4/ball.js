//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 50;
var positionX = 0;
var reverse = false;
var ball = document.getElementById('ball');

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  let Xmin = 0;
  let Xmax = 1280; 

  if(reverse){
  positionX = positionX - velocity;
  ball.style.left = positionX +'px';
 
  }
  else{
  positionX = positionX + velocity;
  ball.style.left = positionX +'px';
  
  }
if(positionX > Xmax || positionX === Xmin){
  reverse = !reverse;

}
}
//ball.style.top = positionX + 'px';
//ball.style.left = positionY + 'px';



// This call the moveBall function every 100ms
setInterval(moveBall, 100);
