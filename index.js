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

    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('New boom number:', boom);
  }
}

function checkFinal() {
  let userFinal = parseInt(document.getElementById('finalGuess').value);

  if (userFinal === boom) {
    document.getElementById('finalResult').textContent =
      '✅ Awesome, You just saved the world!';
    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('Boom baru:', boom);
  } else {
    document.getElementById('finalResult').textContent =
      "💥 BOOM! You're dead! The Boom Number: " + boom;

    // reset game
    boom = Math.floor(Math.random() * 100) + 1;
    console.log('New boom number:', boom);
  }
}
