import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

// Set the title for the webpage
const gameName = "Dinosaur Park";
document.title = gameName;

// Create and append a header element
const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Description text for the image / button
const descriptionDiv = document.createElement("div");
descriptionDiv.innerHTML = "Click the Dinosaur Egg to make it Hatch! 🦖";
app.append(descriptionDiv);

// Create an image element for the Dinosaur Egg
const eggImage = document.createElement("img");
eggImage.src = "./src/assets/img/green-dino-egg.jpg"; // Set the source to your dino egg image
eggImage.alt = "Dinosaur Egg"; // Alt text for accessibility
eggImage.style.cursor = "pointer"; // Change cursor to pointer on hover
eggImage.width = 200; // Set a width for the image (adjust as necessary)
app.append(eggImage);

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

// Step 9: Data-driven design

// Interface for items
interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

// Data-driven items
const availableItems: Item[] = [
  {
    name: "Herbivore Breeding Pen",
    cost: 10,
    rate: 0.1,
    description: "A safe haven for gentle giants to thrive.",
  },
  {
    name: "Carnivore Den",
    cost: 100,
    rate: 2,
    description: "A habitat for the fiercest predators of the land.",
  },
  {
    name: "Dino Theme Park",
    cost: 1000,
    rate: 50,
    description: "A fun-filled park for families to interact with dinosaurs.",
  },
  {
    name: "Fossil Excavation Site",
    cost: 500,
    rate: 5,
    description: "Uncover ancient remains and boost your DNA collection.",
  },
  {
    name: "Genetic Research Lab",
    cost: 1500,
    rate: 10,
    description: "Conduct experiments to enhance dinosaur traits.",
  },
];

// Track the number of each upgrade purchased
const purchased: number[] = [0, 0, 0, 0, 0]; // Array to keep track of purchased upgrades

// Update the counter when the dinosaur egg image is clicked
eggImage.addEventListener("click", () => {
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

    // Add description as a tooltip
    button.title = item.description;

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

// Update the UI to reflect the current growth rate, purchased items, and prices
function updateUI() {
  counterDiv.innerHTML = `${counter.toFixed(2)} DNA Strands`;
  growthRateDiv.innerHTML = `Growth rate: ${growthRate.toFixed(2)} DNA/sec`;
  upgradeStatusDiv.innerHTML = `Upgrades: A: ${purchased[0]}, B: ${purchased[1]}, C: ${purchased[2]}`;

  // Update the buttons with the latest item data
  upgradeButtons.forEach((button, index) => {
    const item = availableItems[index];
    button.innerHTML = `🦕 Buy ${item.name} (${item.rate}/sec for ${item.cost.toFixed(2)} DNA)`;
    button.title = item.description; // Update description tooltip
  });
}

// Enable or disable the upgrade buttons based on the counter
function checkUpgradeAvailability() {
  upgradeButtons.forEach((button, index) => {
    button.disabled = counter < availableItems[index].cost;
  });
}

// Check for upgrade availability every frame
function monitorUpgradeAvailability() {
  checkUpgradeAvailability();
  requestAnimationFrame(monitorUpgradeAvailability);
}

// Start monitoring the upgrade availability
monitorUpgradeAvailability();
