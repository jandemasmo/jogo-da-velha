
let positionBoard = ["", "", "", "", "", "", "", ""];
let playerTurn = "swords";

document.querySelectorAll("#board div").forEach((houseClicked) => {
    houseClicked.addEventListener("click", (house) => {
        soundClique()
        if (playerTurn === "shield") {

            if (!houseClicked.querySelector("img")) {
                let shield = document.createElement("img")
                shield.setAttribute("src", "shield.png");
                house.target.append(shield);

                positionBoard[house.target.dataset.key - 1] = `shield ${house.target.dataset.key}`;
                checkingWinner("shield")

                playerTurn = "swords";
            }


        } else if (playerTurn === "swords") {

            if (!houseClicked.querySelector("img")) {
                let swords = document.createElement("img")
                swords.setAttribute("src", "swords.png");
                house.target.append(swords);

                positionBoard[house.target.dataset.key - 1] = `swords ${house.target.dataset.key}`;
                checkingWinner("swords")

                playerTurn = "shield";
            }
        }
    })
})


function checkingWinner(turnPlayer) {
    if (positionBoard.includes("swords 1") && positionBoard.includes('swords 2') && positionBoard.includes("swords 3") || 
        positionBoard.includes("shield 1") && positionBoard.includes('shield 2') && positionBoard.includes("shield 3") ) {
        printWinner(turnPlayer);

    } else if (positionBoard.includes("swords 4") && positionBoard.includes('swords 5') && positionBoard.includes("swords 6") ||          
    positionBoard.includes("shield 4") && positionBoard.includes('shield 5') && positionBoard.includes("shield 6")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 7") && positionBoard.includes('swords 8') && positionBoard.includes("swords 9") ||          
    positionBoard.includes("shield 7") && positionBoard.includes('shield 8') && positionBoard.includes("shield 9")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 1") && positionBoard.includes('swords 4') && positionBoard.includes("swords 7") ||          
    positionBoard.includes("shield 1") && positionBoard.includes('shield 4') && positionBoard.includes("shield 7")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 2") && positionBoard.includes('swords 5') && positionBoard.includes("swords 8") ||          
    positionBoard.includes("shield 2") && positionBoard.includes('shield 5') && positionBoard.includes("shield 8")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 3") && positionBoard.includes('swords 6') && positionBoard.includes("swords 9") ||          
    positionBoard.includes("shield 3") && positionBoard.includes('shield 6') && positionBoard.includes("shield 9")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 1") && positionBoard.includes('swords 5') && positionBoard.includes("swords 9") ||          
    positionBoard.includes("shield 1") && positionBoard.includes('shield 5') && positionBoard.includes("shield 9")) {
        printWinner(turnPlayer);
    }
    else if (positionBoard.includes("swords 3") && positionBoard.includes('swords 5') && positionBoard.includes("swords 7") ||          
    positionBoard.includes("shield 3") && positionBoard.includes('shield 5') && positionBoard.includes("shield 7")) {
        printWinner(turnPlayer);
    }
    deuVelha()
}


function printWinner(winner){
    document.querySelector(".space_board").classList.add("block");
    document.querySelector(".winner img").setAttribute("src", `${winner}.png`);
    document.querySelector(".winner").style.display = "flex";
    document.querySelector(".new-game").style.display = "flex";
    soundSuccess()
}

function deuVelha(){
    if(!positionBoard.includes("")){
        document.querySelector(".winner img").setAttribute("src", "velha.gif");
        document.querySelector(".winner p").innerHTML = "DEU VELHA!";
        document.querySelector(".winner").style.display = "flex";
        document.querySelector(".new-game").style.display = "flex";
    }
}

function soundClique(){
    let sound = document.querySelector(".sound-clique")
    sound.play()
}
function soundSuccess(){
    let sound = document.querySelector(".sound-success")
    sound.play()
}