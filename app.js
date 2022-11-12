const statrCarCount = 2000;
const minCarCount = 10;

let day = 1;
let currentCarCount = statrCarCount;

while (currentCarCount > minCarCount) {
  currentCarCount = Math.floor(currentCarCount / 2);
  day++;
}

console.log(`Через ${day} дней`);
