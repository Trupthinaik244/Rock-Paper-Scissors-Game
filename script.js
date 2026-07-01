function play(user){

let choices=["Rock","Paper","Scissors"];
let computer=choices[Math.floor(Math.random()*3)];

document.getElementById("userImg").src=user.toLowerCase()+".png";
document.getElementById("compImg").src=computer.toLowerCase()+".png";

let result="";

if(user==computer)
result="It's a Tie!";

else if(
(user=="Rock" && computer=="Scissors") ||
(user=="Paper" && computer=="Rock") ||
(user=="Scissors" && computer=="Paper")
)
result="You Win!";

else
result="Computer Wins!";

document.getElementById("result").innerHTML=result;
}