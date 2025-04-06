// Get DOM elements
const button = document.getElementById("animateButton");
const statusText = document.getElementById("status");
const icon = document.getElementById("icon");

// Check if the animation status is stored in localStorage
if (localStorage.getItem("isAnimated") === "true") {
    button.classList.add("bounce");
    statusText.textContent = "Animation is currently ON";
    icon.textContent = "⏸️"; // Change icon to pause
}

// Add event listener to the button to toggle animation
button.addEventListener("click", () => {
    if (button.classList.contains("bounce")) {
        // Stop the animation
        button.classList.remove("bounce");
        statusText.textContent = "Animation is currently OFF";
        localStorage.setItem("isAnimated", "false");
        icon.textContent = "▶️"; // Change icon to play
    } else {
        // Start the animation
        button.classList.add("bounce");
        statusText.textContent = "Animation is currently ON";
        localStorage.setItem("isAnimated", "true");
        icon.textContent = "⏸️"; // Change icon to pause
    }
});
