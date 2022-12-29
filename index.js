var playerName1;
var playerName2;

document.querySelector(".inputName").addEventListener("click",firstPlayerNameInput);
function firstPlayerNameInput(){
 playerName1 = prompt("First Player Name");
 playerName1 = playerName1.slice(0,1).toUpperCase() + playerName1.slice(1,(playerName1.length)).toLowerCase();
  document.querySelector(".firstPlayerName").innerHTML = playerName1;
}

document.querySelector(".inputName").addEventListener("click",secondPlayerNameInput);
function secondPlayerNameInput(){
  playerName2 = prompt("Second Player Name");
  playerName2 = playerName2.slice(0,1).toUpperCase() + playerName2.slice(1,(playerName2.length)).toLowerCase();
  document.querySelector(".secondPlayerName").innerHTML = playerName2;
}
  
document.querySelector(".rollButton").addEventListener("click",function(){
var player1 = Math.floor((Math.random()*6)+1);
document.querySelector("img").setAttribute("src","images/dice"+player1+".png");
var player2 = Math.floor((Math.random()*6)+1);
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+player2+".png");
if(player1 > player2){
  document.querySelector("h1").innerHTML = playerName1 + " wins!";
}
else if(player2 > player1){
  document.querySelector("h1").innerHTML = playerName2 + " wins!";
}
else if (player1 === player2){
  document.querySelector("h1").innerHTML = "Draw!";
}
});


// if (player1 === 1){
//   document.querySelector("img").setAttribute("src","images/dice1.png");
// }
// else if (player1 === 2){
//   document.querySelector("img").setAttribute("src","images/dice2.png");
// }
// else if (player1 === 3){
//   document.querySelector("img").setAttribute("src","images/dice3.png");
// }
// else if (player1 === 4){
//   document.querySelector("img").setAttribute("src","images/dice4.png");
// }
// else if (player1 === 5){
//   document.querySelector("img").setAttribute("src","images/dice5.png");
// }
// else{
// document.querySelector("img").setAttribute("src","images/dice6.png");
// }
//
// if (player2 === 1){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
// }
// else if (player2 === 2){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
// }
// else if (player2 === 3){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
// }
// else if (player2 === 4){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
// }
// else if (player2 === 5){
//   document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
// }
// else{
// document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
// }
