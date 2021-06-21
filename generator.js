var rules = ['S+S', 'S', 'S-S', 'S*S', 'S/S', '(S)', 'Z'];

function nextState(state) {
  state = state.replaceAll('S', () => {
    var rule = rules[Math.floor(Math.random() * rules.length)];
    if (state.length > 100) {
      return 'Z';
    }
    return rule;
  });
  state = state.replaceAll('Z', () => {
    var x = Math.floor(Math.random() * 10);

    return x;
  });
  return state;
}
function isTerminal(state) {
  if (state.includes('S') || state.includes('Z')) {
    return false;
  }
  return true;
}
function generateValid() {
  var currentState = 'S';

  while (!isTerminal(currentState)) {
    currentState = nextState(currentState);

    if (currentState.length > 10000) {
      alert('stopped execution - expression too long');
      break;
    }
  }

  return currentState;
}
function generateInvalid() {
    var valid = generateValid();
    var index =Math.floor(Math.random() * valid.length); 
    return valid.slice(0, index) + valid.slice(index + 1);    
}

