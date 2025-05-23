let btn = document.querySelectorAll(".grid-box button");
let winnerMsg = document.querySelector(".player-turn h2");
let playerO = document.querySelector(".playerO")
let playerX = document.querySelector(".playerX")
let restart = document.querySelector("#restart");
let newGame = document.querySelector("#new-game");

let turn = true;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
playerO.style.backgroundColor = "#eee";
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn) {
      playerX.style.backgroundColor = "#eee";
      playerO.style.backgroundColor = "#eee5";
      btn.innerText = "O";
      btn.style.color = "#16D9EB";
      turn = false;
    } else {
      playerX.style.backgroundColor = "#eee5";
      playerO.style.backgroundColor = "#eee";
      btn.innerText = "X";
      btn.style.color = "#c53030";
      turn = true;
    }
    btn.disabled = true;
    checkwinner();
  });
});

function checkwinner() {
  for (let pattern of winPattern) {
    let pos1val = btn[pattern[0]].innerText;
    let pos2val = btn[pattern[1]].innerText;
    let pos3val = btn[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        winnerMsg.style.display = "block";
        winnerMsg.innerText = `${pos1val} winner!`;
        if(pos1val === "O"){
            winnerMsg.style.color = "#16D9EB";
        }else {
            winnerMsg.style.color = "#c53030";
            winnerMsg.style.backgroundColor = "#fed7d7"
        }
        disableBtn();
      }
    }
  }
};

function disableBtn(){
    for( let btns of btn){
        btns.disabled = true;
    }
}
function enableBtn(){
    for( let btns of btn){
        btns.disabled = false;
    }
}

newGame.addEventListener("click", resetGame);
restart.addEventListener("click", resetGame);

function resetGame(){
    turn = true;
    winnerMsg.style.display = "none";
    for(let btns of btn){
        btns.innerText = "";
    }
    enableBtn();
}