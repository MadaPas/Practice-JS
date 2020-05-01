
//key press
document.addEventListener("keypress",  (event) => {

    //  console.log(event.key); //pressing button,key ...

    makeSound(event.key); //passing key which is pressed
    buttonAnimation(event.key);
})

//button press
var numberOfDrumButton = document.querySelectorAll(".square").length;

for (var i = 0; i < numberOfDrumButton; i++) {

    document.querySelectorAll(".square")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}

function makeSound(key) {

    switch (key) {
        case 'w':
            var sound_1 = new Audio("sounds/1.mp3");
            sound_1.play();
            break;

        case 'a':
            var sound_2 = new Audio("sounds/2.mp3");
            sound_2.play();
            break;

        case 's':
            var sound_3 = new Audio("sounds/3.mp3");
            sound_3.play();
            break;

        case 'd':
            var sound_4 = new Audio("sounds/4.mp3");
            sound_4.play();
            break;

        case 'j':
            var sound_5 = new Audio("sounds/5.mp3");
            sound_5.play();
            break;

        case 'k':
            var sound_6 = new Audio("sounds/6.mp3");
            sound_6.play();
            break;

        case 'l':
            var sound_7 = new Audio("sounds/7.mp3");
            sound_7.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }

}
//nice animation
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 200);
}

var title = document.querySelector("#change-color");
var colors = ["#F2D7EE", "#E3CAD7", "#D3BCC0", "#BC91A6", "#D0AEBF", "#B17C99", "#AB7192", "#A5668B", "#874B7C", "#5B265F", "#69306D", "#3C2055", "#0E103D", "#262750"];
var count = 0;
var clearAnimation = setInterval(changeColor, 300);
//using setInterval,no need to use loop inside function

//remove interval at onclick
// title.onclick = function () {
//     clearInterval(clearAnimation);
// }

function changeColor() {
    title.style.background = colors[count];
    count++;
    if (count >= colors.length) {
        count = 0;
    }
}

function popFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter (YOU WISH)");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today? Wanna play some music?";
  }
  document.getElementById("demo").innerHTML = txt;
}