// import "./style.css";

// const app: HTMLDivElement = document.querySelector("#app")!;

// // Set the title for the webpage
// const gameName = "Rocketship Counter";
// document.title = gameName;

// // Create and append a header element
// const header = document.createElement("h1");
// header.innerHTML = gameName;
// app.append(header);

// // Step 1: Create a button and add it to the webpage
// const button = document.createElement("button");
// button.innerHTML = "🚀 Click Me!"; // Added a fun emoji here (e.g., a rocket emoji)
// app.append(button);

// // Step 2: Clicking increases counter
// let counter: number = 0;
// let growthRate: number = 0; // Step 5: Initialize growth rate to zero

// // Create the <div> to show the counter
// const counterDiv = document.createElement("div");
// counterDiv.innerHTML = `${counter.toFixed(2)} rockets`;
// app.append(counterDiv);

// // Create a <div> to show the current growth rate
// const growthRateDiv = document.createElement("div");
// growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} rockets/sec`;
// app.append(growthRateDiv);

// // Create a <div> to show the number of purchased upgrades
// const upgradeStatusDiv = document.createElement("div");
// upgradeStatusDiv.innerHTML = `Upgrades: A: 0, B: 0, C: 0`;
// app.append(upgradeStatusDiv);

// // Track the number of each upgrade purchased
// let purchasedA = 0;
// let purchasedB = 0;
// let purchasedC = 0;

// // Initial prices for the upgrades
// let priceA = 10;
// let priceB = 100;
// let priceC = 1000;
// const priceIncreaseFactor = 1.15; // Price increases by 1.15 after each purchase

// // Update the counter on button click
// button.addEventListener("click", () => {
//   counter++;
//   counterDiv.innerHTML = `${counter.toFixed(2)} rockets`; // Update the counter display with the new value
// });

// // Step 3: Automatic Clicking
// // setInterval(() => {
// //   counter++;
// //   counterDiv.innerHTML = `${counter} rockets`; // Use backticks for template literals
// //   console.log("Counter:", counter);
// // }, 1000); // Increment counter every 1 second (1000 milliseconds)

// // Step 4: Continuous Growth
// let lastTime: number = 0; // Track the time of the last frame

// function updateCounter(currentTime: number) {
//   const deltaTime = (currentTime - lastTime) / 1000; // Convert milliseconds to seconds
//   lastTime = currentTime;

//   // Increment the counter by the fraction of time that has passed
//   counter += growthRate * deltaTime; // Increase by a fractional amount per frame
//   counterDiv.innerHTML = `${counter.toFixed(2)} rockets`; // Display with 2 decimal places

//   // Continue the animation
//   requestAnimationFrame(updateCounter);
// }

// // Start the animation loop
// requestAnimationFrame(updateCounter);

// // Step 6: Multiple upgrades and status

// // Create upgrade buttons for A, B, and C
// const upgradeAButton = document.createElement("button");
// upgradeAButton.innerHTML = `🔧 Buy Upgrade A (0.1/sec for ${priceA.toFixed(2)} units)`;
// upgradeAButton.disabled = true;
// app.append(upgradeAButton);

// const upgradeBButton = document.createElement("button");
// upgradeBButton.innerHTML = `⚙️ Buy Upgrade B (2.0/sec for ${priceB.toFixed(2)} units)`;
// upgradeBButton.disabled = true;
// app.append(upgradeBButton);

// const upgradeCButton = document.createElement("button");
// upgradeCButton.innerHTML = `🚀 Buy Upgrade C (50/sec for ${priceC.toFixed(2)} units)`;
// upgradeCButton.disabled = true;
// app.append(upgradeCButton);

// // Step 5: Purchasing an upgrade
// // const upgradeButton = document.createElement("button");
// // upgradeButton.innerHTML = "💥 Buy Rocket Booster (+1 growth rate)";
// // upgradeButton.disabled = true; // Initially disabled
// // app.append(upgradeButton);

// // Step 7: Price increases

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

// // Enable or disable the upgrade button based on the counter
// function checkUpgradeAvailability() {
//   //   if (counter >= 10) {
//   //     upgradeButton.disabled = false;
//   //   } else {
//   //     upgradeButton.disabled = true;
//   //   }
//   upgradeAButton.disabled = counter < priceA;
//   upgradeBButton.disabled = counter < priceB;
//   upgradeCButton.disabled = counter < priceC;
// }

