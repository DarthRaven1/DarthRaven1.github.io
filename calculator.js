function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  }
  
  window.onload = function() {
    document.getElementById("num1").value = generateRandomNumber();
    document.getElementById("num2").value = generateRandomNumber();
  };
  
  
  function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          alert("Cannot divide by zero.");
          result = "Error"; // Or handle it differently
        } else {
          result = num1 / num2;
        }
        break;
    }
  
    document.getElementById("result").textContent = "Result: " + result;
  }

  let total = 0;

function addNumber() {
  const input = parseFloat(document.getElementById("numberInput").value);

  if (isNaN(input)) {
    alert("Please enter a valid number.");
    return;
  }

  if (input === -1) {
    document.getElementById("total").textContent = "Total: " + total;
    total = 0;
    document.getElementById("numberInput").value = "";
  } else {
    total += input;
    document.getElementById("total").textContent = "Total: " + total;
    document.getElementById("numberInput").value = "";
  }
}