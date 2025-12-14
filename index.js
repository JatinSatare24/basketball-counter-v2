let homeScore = 0;
let guestScore = 0;

let homeCounter = document.getElementById("homeCounter");
let guestCounter = document.getElementById("guestCounter");

homeCounter.textContent = homeScore;
guestCounter.textContent = guestScore;



function homePlusOne() {
    homeScore++;
    homeCounter.textContent = homeScore;
}

function homePlusTwo() {
    homeScore += 2;
    homeCounter.textContent = homeScore;
}

function homePlusThree() {
    homeScore += 3;
    homeCounter.textContent = homeScore;
}

function guestPlusOne() {
    guestScore++;
    guestCounter.textContent = guestScore;
}

function guestPlusTwo() {
    guestScore += 2;
    guestCounter.textContent = guestScore;
}

function guestPlusThree() {
    guestScore += 3;
    guestCounter.textContent = guestScore;
}

function reset() {
    homeScore = 0
    homeCounter.textContent = homeScore;

    guestScore = 0;
    guestCounter.textContent = guestScore;

}