// // Update the UI to reflect the current growth rate, purchased items, and prices
// function updateUI() {
//   counterDiv.innerHTML = `${counter.toFixed(2)} rockets`;
//   growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} rockets/sec`;
//   upgradeStatusDiv.innerHTML = `Upgrades: A: ${purchasedA}, B: ${purchasedB}, C: ${purchasedC}`;
//   upgradeAButton.innerHTML = `🔧 Buy Upgrade A (0.1/sec for ${priceA.toFixed(2)} units)`;
//   upgradeBButton.innerHTML = `⚙️ Buy Upgrade B (2.0/sec for ${priceB.toFixed(2)} units)`;
//   upgradeCButton.innerHTML = `🚀 Buy Upgrade C (50/sec for ${priceC.toFixed(2)} units)`;
// }

// // Check for upgrade availability every frame
// function monitorUpgradeAvailability() {
//   checkUpgradeAvailability();
//   requestAnimationFrame(monitorUpgradeAvailability);
// }

// // Start monitoring the upgrade availability
// monitorUpgradeAvailability();

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

// Track the number of each upgrade purchased
let purchasedA = 0;
let purchasedB = 0;
let purchasedC = 0;

// Initial prices for the upgrades
let priceA = 10;
let priceB = 100;
let priceC = 1000;
const priceIncreaseFactor = 1.15; // Price increases by 1.15 after each purchase

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

// Create upgrade buttons for A, B, and C
const upgradeAButton = document.createElement("button");
upgradeAButton.innerHTML = `🦕 Buy Herbivore Breeding Pen (0.1/sec for ${priceA.toFixed(2)} DNA)`; // Upgrade A themed
upgradeAButton.disabled = true;
app.append(upgradeAButton);

const upgradeBButton = document.createElement("button");
upgradeBButton.innerHTML = `🦖 Buy Carnivore Den (2.0/sec for ${priceB.toFixed(2)} DNA)`; // Upgrade B themed
upgradeBButton.disabled = true;
app.append(upgradeBButton);

const upgradeCButton = document.createElement("button");
upgradeCButton.innerHTML = `🦙 Buy Dino Theme Park (50/sec for ${priceC.toFixed(2)} DNA)`; // Upgrade C themed
upgradeCButton.disabled = true;
app.append(upgradeCButton);

// Handle the purchase of upgrades and increase the price
upgradeAButton.addEventListener("click", () => {
    if (counter >= priceA) {
        counter -= priceA;
        growthRate += 0.1;
        purchasedA++;
        priceA *= priceIncreaseFactor; // Increase the price for the next purchase
        updateUI();
    }
});

upgradeBButton.addEventListener("click", () => {
    if (counter >= priceB) {
        counter -= priceB;
        growthRate += 2.0;
        purchasedB++;
        priceB *= priceIncreaseFactor; // Increase the price for the next purchase
        updateUI();
    }
});

upgradeCButton.addEventListener("click", () => {
    if (counter >= priceC) {
        counter -= priceC;
        growthRate += 50;
        purchasedC++;
        priceC *= priceIncreaseFactor; // Increase the price for the next purchase
        updateUI();
    }
});

// Enable or disable the upgrade buttons based on the counter
function checkUpgradeAvailability() {
    upgradeAButton.disabled = counter < priceA;
    upgradeBButton.disabled = counter < priceB;
    upgradeCButton.disabled = counter < priceC;
}

// Update the UI to reflect the current growth rate, purchased items, and prices
function updateUI() {
    counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`;
    growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} DNA/sec`;
    upgradeStatusDiv.innerHTML = `Upgrades: A: ${purchasedA}, B: ${purchasedB}, C: ${purchasedC}`;
    upgradeAButton.innerHTML = `🦕 Buy Herbivore Breeding Pen (0.1/sec for ${priceA.toFixed(2)} DNA)`;
    upgradeBButton.innerHTML = `🦖 Buy Carnivore Den (2.0/sec for ${priceB.toFixed(2)} DNA)`;
    upgradeCButton.innerHTML = `🦙 Buy Dino Theme Park (50/sec for ${priceC.toFixed(2)} DNA)`;
}

// Check for upgrade availability every frame
function monitorUpgradeAvailability() {
    checkUpgradeAvailability();
    requestAnimationFrame(monitorUpgradeAvailability);
}

// Start monitoring the upgrade availability
monitorUpgradeAvailability();