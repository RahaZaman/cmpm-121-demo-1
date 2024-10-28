import "./style.css";

// Constants for game name and app container
const gameName = "Dinosaur Park";
const app: HTMLDivElement = document.querySelector("#app")!;

// Update document title
document.title = gameName;

// Declare game state variables
let dnaCounter: number = 0;
let dnaGrowthRate: number = 0;
let lastUpdateTime: number = 0;

let dnaCounterDisplay: HTMLDivElement;
let growthRateDisplay: HTMLDivElement;
let upgradeStatusDisplay: HTMLDivElement;
let eggImage: HTMLImageElement;

// UI Initialization
function initializeUI() {
  // Set up Header
  const header = document.createElement("h1");
  header.innerHTML = gameName;
  app.append(header);

  // Create Description
  const descriptionDiv = document.createElement("div");
  descriptionDiv.innerHTML = "Click the Dinosaur Egg to make it Hatch! 🦖";
  app.append(descriptionDiv);

  // Create Egg Image
  eggImage = document.createElement("img");
  eggImage.src = "./src/assets/img/green-dino-egg.jpg";
  eggImage.alt = "Dinosaur Egg";
  eggImage.style.cursor = "pointer";
  eggImage.width = 200;
  app.append(eggImage);

  // Counter Display
  dnaCounterDisplay = document.createElement("div");
  dnaCounterDisplay.innerHTML = `${dnaCounter.toFixed(2)} DNA Strands`;
  app.append(dnaCounterDisplay);

  // Growth Rate Display
  growthRateDisplay = document.createElement("div");
  growthRateDisplay.innerHTML = `Growth rate: ${dnaGrowthRate.toFixed(2)} DNA/sec`;
  app.append(growthRateDisplay);

  // Upgrade Status Display
  upgradeStatusDisplay = document.createElement("div");
  upgradeStatusDisplay.innerHTML = `Upgrades: A: 0, B: 0, C: 0`;
  app.append(upgradeStatusDisplay);

  // Add event listener to eggImage after it's created
  eggImage.addEventListener("click", handleDnaCollection);
}

// Initialize interface elements
initializeUI();

// Interface and Data Structures
interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

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

const purchasedUpgrades: number[] = [0, 0, 0, 0, 0];

// DNA collection functionality
function handleDnaCollection() {
  dnaCounter++;
  refreshDisplayUI();
}

// Game State Updates and Logic
function updateGameState(currentTime: number) {
  const deltaTime = (currentTime - lastUpdateTime) / 1000;
  lastUpdateTime = currentTime;

  dnaCounter += dnaGrowthRate * deltaTime;
  refreshDisplayUI();

  requestAnimationFrame(updateGameState);
}

// Initialize the game loop
requestAnimationFrame(updateGameState);

// Upgrade Button Creation and Logic
const upgradeButtons: HTMLButtonElement[] = availableItems.map(
  (item, index) => {
    const button = document.createElement("button");
    button.innerHTML = `🦕 Buy ${item.name} (${item.rate}/sec for ${item.cost} DNA)`;
    button.disabled = true;
    app.append(button);

    button.title = item.description;

    button.addEventListener("click", () => {
      if (dnaCounter >= item.cost) {
        dnaCounter -= item.cost;
        dnaGrowthRate += item.rate;
        purchasedUpgrades[index]++;
        item.cost *= 1.15;
        refreshDisplayUI();
      }
    });

    return button;
  },
);

// Update UI function with a specific name
function refreshDisplayUI() {
  dnaCounterDisplay.innerHTML = `${dnaCounter.toFixed(2)} DNA Strands`;
  growthRateDisplay.innerHTML = `Growth rate: ${dnaGrowthRate.toFixed(2)} DNA/sec`;
  upgradeStatusDisplay.innerHTML = `Upgrades: A: ${purchasedUpgrades[0]}, B: ${purchasedUpgrades[1]}, C: ${purchasedUpgrades[2]}`;

  upgradeButtons.forEach((button, index) => {
    const item = availableItems[index];
    button.innerHTML = `🦕 Buy ${item.name} (${item.rate}/sec for ${item.cost.toFixed(2)} DNA)`;
    button.disabled = dnaCounter < item.cost;
  });
}

// Continuously check for upgrade availability
function monitorUpgradeAvailability() {
  refreshDisplayUI(); // Ensure all UI elements are refreshed periodically
  requestAnimationFrame(monitorUpgradeAvailability);
}

// Start monitoring the upgrade availability
monitorUpgradeAvailability();
