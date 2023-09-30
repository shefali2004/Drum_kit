// function handleclick(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

//==================done but make sound only by clicking=============

// var n = document.querySelectorAll(".drum").length;
// for(var i = 0;i<n;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function (){
//         var  buttoninnerhtml = this.innerHTML;
//         switch (buttoninnerhtml) {
//             case 'w':
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//                 break;
//             case 'a':
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();
//                 break;
//             case 's':
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play();
//                 break;
//             case 'd':
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play();
//                 break;
//             case 'j':
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case 'k':
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case 'l':
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break;

//             default:
//                 console.log(buttoninnerhtml);
//                 break;
//         }
//     });
// }



// we can also write the above js like this
// document.querySelector("button").addEventListener("click",function () {alert("I got clicked");});

//=================adding the key feature======================

var no_ofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_ofbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;

    makesound(buttoninnerhtml);

    buttonAnimation(buttoninnerhtml);
  });
}

document.addEventListener("keydown", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
switch (key) {
    case "w":
var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
   audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttoninnerhtml);
      break;
  }
}

function buttonAnimation(currentkey){

    document.querySelector("."+currentkey).classList.add("pressed");
    
    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed");

    },100);



}