var diceImages = [ // list of images used for die faces and their directory
    "images/Skull1.png",
    "images/Fortuna.png",
    "images/Scar1.png",
    "images/Scar2.png",
    "images/Scar3.png",
    "images/Skull2.png"
  ];
  var intervalIds = [];
  var gameInProgress = false; // variable of game state
  /* var rerollCounter = 0; */ //  I was planning on looping rerollDice fuction with different alerts, and choice driven outcomes havent figured it out though

  function rollDie() { // this function is clled by the onclick for the inital roll of the dice
    if (gameInProgress) return;
  
    var rollButton = document.getElementById("rollButton"); // variable that looks for roll button input from web page
    rollButton.disabled = true; 
  
    for (var i = 1; i <= 3; i++) { // randomizes die faces
      var intervalId = setInterval(changeDiceImage.bind(null, i), 100);
      intervalIds.push(intervalId);
    }
  
    var stopButton = document.getElementById("stopButton"); // variable that looks for stopbutton input from web page
    stopButton.disabled = false;
  
    gameInProgress = true;
  }
  
  function changeDiceImage(diceNumber) { // this fuction rotates the image reprresentation of dice faces randomily
    var diceImage = document.getElementById("diceImage" + diceNumber);
    var randomIndex = Math.floor(Math.random() * diceImages.length);
    diceImage.src = diceImages[randomIndex];
  }
  
  function stopRoll() { // this function stop the dice from rolling
    intervalIds.forEach(clearInterval);
    intervalIds = [];
  
    var stopButton = document.getElementById("stopButton"); //variable that looks for stop button input from web page
    stopButton.disabled = true;
    gameInProgress = false;
  } 
  
  function multiFunction() { // this function does 3 things. first is alerts some flavor text, second it calls the rerollDice Function, third
    // it calls the reactivateStopButton function.
   alert("Goddesses Favor Rogues");
   rerollDice();
   reactivateStopButton();
  }
  function rerollDice() { // this fuction starts the dice rerolling

   var rerollButton = document.getElementById("rerollButton"); // variable that looks for reroll dice input from web page
   
       for (var i = 1; i <= 3; i++) {
       var intervalId = setInterval(changeDiceImage.bind(null, i), 100);
       intervalIds.push(intervalId);
       }
  }

  function reactivateStopButton() { // this reactivates the stop button in stopRoll fumction
    var stopButton = document.getElementById("stopButton");
  stopButton.disabled = false;
  }

