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