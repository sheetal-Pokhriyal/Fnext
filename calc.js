function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Invalid Expression');
  }
}

let openParen = true;

function toggleParenthesis(button) {
  if (openParen) {
    appendToDisplay('(');
    button.textContent = ')';
  } else {
    appendToDisplay(')');
    button.textContent = '(';
  }
  openParen = !openParen;
}
