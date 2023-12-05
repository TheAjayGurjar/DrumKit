
//in order to start registering the button clicks, I need to add what we 
//call an event listener to it, so the buttons will let me know when a 
//user clicks on it. an event listerner takes two arguments, 
// first a type of event html and second a listener js function to be triggered.

//document.querySelector("button").addEventListener("click", handleClick);
// above we used only function name not the paranthesis cuz we only
// are giving the reference to the function not running the function.
// we can also use an anonymous function instead of making a sepaarate 
// function since it is used only inside this event listener.

// document.querySelector("button").addEventListener("click",function () {
//     alert("i got clicked")
//     } );

// use a for loop to add event listener to all drum boxes.
var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

        // this keyword means whichever element is given as parameter in input in function
        // can be known by using this;
        // changing color of the element selected
        //this.style.color="white";

        // we will use switch statement to play sound according to the 
        // parsed element in the function.
        var buttonInnerHTML = this.innerHTML;

        // using method to make sound button press ******************************imps
        makeSound(buttonInnerHTML);

        // using method to make animation on  button press
        buttonAnimation(buttonInnerHTML);
        

    } );
}


// we added the eventlistener to the entire web page.
// we can also pass an parameter in the function lets say it event
document.addEventListener("keypress",function(event){

   // alert("key was pressed");

    // now if we pass that event in the console.log
    // console.log(event);
    // we will get the output KeyboardEvent object constructor which is parsed by the browser itself.
    // and it also has the property of key which tells which key was pressed.
    // so event here helps to identify some data which can identify the type of event
    // or what is causing the functio to run.
    // this function(event){} is also known as call back function more on that in codepen.


    // now if we use this event with dot notation and find out which key is pressed
    // then we can take acctions based on that key by passing it into the makesound
    //function which creates sound on a particular key

        // using method to make sound on key press *************************************imp
        makeSound(event.key);

        //using animation function to animate on key press
        buttonAnimation(event.key);

    

});

document.addEventListener("keypress",function(event){

    // using method to make sound on key press
    makeSound(event.key);

});




// creating the function to make sound.

function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break; 
            
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
            
    }

}



// adding animation to the buttons on pressed
function buttonAnimation(currentKey){
    var activButton = document.querySelector("."+currentKey);
    activButton.classList.add("pressed");

    // set time out is the built in function in js, which takes function and time out time.
    setTimeout(function(){
        activButton.classList.remove("pressed");
    },100);

}




// var audio = new Audio('audio_file.mp3');
// audio.play();
// Show code snippet

// This uses the HTMLAudioElement interface, which plays audio the same way as the <audio> element.






// function handleClick() {
// alert("i got clicked")
// }