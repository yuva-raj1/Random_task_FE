let r1=1,r2=1;
let res=document.getElementById("result");
let turn=1;
let game=false;
function rollDice1(){
if(game || turn!==1){
    if(game){
        alert("Click paly again..! to continue the game")
    }
    else{
            alert("Its turn for player 2")
    }return;
}

r1=Math.floor(Math.random()*6)+1;
let player1=document.getElementById("dice1");
player1.src=`./images/Dice${r1}.png`;
 
turn=2;
// check();
}
function rollDice2(){
if(game || turn!==2){
    if(game){
        alert("Click paly again..! to continue the game")
    }
    else{
     alert("Player 1 should play first..!")
    }
    return;
}
let player2=document.getElementById("dice2");
r2=Math.floor(Math.random()*6)+1;
player2.src=`./images/Dicee${r2}.png`;
check();
game=true;
}
function check(){

if(r1>r2)
{
res.innerText="Player 1 wins...!";
}
else if(r1<r2){
    res.innerText="Player 2 wins..!"
}
else{
    res.innerText="Its a draw";
}
}
function playAgain() {
    r1 = 1;
    r2 = 1;
    turn=1;
    game=false;
    document.getElementById("dice1").src = "./images/Dice1.png";
    document.getElementById("dice2").src = "./images/Dicee1.png";
    document.getElementById("result").innerText = "";
}
