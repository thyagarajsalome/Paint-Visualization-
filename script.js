// Color configuration
const colors = {
  "color-1": "#d5d265",
  "color-2": "#b73352",
  "color-3": "#4a59a6",
};

let currentColor = null;

// DOM Elements
const colorButtons = document.querySelectorAll(".color-button");
const colorOverlays = document.querySelectorAll(".color-overlay");
const resetButton = document.getElementById("resetButton");
const selectedColorText = document.getElementById("selectedColorText");

// Handle color selection
function selectColor(colorId) {
  // Reset all overlays and buttons
  colorOverlays.forEach((overlay) => {
    overlay.style.opacity = "0";
  });

  colorButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // If selecting a new color
  if (colorId && colorId !== currentColor) {
    const overlay = document.getElementById(`${colorId}-overlay`);
    const button = document.querySelector(`[data-color="${colorId}"]`);

    overlay.style.opacity = "1";
    button.classList.add("active");
    selectedColorText.innerHTML = `Selected Color: <span class="selected-color-id">${colors[colorId]}</span>`;
    currentColor = colorId;
  } else {
    // If clicking the same color or resetting
    selectedColorText.textContent = "";
    currentColor = null;
  }
}

// Event Listeners
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const colorId = button.dataset.color;
    if (currentColor === colorId) {
      selectColor(null); // Deselect if clicking the same color
    } else {
      selectColor(colorId);
    }
  });
});

resetButton.addEventListener("click", () => {
  selectColor(null);
});
