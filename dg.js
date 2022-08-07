var p1 = "Player 1";
var p2 = "Player 2";
var initialp1 = document.getElementById("p1");
var initialp2 = document.getElementById("p2");

function editNames() {
    p1 = prompt("Enter first player's name.");
    p2 = prompt("Enter second player's name.");
    // document.querySelector("#p1").innerHTML = p1;
    // document.querySelector("#p2").innerHTML = p2;
    // document.getElementById("p1").innerText = p1;
    // document.getElementById("p2").innerText = p2;
    initialp1.innerText = p1;
    initialp2.innerText = p2;
}

function rollthedice(){
    var random1 = Math.floor(Math.random()*6) + 1;
    var random2 = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").setAttribute("src", "dice" + random1 +".jpg");
    document.querySelector(".img2").setAttribute("src", "dice" + random2 +".jpg");
    var result = document.getElementById("result");
    if(random1 === random2){
        result.innerText = "Draw!";
    }
    else if(random1 < random2){
        result.innerText = p2 + " won!";
    }
    else{
        result.innerText = p1 + " won!"
    }
}