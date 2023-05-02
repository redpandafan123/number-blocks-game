document.getElementById("numberInput").addEventListener("input", updateInput1Display);
document.getElementById("multiplierInput").addEventListener("input", updateInput2Display);
document.getElementById("visualizeBtn").addEventListener("click", visualizeNumbers);

function updateInput1Display() {
  const numberInput = parseFloat(document.getElementById("numberInput").value);
  updateBlockDisplay("input1", numberInput);
}

function updateInput2Display() {
  const secondNumberInput = parseFloat(document.getElementById("multiplierInput").value);
  updateBlockDisplay("input2", secondNumberInput);
}

function updateBlockDisplay(containerId, number) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  if (isNaN(number)) {
    return;
  }

  const thousandBlocksCount = Math.floor(number / 1000);
  const hundredBlocksCount = Math.floor((number % 1000) / 100);
  const purpleBlocksCount = Math.floor((number % 100) / 10);
  const blueBlocksCount = number % 10;

  for (let i = 0; i < thousandBlocksCount; i++) {
    const block = document.createElement("div");
    block.className = "block thousand";
    container.appendChild(block);
  }

  for (let i = 0; i < hundredBlocksCount; i++) {
    const block = document.createElement("div");
    block.className = "block hundred";
    container.appendChild(block);
  }

  for (let i = 0; i < purpleBlocksCount; i++) {
    const block = document.createElement("div");
    block.className = "block purple";
    container.appendChild(block);
  }

  for (let i = 0; i < blueBlocksCount; i++) {
    const block = document.createElement("div");
    block.className = "block blue";
    container.appendChild(block);
  }
}




function visualizeNumbers() {
  const numberInput = parseFloat(document.getElementById("numberInput").value);
  const secondNumberInput = parseFloat(document.getElementById("multiplierInput").value);
  const operation = document.querySelector('input[name="operation"]:checked').value;

  const redBlocksContainer = document.getElementById("redBlocks");
  const purpleBlocksContainer = document.getElementById("purpleBlocks");
  const blueBlocksContainer = document.getElementById("blueBlocks");

  let result;

  switch (operation) {
    case "addition":
      result = numberInput + secondNumberInput;
      break;
    case "subtraction":
      result = Math.abs(numberInput - secondNumberInput);
      break;
    case "multiplication":
      result = numberInput * secondNumberInput;
      break;
    case "division":
      result = numberInput / secondNumberInput;
      break;
    default:
      break;
  }

  // Round the result to the nearest whole number
  result = Math.round(result);

  updateBlockDisplay("redBlocks", result);
  updateBlockDisplay("purpleBlocks", 0);
  updateBlockDisplay("blueBlocks", 0);
}

function calculate() {
  const num1 = parseInt(numberInput.value);
  const num2 = parseInt(multiplierInput.value);

  if (num2 === 0) {
    answerOutput.textContent = "undefined";
    return;
  }

  const operation = getSelectedOperation();
  const result = performOperation(num1, num2, operation);
  displayBlocks(result);
  displayAnswer(result);
}
