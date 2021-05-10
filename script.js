var currentState = null;
var nextIndex = 0;
function colorNode(name, color) {
  document.getElementById(name).style.fill = color;
}
function disableButton(name) {
  document.getElementById(name).disabled = true;
}
function enableButton(name) {
  document.getElementById(name).disabled = false;
}
function onInputchanged(val) {
  if (val && val.length > 0) {
    enableButton('play');
  } else {
    disableButton('play');
  }
}
function uncolorRow() {
  document.getElementById('r1').style.backgroundColor = 'white';
  document.getElementById('r2').style.backgroundColor = 'white';
  document.getElementById('r3').style.backgroundColor = 'white';
  document.getElementById('r4').style.backgroundColor = 'white';
  document.getElementById('r5').style.backgroundColor = 'white';
  document.getElementById('r6').style.backgroundColor = 'white';
  document.getElementById('r7').style.backgroundColor = 'white';
  document.getElementById('r8').style.backgroundColor = 'white';
  document.getElementById('r9').style.backgroundColor = 'white';
  document.getElementById('r10').style.backgroundColor = 'white';
  document.getElementById('r11').style.backgroundColor = 'white';
  document.getElementById('r12').style.backgroundColor = 'white';
}
function colorRow(name, color) {
  uncolorRow();
  document.getElementById(name).style.backgroundColor = color;
}
function test(word) {
  const chars = word.split('');
  currentState = 'q0';
  for (var i = 0; i < chars.length; i++) {
    switch (chars[i].toUpperCase()) {
      case 'B': {
        if (currentState == 'q0') {
          currentState = 'q1';
          continue;
        } else {
          return false;
        }
      }
      case 'T': {
        if (currentState == 'q1') {
          currentState = 'q2';
          continue;
        } else if (currentState == 'q3') {
          currentState = 'q3';
          continue;
        } else {
          return false;
        }
      }
      case 'S': {
        if (currentState == 'q2') {
          currentState = 'q2';
          continue;
        } else if (currentState == 'q5') {
          currentState = 'q6';
          continue;
        } else {
          return false;
        }
      }

      case 'X': {
        if (currentState == 'q2') {
          currentState = 'q5';
          continue;
        } else if (currentState == 'q5') {
          currentState = 'q3';
          continue;
        } else {
          return false;
        }
      }
      case 'V': {
        if (currentState == 'q3') {
          currentState = 'q4';
          continue;
        } else if (currentState == 'q4') {
          currentState = 'q6';
          continue;
        } else {
          return false;
        }
      }
      case 'P': {
        if (currentState == 'q4') {
          currentState = 'q5';
          continue;
        } else if (currentState == 'q1') {
          currentState = 'q3';
          continue;
        } else {
          return false;
        }
      }
      case 'E': {
        if (currentState == 'q6') {
          currentState = 'q7';
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return currentState == 'q7';
}
function create() {
  var word = '';
  currentState = 'q0';
  while (currentState != 'q7') {
    if (currentState == 'q0') {
      currentState = 'q1';
      word += 'B';
      continue;
    }
    if (currentState == 'q1') {
      var possiblenext = ['T', 'P'];
      var next = possiblenext[Math.floor(Math.random() * possiblenext.length)];
      word += next;
      if (next == 'T') {
        currentState = 'q2';
        continue;
      } else {
        currentState = 'q3';
        continue;
      }
    }
    if (currentState == 'q2') {
      var possiblenext = ['S', 'X'];
      var next = possiblenext[Math.floor(Math.random() * possiblenext.length)];
      word += next;
      if (next == 'S') {
        currentState = 'q2';
        continue;
      } else {
        currentState = 'q5';
        continue;
      }
    }
    if (currentState == 'q3') {
      var possiblenext = ['T', 'V'];
      var next = possiblenext[Math.floor(Math.random() * possiblenext.length)];
      word += next;
      if (next == 'T') {
        currentState = 'q3';
        continue;
      } else {
        currentState = 'q4';
        continue;
      }
    }
    if (currentState == 'q4') {
      var possiblenext = ['P', 'V'];
      var next = possiblenext[Math.floor(Math.random() * possiblenext.length)];
      word += next;
      if (next == 'P') {
        currentState = 'q5';
        continue;
      } else {
        currentState = 'q6';
        continue;
      }
    }
    if (currentState == 'q5') {
      var possiblenext = ['X', 'S'];
      var next = possiblenext[Math.floor(Math.random() * possiblenext.length)];
      word += next;
      if (next == 'X') {
        currentState = 'q3';
        continue;
      } else {
        currentState = 'q6';
        continue;
      }
    }
    if (currentState == 'q6') {
      word += 'E';
      currentState = 'q7';
    }
  }
  currentState = null;
  return word;
}
async function simulate(word) {
  const chars = word.split('');
  const timeOut = 1 + document.getElementById('aRange').value * 1000;
  currentState = 'q0';
  colorNode('q0', 'green');
  await new Promise((r) => setTimeout(r, timeOut));
  for (var i = 0; i < chars.length; i++) {
    switch (chars[i].toUpperCase()) {
      case 'B': {
        if (currentState == 'q0') {
          currentState = 'q1';
          colorNode(currentState, 'green');
          colorRow('r1', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
      case 'T': {
        if (currentState == 'q1') {
          currentState = 'q2';
          colorNode(currentState, 'green');
          colorRow('r2', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else if (currentState == 'q3') {
          currentState = 'q3';
          colorNode(currentState, 'green');
          colorRow('r6', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
      case 'S': {
        if (currentState == 'q2') {
          currentState = 'q2';
          colorNode(currentState, 'green');
          colorRow('r4', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else if (currentState == 'q5') {
          currentState = 'q6';
          colorNode(currentState, 'green');
          colorRow('r10', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }

      case 'X': {
        if (currentState == 'q2') {
          currentState = 'q5';
          colorNode(currentState, 'green');
          colorRow('r5', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else if (currentState == 'q5') {
          currentState = 'q3';
          colorNode(currentState, 'green');
          colorRow('r11', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
      case 'V': {
        if (currentState == 'q3') {
          currentState = 'q4';
          colorNode(currentState, 'green');
          colorRow('r7', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else if (currentState == 'q4') {
          currentState = 'q6';
          colorNode(currentState, 'green');
          colorRow('r8', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
      case 'P': {
        if (currentState == 'q4') {
          currentState = 'q5';
          colorNode(currentState, 'green');
          colorRow('r9', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else if (currentState == 'q1') {
          currentState = 'q3';
          colorNode(currentState, 'green');
          colorRow('r3', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
      case 'E': {
        if (currentState == 'q6') {
          currentState = 'q7';
          colorNode(currentState, 'green');
          colorRow('r12', 'green');
          await new Promise((r) => setTimeout(r, timeOut));
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return currentState == 'q7';
}
function simulateStepwise(word) {
  const chars = word.split('');

  console.log(currentState);
  console.log(chars[nextIndex].toUpperCase());
  switch (chars[nextIndex].toUpperCase()) {
    case 'B': {
      if (currentState == 'q0') {
        currentState = 'q1';
        colorNode(currentState, 'green');
        colorRow('r1', 'green');
        return true;
      } else {
        return false;
      }
    }
    case 'T': {
      if (currentState == 'q1') {
        currentState = 'q2';
        colorNode(currentState, 'green');
        colorRow('r2', 'green');
        return true;
      } else if (currentState == 'q3') {
        currentState = 'q3';
        colorNode(currentState, 'green');
        colorRow('r6', 'green');

        return true;
      } else {
        return false;
      }
    }
    case 'S': {
      if (currentState == 'q2') {
        currentState = 'q2';
        colorNode(currentState, 'green');
        colorRow('r4', 'green');

        return true;
      } else if (currentState == 'q5') {
        currentState = 'q6';
        colorNode(currentState, 'green');
        colorRow('r10', 'green');

        return true;
      } else {
        return false;
      }
    }

    case 'X': {
      if (currentState == 'q2') {
        currentState = 'q5';
        colorNode(currentState, 'green');
        colorRow('r5', 'green');

        return true;
      } else if (currentState == 'q5') {
        currentState = 'q3';
        colorNode(currentState, 'green');
        colorRow('r11', 'green');
        return true;
      } else {
        return false;
      }
    }
    case 'V': {
      if (currentState == 'q3') {
        currentState = 'q4';
        colorNode(currentState, 'green');
        colorRow('r7', 'green');

        return true;
      } else if (currentState == 'q4') {
        currentState = 'q6';
        colorNode(currentState, 'green');
        colorRow('r8', 'green');

        return true;
      } else {
        return false;
      }
    }
    case 'P': {
      if (currentState == 'q4') {
        currentState = 'q5';
        colorNode(currentState, 'green');
        colorRow('r9', 'green');

        return true;
      } else if (currentState == 'q1') {
        currentState = 'q3';
        colorNode(currentState, 'green');
        colorRow('r3', 'green');

        return true;
      } else {
        return false;
      }
    }
    case 'E': {
      if (currentState == 'q6') {
        currentState = 'q7';
        colorNode(currentState, 'green');
        colorRow('r12', 'green');

        return true;
      } else {
        return false;
      }
    }
  }
  return currentState == 'q7';
}
async function onPlay() {
  disableButton('play');
  disableButton('reset');
  disableButton('forward');
  disableButton('help');
  disableButton('aRange');
  disableButton('correctWord');
  disableButton('incorrectWord');
  disableButton('insertWord');
  disableButton('testWord');

  var word = document.getElementById('insertWord').value;
  if (await simulate(word)) {
    alert('simulation succesfull');
  } else {
    alert('simulation failed');
  }
  enableButton('play');
  enableButton('reset');
  enableButton('forward');
  enableButton('help');
  enableButton('aRange');
  enableButton('correctWord');
  enableButton('incorrectWord');
  enableButton('insertWord');
  enableButton('testWord');
}
function onReset() {
  currentState = null;
  nextIndex = 0;
  uncolorRow();
  colorNode('q0', '#fad9d5');
  colorNode('q1', '#fad9d5');
  colorNode('q2', '#fad9d5');
  colorNode('q3', '#fad9d5');
  colorNode('q4', '#fad9d5');
  colorNode('q5', '#fad9d5');
  colorNode('q6', '#fad9d5');
  colorNode('q7', '#fad9d5');
  enableButton('play');
  enableButton('reset');
  enableButton('forward');
  enableButton('help');
  enableButton('aRange');
  enableButton('correctWord');
  enableButton('incorrectWord');
  enableButton('insertWord');
  enableButton('testWord');
}
function onForward() {
  var word = document.getElementById('insertWord').value;
  disableButton('play');
  disableButton('help');
  disableButton('aRange');
  disableButton('correctWord');
  disableButton('incorrectWord');
  disableButton('insertWord');
  disableButton('testWord');

  if (nextIndex == 0) {
    currentState = 'q0';
    colorNode('q0', 'green');
  }
  if (simulateStepwise(word)) {
    nextIndex += 1;
    if (nextIndex == word.length) {
      alert('simulation succesfull');
      enableButton('play');
      enableButton('reset');
      enableButton('forward');
      enableButton('help');
      enableButton('aRange');
      enableButton('correctWord');
      enableButton('incorrectWord');
      enableButton('insertWord');
      enableButton('testWord');
    }
  } else {
    alert('simulation failed');
    enableButton('play');
    enableButton('reset');
    enableButton('forward');
    enableButton('help');
    enableButton('aRange');
    enableButton('correctWord');
    enableButton('incorrectWord');
    enableButton('insertWord');
    enableButton('testWord');
  }
}
function onHelp() {
  introJs()
    .setOptions({
      steps: [
        {
          intro:
            'for further information about the diffrent functions click next',
        },
        {
          element: document.querySelector('#inputHeader'),
          intro:
            'here you can input, generate or test words against the reber grammer.',
        },
        {
          element: document.querySelector('#graph'),
          intro:
            'this is a visualization of the reber grammar as a graph. visited nodes will be marked green.',
        },
        {
          element: document.querySelector('#table'),
          intro:
            'this is the state table. the current transition will be marked green.',
        },
        {
          element: document.querySelector('#controls'),
          intro:
            'here you can control the simulation. click play for start, forward for stepwise simulation, reset for resetting the simulation and use the slider to adjust the simulation speed (left is faster)',
        },
      ],
    })
    .start();
}
function onCorrect() {
  enableButton('play');

  document.getElementById('insertWord').value = create();
}
function onIncorrect() {
  enableButton('play');
  var word = create();
  var list = ['B', 'T', 'T', 'P', 'X', 'S', 'V', 'V', 'P', 'S', 'X', 'E'];
  while (test(word)) {
    var split = word.split('');
    var newWord = '';
    for (var i = 0; i < split.length; i++) {
      if (Math.random() > 0.9) {
        newWord += list[Math.floor(Math.random() * list.length)];
      } else {
        newWord += split[i];
      }
    }
    word = newWord;
  }
  document.getElementById('insertWord').value = word;
}
function onTest() {
  var word = document.getElementById('insertWord').value;
  if (test(word)) {
    alert('word is correct');
  } else {
    alert('word is incorrect');
  }
}
