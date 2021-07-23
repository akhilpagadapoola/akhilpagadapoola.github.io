function checkNumber(msg) {
    const num = +msg;
  
    // Check if valid number
    if (Number.isNaN(num)) {
      msgEl.innerHTML += '<div>That is not a valid number</div>';
      return;
    }
  
    // Check in range
    if (num > 100 || num < 1) {
      msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
      return;
    }
  
    // Check number
    if (num === randomNum) {
      document.body.innerHTML = `
        <h2>Congrats! You have guessed the number! <br><br>
        It was ${num}</h2>
        <button class="play-again" id="play-again">Play Again</button>
      `;
    } else if (num > randomNum) {
      msgEl.innerHTML += '<div>GO LOWER</div>';
    } else {
      msgEl.innerHTML += '<div>GO HIGHER</div>';
    }
  }
module.exports=checkNumber;



// function randomNumber(){
//     const r = Math.floor(Math.random()*1);
//     return r;
// }

// module.exports=randomNumber;