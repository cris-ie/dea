var cellar = [];
var word = '';
var finalStates = ['q3'];
var currentState = '';

/**
 * validates a given input
 * @param {string} input
 */
async function validate(input) {
  cellar = [];
  word = input;
  currentState = 'q0';
  while (!validationFinished()) {
    await new Promise((r) =>
      setTimeout(r, document.getElementById('aRange').value * 1000),
    );
    var symbol = '';
    if (word.length > 0) {
      symbol = word[0];
    } else if (
      word.length == 0 &&
      cellar.length == 1 &&
      cellar[0] == 'S' &&
      currentState == 'q3'
    ) {
      // ε, S -> ε
      cellar.pop();
      return true;
    } else if (currentState != 'q4') {
      return false;
    }
    switch (currentState) {
      case 'q0': {
        cellar.push('S');
        currentState = 'q1';
        continue;
      }
      case 'q1': {
        if (symbol == '(') {
          cellar.push('Para');
          currentState = 'q2';
          word = word.substring(1);
          continue;
        } else if (isNumeric(symbol)) {
          currentState = 'q3';
          word = word.substring(1);

          continue;
        } else {
          return false;
        }
      }
      case 'q2': {
        if (symbol == '(') {
          cellar.push('Para');
          currentState = 'q2';
          word = word.substring(1);

          continue;
        } else if (isNumeric(symbol)) {
          currentState = 'q4';
          word = word.substring(1);

          continue;
        } else {
          return false;
        }
      }
      case 'q3': {
        if (isOperator(symbol)) {
          currentState = 'q2';
          word = word.substring(1);

          continue;
        } else {
          return false;
        }
      }
      case 'q4': {
        if (isOperator(symbol)) {
          currentState = 'q2';
          word = word.substring(1);

          continue;
        } else if (symbol == ')') {
          var cellarValue = cellar.pop();
          if (cellarValue == undefined || cellarValue != 'Para') {
            return false;
          }
          word = word.substring(1);

          currentState = 'q4';
          continue;
        } else {
          currentState = 'q3';
          continue;
        }
      }

      default:
        return false;
    }
  }
  return true;
}
function validateStepwise(input) {}
function validationFinished() {
  return (
    cellar.length == 1 &&
    cellar[0] == 'S' &&
    word.length == 0 &&
    finalStates.includes(currentState)
  );
}
function isOperator(symbol) {
  return ['+', '-', '*', '/'].includes(symbol);
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
