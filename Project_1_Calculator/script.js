let currentDisplay = "0";

function handleClick(value) {
  if (currentDisplay === "0") {
    currentDisplay = value;
  } else {
    currentDisplay += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentDisplay = "0";
  updateDisplay();
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  document.querySelector(".calcScreen").innerText = currentDisplay;
}
