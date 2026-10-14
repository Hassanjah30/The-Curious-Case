let hasCoin = false;
let calledFriend = false;
let hasKey = false;

function goTo(number) {
  document.getElementById("scene1").style.display = "none";
  document.getElementById("scene2").style.display = "none";
  document.getElementById("scene3").style.display = "none";
  document.getElementById("scene4").style.display = "none";
  document.getElementById("scene5").style.display = "none";
  document.getElementById("scene" + number).style.display = "block";
}

function checkBench() {
  if (hasCoin === false) {
    hasCoin = true;
    document.getElementById("coin").innerHTML = "yes";
    document.getElementById("text1").innerHTML = "You find a coin under the bench!";
  } else {
    document.getElementById("text1").innerHTML = "There's nothing else on the bench.";
  }
}

function callFriend() {
  if (calledFriend === true) {
    document.getElementById("text2").innerHTML = "You already called Sam. They're on the way.";
  } else if (hasCoin === true) {
    calledFriend = true;
    document.getElementById("called").innerHTML = "yes";
    document.getElementById("text2").innerHTML = "You call your friend Sam. \"Stay there, I'll pick you up outside!\"";
  } else {
    document.getElementById("text2").innerHTML = "You don't have a coin. Maybe look around the platform.";
  }
}

function openGate() {
  if (hasKey === false) {
    document.getElementById("text3").innerHTML = "It's locked. You need a key.";
  } else if (calledFriend === true) {
    document.getElementById("endingTitle").innerHTML = "5. Home Safe";
    document.getElementById("endingImg").src = "images/ending-escape.svg";
    document.getElementById("endingText").innerHTML = "You unlock the gate and walk outside. Sam is already waiting in the car. You get home before 2 AM.";
    goTo(5);
  } else {
    document.getElementById("endingTitle").innerHTML = "5. The First Train";
    document.getElementById("endingImg").src = "images/ending-truth.svg";
    document.getElementById("endingText").innerHTML = "You get outside, but nobody knows you're stuck. You wait on the steps all night and catch the first train at 5:30 AM. Maybe next time, call someone.";
    goTo(5);
  }
}

function askForKey() {
  hasKey = true;
  document.getElementById("key").innerHTML = "yes";
  document.getElementById("text4").innerHTML = "He sighs and hands you the gate key. \"Just leave it in the lock.\"";
}

function restart() {
  hasCoin = false;
  calledFriend = false;
  hasKey = false;
  document.getElementById("coin").innerHTML = "no";
  document.getElementById("called").innerHTML = "no";
  document.getElementById("key").innerHTML = "no";
  document.getElementById("text1").innerHTML = "You just missed the last train home. Your phone is dead and it's raining. You need to find a way out.";
  document.getElementById("text2").innerHTML = "An old payphone. It needs a coin.";
  document.getElementById("text3").innerHTML = "The exit gate is locked for the night. There's a light on in the staff office.";
  document.getElementById("text4").innerHTML = "A tired station worker opens the door. \"We're closed,\" he says.";
  goTo(1);
}
