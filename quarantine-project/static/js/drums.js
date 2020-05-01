
//button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });

}

//key press
document.addEventListener("keypress", function (event) {

  //  console.log(event.key); //pressing button,key ...
  
    makeSound(event.key); //passing key which is pressed
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case 'q':
            var tom1 = new Audio("sounds/1.mp3");
            tom1.play();
            break;

        case 'w':
            var tom2 = new Audio("sounds/2.mp3");
            tom2.play();
            break;

        case 'a':
            var tom3 = new Audio("sounds/3.mp3");
            tom3.play();
            break;

        case 's':
            var tom4 = new Audio("sounds/4.mp3");
            tom4.play();
            break;

        case 'o':
            var snare = new Audio("sounds/5.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("sounds/6.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("sounds/7.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);
    }

} 
//nice animation
function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){ activeButton.classList.remove("pressed")}, 200); 
}
