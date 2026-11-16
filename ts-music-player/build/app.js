"use strict";
const catScreen = document.querySelector("#screen");
let catMood = 10;
let catEnergy = 10;
let catHunger = 1;
function feed() {
    if (catMood < 10) {
        catMood += 1;
    }
    if (catHunger > 0) {
        catHunger -= 1;
    }
}
function play() {
    if (catMood < 10) {
        catMood += 1;
    }
    catEnergy -= 1;
}
function pet() {
    if (catMood < 10) {
        catMood += 1;
    }
    if (catEnergy < 10) {
        catEnergy += 1;
    }
    catHunger += 1;
}
function statuscat(energy, mood, hunger) {
    if (energy < 2 || mood < 2 || hunger > 8) {
        return "Unhappy";
    }
    if (energy < 4 || mood < 4 || hunger > 6) {
        return "Okay";
    }
    return "Happy";
}
function updateCat() {
    if (catMood > 0) {
        catMood -= 1;
    }
    if (catEnergy > 0) {
        catEnergy -= 1;
    }
    if (catHunger < 10) {
        catHunger += 1;
    }
}
function getScreen() {
    if (catHunger >= 10) {
        return "Cat died of hunger";
    }
    if (catEnergy <= 0) {
        return "Cat died from loss of energy";
    }
    return `Cat mood ${catMood} <br> Cat energy ${catEnergy} <br> Cat hunger ${catHunger} <br> ${statuscat(catEnergy, catMood, catHunger)}`;
}
function gameTick() {
    console.log("Game Tick");
    updateCat();
    catScreen.innerHTML = getScreen();
}
window.addEventListener("load", () => {
    gameTick();
    setInterval(gameTick, 1500);
});
const btnFeed = document.querySelector("#btn-feed");
if (btnFeed) {
    btnFeed.addEventListener("click", () => {
        feed();
        catScreen.innerHTML = getScreen();
    });
}
const btnPlay = document.querySelector("#btn-play");
if (btnPlay) {
    btnPlay.addEventListener("click", () => {
        play();
        catScreen.innerHTML = getScreen();
    });
}
const btnPet = document.querySelector("#btn-pet");
if (btnPet) {
    btnPet.addEventListener("click", () => {
        pet();
        catScreen.innerHTML = getScreen();
    });
}
//# sourceMappingURL=app.js.map