



async function onCreate() {
  var currentState = 'S';
  var currentStep = 0;
  disableButton('correctexpression');
  disableButton('forward');
  disableButton('help');
  disableButton('aRange');
  enableButton('cancel');

  clearRows();
  while (!isTerminal(currentState)) {
    var oldState = currentState;
    var result = nextState(currentState);
    currentState = result.state;
    addRow(++currentStep, oldState, currentState, result.used.join(','));

    if (currentState.length > 100000) {
      alert('stopped execution - expression too long');
      break;
    }
    await new Promise((r) =>
      setTimeout(r, document.getElementById('aRange').value * 1000),
    );
  }
  enableButton('correctexpression');
  enableButton('forward');
  enableButton('help');
  enableButton('aRange');
  disableButton('cancel');
  console.log(currentState);
}

var stepState = null;
var stepCounter = 0;
function onForward() {
  if (stepState == null) {
    clearRows();
    disableButton('correctexpression');
    disableButton('help');
    disableButton('aRange');
    enableButton('cancel');
    stepState = 'S';
    stepCounter = 0;
  }
  var oldState = stepState;
  var result = nextState(stepState);
  stepState = result.state;
  addRow(++stepCounter, oldState, stepState, result.used.join(','));

  if (stepState.length > 100000) {
    alert('stopped execution - expression too long');
  }
  if (isTerminal(stepState)) {
    enableButton('correctexpression');
    enableButton('help');
    enableButton('aRange');
    disableButton('cancel');
    alert("reached final state")
    stepState = null;
    stepCounter= 0;
  }
}
function onPlay(){
   alert(validate(document.getElementById('input').value.trim()));

}
function onGenValid(){
  document.getElementById('input').value=generateValid();
  
}
function onGenInvalid(){
  document.getElementById('input').value=generateInvalid();
  
}