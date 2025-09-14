'use strict';

// Define the boom number
let boom = Math.floor(Math.random() * 100) + 1;
console.log('Boom number:', boom); // visible in console
let count = 10;

function checkGuess() {
  if (count > 0) {
    count--; // kurangi 1
  } else {
    count = 10; // reset ke 10 kalau sudah 0
  }
  document.getElementById('score').innerText = count;

  if (count === 0) {
    document.getElementById('result').textContent =
      "💥 BOOM! You're dead! The Boom Number: " + boom;
    document.getElementsById('checkBtn').disabled = true;
    document.getElementsById('checkFinalBtn').disabled = true;

    boom = Math.floor(Math.random() * 100) + 1;
    console.log('New boom number:', boom);
    return;
  }

  let userGuess = parseInt(document.getElementById('guess').value);
  if (userGuess < boom) {
    document.getElementById('result').textContent = '⬆️ Going up';
  } else if (userGuess > boom) {
    document.getElementById('result').textContent = '⬇️ Going down';
  } else {
    document.getElementById('result').textContent =
      "💥 BOOM! You're dead! The Boom Number: " + boom;
    document.getElementById('score').innerText = '💀';
    document.getElementsById('checkBtn').disabled = true;
    document.getElementsById('checkFinalBtn').disabled = true;
    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('New boom number:', boom);
  }
}

function reset() {
  count = 10;
  boom = Math.floor(Math.random() * 100) + 1;
  document.getElementById('score').innerText = count;
  document.getElementById('result').textContent = '';
  document.getElementById('finalResult').textContent = '';
  document.getElementsById('checkBtn').disabled = false;
  document.getElementsById('checkFinalBtn').disabled = false;
}

function checkFinal() {
  let userFinal = parseInt(document.getElementById('finalGuess').value);

  if (userFinal === boom) {
    document.getElementById('finalResult').textContent =
      '✅ Awesome, You just saved the world!';
    document.getElementsById('checkBtn').disabled = true;
    document.getElementsById('checkFinalBtn').disabled = true;
    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('Boom baru:', boom);
  } else {
    document.getElementById('finalResult').textContent =
      "💥 BOOM! You're dead! The Boom Number: " + boom;
    document.getElementById('score').innerText = '💀';
    document.getElementsById('checkBtn').disabled = true;
    document.getElementsById('checkFinalBtn').disabled = true;
    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('New boom number:', boom);
  }
}
