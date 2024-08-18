var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var d1 = new Audio("d1.wav");
      d1.play();
      break;

    case "a":
      var b = new Audio("b.wav");
      b.play();
      break;

    case "s":
      var c = new Audio('c.wav');
      c.play();
      break;

    case "d":
      var d = new Audio('d.mp3');
      d.play();
      break;

    case "j":
      var e = new Audio('e.mp3');
      e.play();
      break;

    case "k":
      var f = new Audio('f.mp3');
      f.play();
      break;

    case "l":
      var g = new Audio('g.mp3');
      g.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}