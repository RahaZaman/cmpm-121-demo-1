import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Set the title for the webpage
const gameName = "Dinosaur Park";
document.title = gameName;

// Create and append a header element
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1: Create a button to hatch dinosaurs
const button = document.createElement("button");
button.innerHTML = "🦖 Hatch Dinosaur Egg!"; // Thematic button for hatching dinosaurs
app.append(button);

// Step 2: Clicking increases counter
let counter: number = 0;
let growthRate: number = 0; // Initialize growth rate to zero

// Create the <div> to show the counter for DNA strands
const counterDiv = document.createElement("div");
counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`; // Change to DNA Strands
app.append(counterDiv);

// Create a <div> to show the current growth rate
const growthRateDiv = document.createElement("div");
growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} DNA/sec`; // Update growth rate text
app.append(growthRateDiv);

// Create a <div> to show the number of purchased upgrades
const upgradeStatusDiv = document.createElement("div");
upgradeStatusDiv.innerHTML = `Upgrades: A: 0, B: 0, C: 0`;
app.append(upgradeStatusDiv);

// Interface for items
interface Item {
  name: string;
  cost: number;
  rate: number;
}

// Data-driven items
const availableItems: Item[] = [
  { name: "Herbivore Breeding Pen", cost: 10, rate: 0.1 },
  { name: "Carnivore Den", cost: 100, rate: 2 },
  { name: "Dino Theme Park", cost: 1000, rate: 50 },
];

// Track the number of each upgrade purchased
const purchased: number[] = [0, 0, 0]; // Array to keep track of purchased upgrades

// // Track the number of each upgrade purchased
// let purchasedA = 0;
// let purchasedB = 0;
// let purchasedC = 0;

// // Initial prices for the upgrades
// let priceA = 10;
// let priceB = 100;
// let priceC = 1000;
// const priceIncreaseFactor = 1.15; // Price increases by 1.15 after each purchase

// Update the counter on button click
button.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`; // Update the counter display with DNA strands
});

// Step 4: Continuous Growth
let lastTime: number = 0; // Track the time of the last frame

function updateCounter(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000; // Convert milliseconds to seconds
  lastTime = currentTime;

  // Increment the counter by the fraction of time that has passed
  counter += growthRate * deltaTime; // Increase by a fractional amount per frame
  counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`; // Display with 2 decimal places

  // Continue the animation
  requestAnimationFrame(updateCounter);
}

// Start the animation loop
requestAnimationFrame(updateCounter);

// Step 6: Multiple upgrades and status

// Create upgrade buttons based on available items
const upgradeButtons: HTMLButtonElement[] = availableItems.map(
  (item, index) => {
    const button = document.createElement("button");
    button.innerHTML = `🦕 Buy ${item.name} (${item.rate}/sec for ${item.cost} DNA)`;
    button.disabled = true; // Initially disabled
    app.append(button);

    // Handle purchase of upgrades and increase the price
    button.addEventListener("click", () => {
      if (counter >= item.cost) {
        counter -= item.cost;
        growthRate += item.rate; // Increase growth rate
        purchased[index]++;
        item.cost *= 1.15; // Increase the price for the next purchase
        updateUI();
      }
    });

    return button;
  },
);

// // Create upgrade buttons for A, B, and C
// const upgradeAButton = document.createElement("button");
// upgradeAButton.innerHTML = `🦕 Buy Herbivore Breeding Pen (0.1/sec for ${priceA.toFixed(2)} DNA)`; // Upgrade A themed
// upgradeAButton.disabled = true;
// app.append(upgradeAButton);

// const upgradeBButton = document.createElement("button");
// upgradeBButton.innerHTML = `🦖 Buy Carnivore Den (2.0/sec for ${priceB.toFixed(2)} DNA)`; // Upgrade B themed
// upgradeBButton.disabled = true;
// app.append(upgradeBButton);

// const upgradeCButton = document.createElement("button");
// upgradeCButton.innerHTML = `🦙 Buy Dino Theme Park (50/sec for ${priceC.toFixed(2)} DNA)`; // Upgrade C themed
// upgradeCButton.disabled = true;
// app.append(upgradeCButton);

// // Handle the purchase of upgrades and increase the price
// upgradeAButton.addEventListener("click", () => {
//   if (counter >= priceA) {
//     counter -= priceA;
//     growthRate += 0.1;
//     purchasedA++;
//     priceA *= priceIncreaseFactor; // Increase the price for the next purchase
//     updateUI();
//   }
// });

// upgradeBButton.addEventListener("click", () => {
//   if (counter >= priceB) {
//     counter -= priceB;
//     growthRate += 2.0;
//     purchasedB++;
//     priceB *= priceIncreaseFactor; // Increase the price for the next purchase
//     updateUI();
//   }
// });

// upgradeCButton.addEventListener("click", () => {
//   if (counter >= priceC) {
//     counter -= priceC;
//     growthRate += 50;
//     purchasedC++;
//     priceC *= priceIncreaseFactor; // Increase the price for the next purchase
//     updateUI();
//   }
// });

// Update the UI to reflect the current growth rate, purchased items, and prices
function updateUI() {
  counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`;
  growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} DNA/sec`;
  upgradeStatusDiv.innerHTML = `Upgrades: A: ${purchased[0]}, B: ${purchased[1]}, C: ${purchased[2]}`;

  // Update the buttons with the latest item data
  upgradeButtons.forEach((button, index) => {
    const item = availableItems[index];
    button.innerHTML = `🦕 Buy ${item.name} (${item.rate}/sec for ${item.cost.toFixed(2)} DNA)`;
  });
}

// // Enable or disable the upgrade buttons based on the counter
// function checkUpgradeAvailability() {
//   upgradeAButton.disabled = counter < priceA;
//   upgradeBButton.disabled = counter < priceB;
//   upgradeCButton.disabled = counter < priceC;
// }

// Enable or disable the upgrade buttons based on the counter
function checkUpgradeAvailability() {
  upgradeButtons.forEach((button, index) => {
    button.disabled = counter < availableItems[index].cost;
  });
}

// Update the UI to reflect the current growth rate, purchased items, and prices
// function updateUI() {
//   counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`;
//   growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} DNA/sec`;
//   upgradeStatusDiv.innerHTML = `Upgrades: A: ${purchasedA}, B: ${purchasedB}, C: ${purchasedC}`;
//   upgradeAButton.innerHTML = `🦕 Buy Herbivore Breeding Pen (0.1/sec for ${priceA.toFixed(2)} DNA)`;
//   upgradeBButton.innerHTML = `🦖 Buy Carnivore Den (2.0/sec for ${priceB.toFixed(2)} DNA)`;
//   upgradeCButton.innerHTML = `🦙 Buy Dino Theme Park (50/sec for ${priceC.toFixed(2)} DNA)`;
// }

// Check for upgrade availability every frame
function monitorUpgradeAvailability() {
  checkUpgradeAvailability();
  requestAnimationFrame(monitorUpgradeAvailability);
}

// Start monitoring the upgrade availability
monitorUpgradeAvailability();
