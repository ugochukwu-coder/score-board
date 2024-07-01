homeNumber = document.getElementById("home__number");
guestNumber = document.getElementById("guest__number");
clearBtn = document.getElementById("btn__clear-board");

let number = 0;

function homeOne() {
  number = number+=1
  homeNumber.textContent = number
}

function homeTwo() {
  number = number+=2
  homeNumber.textContent = number
}

function homeThree() {
  number = number+=3
  homeNumber.textContent = number
}

function guestOne() {
  number = number+=1
  guestNumber.textContent = number
}

function guestTwo() {
  number = number+=2
  guestNumber.textContent = number
}

function guestThree() {
  number = number+=3
  guestNumber.textContent = number
}

function clearBoard() {

  homeNumber.textContent = 0;
  guestNumber.textContent = 0;
  number = 0
}