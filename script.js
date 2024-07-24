homeNumber = document.getElementById("home__number");
guestNumber = document.getElementById("guest__number");
clearBtn = document.getElementById("btn__clear-board");

let numberOne = 0;
let numberTwo = 0

function homeOne() {
  numberOne = numberOne +=1
  homeNumber.textContent = numberOne
}

function homeTwo() {
  numberOne = numberOne +=2
  homeNumber.textContent = numberOne
}

function homeThree() {
  numberOne = numberOne +=3
  homeNumber.textContent = numberOne
}

function guestOne() {
  numberTwo = numberTwo +=1
  guestNumber.textContent = numberTwo
}

function guestTwo() {
  numberTwo = numberTwo +=2
  guestNumber.textContent = numberTwo
}

function guestThree() {
  numberTwo = numberTwo +=3
  guestNumber.textContent = numberTwo
}

function clearBoard() {
  if(homeNumber.textContent){
    homeNumber.textContent = 0
    numberOne = 0
  } 
  
  if(guestNumber.textContent){
    guestNumber.textContent = 0
    numberTwo = 0
  }

}