window.onload = function() {
  var image = document.getElementById("first-hamster");
  var text = document.getElementById("text");

  document.onkeydown = function(event) {
    switch(event.keyCode) {
      case 37:
        image.src = "images/left.png";
        text.innerHTML = "For shizzles."
        break;
      case 38:
        image.src = "images/top.png";
        text.innerHTML = "Gimme a hollaaa!"
        break;
      case 39:
        image.src = "images/right.png";
        text.innerHTML = "Oooh ooh boogie."
        break;
      case 40:
        image.src = "images/down.png";
        text.innerHTML = "You didn't see anything.";
    }
  }
}
