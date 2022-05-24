const btn1 = document.querySelectorAll("[data-button-1]")
const btn2 = document.querySelectorAll("[data-button-2]")
const nextBtn = document.querySelectorAll(".next-button")
const optionScreen1 = document.getElementById("screen-1")
const optionScreen2 = document.getElementById("screen-2")
const optionScreen3 = document.getElementById("screen-3")
const gameBoard = document.getElementById("game-board")

let opponent
let difficulty
let icon
btn1[0].addEventListener('click', () =>{
  opponent = "friend"
  btn2[0].classList.remove('active')
  btn1[0].classList.add('active')
})
btn2[0].addEventListener('click', () =>{
  opponent = "computer"
  btn1[0].classList.remove('active')
  btn2[0].classList.add('active')
})
nextBtn[0].addEventListener('click',() =>{
  if(opponent === "friend"){
    optionScreen1.classList.add('hide')
    optionScreen3.classList.remove('hide')
  }
  else if(opponent === "computer"){
    optionScreen1.classList.add('hide')
    optionScreen2.classList.remove('hide')
  }
  else{
    btn1[0].classList.add("vib")
    btn2[0].classList.add("vib")
  }
})

document.querySelectorAll(".button").forEach(button => {
  button.onanimationend = () => {
    btn1[0].classList.remove("vib")
    btn2[0].classList.remove("vib")
  }
})



btn1[1].addEventListener('click', () =>{
  difficulty = "easy"
  btn2[1].classList.remove('active')
  btn1[1].classList.add('active')
})
btn2[1].addEventListener('click', () =>{
  difficulty = "hard"
  btn1[1].classList.remove('active')
  btn2[1].classList.add('active')
})
nextBtn[1].addEventListener('click',()=>{
  optionScreen2.classList.add('hide')
  optionScreen3.classList.remove('hide')
})
btn1[2].addEventListener('click', () =>{
  icon = "x"
  btn2[2].classList.remove('active')
  btn1[2].classList.add('active')
})
btn2[2].addEventListener('click', () =>{
  icon = "o"
  btn1[2].classList.remove('active')
  btn2[2].classList.add('active')
})
nextBtn[2].addEventListener('click',()=>{
  optionScreen3.classList.add('hide')
  gameBoard.style.filter = "blur(0)"
  startGame()
})
