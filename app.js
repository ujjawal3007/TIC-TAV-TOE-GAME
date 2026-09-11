let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameButton = document.querySelector("#new-but");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
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
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showwinner(pos1val);
            disablebox();
            return;
        }
    }
};

const showwinner = (winner) => {
    msg.innerText = `CONGRATULATION, ${winner} IS THE WINNER`;
    msgcontainer.classList.remove("hide");
};

const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const resetgame = () => {
    turnO = true;
    msgcontainer.classList.add("hide");
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("o", "x");
        box.disabled = false;
    });
};

newGameButton.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
