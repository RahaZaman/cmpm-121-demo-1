import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My very cool and interesting game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// Step 1: Create a button and add it to the webpage
const button = document.createElement("button");
button.innerHTML = "🚀 Click Me!"; // Added a fun emoji here (e.g., a rocket emoji)
app.append(button);

// Step 2: Clicking increases counter
let counter: number = 0;

// Create the <div> to show the counter
const counterDiv = document.createElement("div");
counterDiv.innerHTML = `${counter} rockets`; // Initially display 0 rockets
app.append(counterDiv);

// Update the counter on button click
button.addEventListener("click", () => {
  counter++;
  counterDiv.innerHTML = `${counter} rockets`; // Update the counter display with the new value
});

// Step 3: Automatic Clicking
// setInterval(() => {
//   counter++;
//   counterDiv.innerHTML = `${counter} rockets`; // Use backticks for template literals
//   console.log("Counter:", counter);
// }, 1000); // Increment counter every 1 second (1000 milliseconds)

// Step 4: Continuous Growth
let lastTime: number = 0; // Track the time of the last frame

function updateCounter(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000; // Convert milliseconds to seconds
  lastTime = currentTime;

  // Increment the counter by the fraction of time that has passed
  counter += deltaTime; // Increase by a fractional amount per frame
  counterDiv.innerHTML = `${counter.toFixed(2)} rockets`; // Display with 2 decimal places

  // Continue the animation
  requestAnimationFrame(updateCounter);
}

// Start the animation loop
requestAnimationFrame(updateCounter);
