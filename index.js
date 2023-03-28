
const { Fighter, Enemy } = require("./src/Fighter.js");

const heracles = new Fighter("🧔 Heracles", 20, 6, "Fight !");
const nemeanLion = new Enemy("🦁 Nemean Lion", 11, 13);

console.log(`${heracles.name} : ${heracles.life} 💙`);
console.log(`${nemeanLion.name} : ${nemeanLion.life} 💙`);

let round = 1;

while (heracles.life > 0 && nemeanLion.life > 0) {
    console.log(`Round ${round}:`);
    console.log(`${heracles.name} attaque ${nemeanLion.name} !`);
    console.log(heracles.attack(nemeanLion));
    console.log(`${nemeanLion.name} attaque ${heracles.name} !`);
    console.log(nemeanLion.attack(heracles));
    console.log(`${heracles.name} : ${heracles.life} 💙`);
    console.log(`${nemeanLion.name} : ${nemeanLion.life} 💙`);
    round++;
}

if (heracles.life > 0) {
    console.log(`${heracles.name} a vaincu ${nemeanLion.name} !`);
} else {
    console.log(`${nemeanLion.name} a vaincu ${heracles.name} !`);
}

