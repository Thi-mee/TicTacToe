const xClass = "X"
const oClass = "O"
const cells = document.querySelectorAll("[data-cell]")
const finalScreen = document.getElementById("screen-4")
const finalMessage = document.getElementById("end-message")
const winningCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]





let currentIcon
document.getElementById("restart-btn").addEventListener("click", startGame)

function startGame(){
  if(icon==="x"){currentIcon = true}
  else if(icon==="o"){currentIcon = false}
  
  gameBoard.style.filter = "blur(0px)"
  finalScreen.classList.add("hide")
  addHoverclass()


  cells.forEach(cell => {
    cell.classList.remove(oClass)
    cell.classList.remove(xClass)
    cell.addEventListener('click', handleClick, {once: true})
  })

}

function handleClick(e){
  const cell = e.target
  const whoseTurn = currentIcon ? xClass : oClass
  placeMark(cell, whoseTurn)
  
  if(opponent === "friend"){
    if(checkWinningCombos(whoseTurn)){
      endGame(true,whoseTurn)
    }
    else if(isDraw()){
      endGame(false,whoseTurn)
    }
    else{
      swapTurn(whoseTurn)
      addHoverclass()
    }
  }
}

function placeMark(cell, turn){
  cell.classList.add(turn)
}
function swapTurn(){
  currentIcon = !currentIcon
}
function addHoverclass(){
  gameBoard.classList.remove(xClass)
  gameBoard.classList.remove(oClass)
  if(currentIcon){
    gameBoard.classList.add(xClass)
  }
  else{
    gameBoard.classList.add(oClass)
  }
}
function checkWinningCombos(whoseTurn){
  return winningCombos.some(combo => {
    return combo.every(index => {
      return cells[index].classList.contains(whoseTurn)
    })
  })
}
function isDraw(){
  return [...cells].every(cell =>{
    return cell.classList.contains(xClass)||cell.classList.contains(oClass)
  })
}
function endGame(win, turn){
  if(win){
    finalMessage.textContent = `${turn}'s wins`
  }
  else if(!win){
    finalMessage.textContent = "It's a draw"
  }
  gameBoard.style.filter = "blur(10px)"
  finalScreen.classList.remove("hide")
}