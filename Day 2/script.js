function appendToDisplay(value) {
  let display = document.getElementById("display");
  let currentValue = display.value;

  // Prevent consecutive operators
  if (isOperator(value) && isOperator(currentValue.slice(-1))) {
    return;
  }

  // Prevent starting with an operator except '-'
  if (currentValue === "" && isOperator(value) && value !== "-") {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  let display = document.getElementById("display").value;
  try {
    let result = eval(display);
    document.getElementById("display").value = Math.abs(result);
  } catch (e) {
    alert("Invalid expression");
  }
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}
