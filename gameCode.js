function playCraps() {
    //this is a function to play craps in the game.html
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    console.log("die1 result = " + die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;

    var die2 = Math.ceil(Math.random() * 6);
    console.log("die2 result = " + die2);
    document.getElementById("die1Res").innerHTML = "die2 result = " + die2;
    var sum = die1 + die2;
    console.log("sum result = " + sum);
    document.getElementById("sumRes").innerHTML = "sum = " + sum;
    // check for 7 or 11 meaning a loss
    if (sum == 7 || sum == 11) {
        document.getElementById("gameRes").innerHTML = "you lost to the flash!"
    } //check for doubles and even for the win
    else if (die1 == die2 && die1 %2 == 0){
        document.getElementById("gameRes").innerHTML = 
        "You Beat the flash!"
    } //You won!
        else {
       document.getElementById("gameRes").innerHTML =
           "you did not win or lose, but who really wins anyways?"
   }
}