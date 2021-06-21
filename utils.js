function disableButton(name) {
  document.getElementById(name).disabled = true;
}
function enableButton(name) {
  document.getElementById(name).disabled = false;
}
function addRow(step, oldState, newState, rule) {
  var table = document
    .getElementById('output')
    .getElementsByTagName('tbody')[0];
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  cell1.innerHTML = step;
  cell2.innerHTML = oldState;
  cell3.innerHTML = newState;
  cell4.innerHTML = rule;
}
function clearRows() {
  var table = document.getElementById('output');
  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i >= 1; i--) {
    table.deleteRow(i);
  }
}
