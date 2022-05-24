const xClass = "x"
const oClass = "o"
const cells = document.querySelectorAll("[data-cell]")
const winningCombos = [
  [1,2,3],[4,5,6],[7,8,9],
  [1,4,7],[2,5,8],[3,6,9],
  [1,5,9],[3,5,7]
]





let currentIcon

function startGame(){
  if(icon==="x"){currentIcon = true}
  else if(icon==="o"){currentIcon = false}
  
  addHoverclass()


  cells.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
  })

}

function handleClick(e){
  const cell = e.target
  let whoseTurn = currentIcon ? xClass : oClass
  placeMark(cell, whoseTurn)

  checkWinningCombos()
  swapTurn(whoseTurn)
  addHoverclass()
  
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