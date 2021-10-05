for (let i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    mSound(buttonInnerHTML);
    buttonAni(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event){
  mSound(event.key);
  buttonAni(event.key);
});


function mSound(key)
 {
  switch (key) {
    case "w":
      let audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "s":
      let audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "d":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "j":
      let audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;

    case "k":
      let audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

    case "l":
      let audio7 = new Audio("sounds/snare.mp3");
      audio7.play();
      break;

    default:
      console.log("Wrong Key");
  }
};

function buttonAni(currentKey){
  let activeBtn = document.querySelector("."+ currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100)
};
