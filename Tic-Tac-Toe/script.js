const boxes = document.querySelectorAll(".box");
const msgcontainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const newbtn = document.querySelector("#newbtn");
let turn = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disablebox = (box) => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = (box) => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetgame = () => {
  turn = true;
  enableBox();
  msgcontainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebox();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
