let resultDisplay = document.getElementById("resultaat");
const gameGrid = document.getElementById("spel");

let p1Choice = null;
let p2Choice = null;

function GetUserChoice(choice) {
    if (p1Choice === null) {
        p1Choice = choice;
        resultDisplay.innerHTML = "Speler 2, maak een keuze!";
    } else {
        p2Choice = choice;
    }

    if (p1Choice !== null && p2Choice !== null) {
        getResult(p1Choice, p2Choice);
    }
}

const getResult = (k1, k2) => {
    if (k1 === k2) {
        resultDisplay.innerHTML = "Gelijkspel";
    } else if (k1 === "schaar" && k2 === "steen") {
        resultDisplay.innerHTML = "Speler 2 wint!";
    } else if (k1 === "steen" && k2 === "papier") {
        resultDisplay.innerHTML = "Speler 2 wint!";
    } else if (k1 === "papier" && k2 === "schaar") {
        resultDisplay.innerHTML = "Speler 2 wint!";
    } else {
        resultDisplay.innerHTML = "Speler 1 wint!";
    }

    p1Choice = null;
    p2Choice = null;
};