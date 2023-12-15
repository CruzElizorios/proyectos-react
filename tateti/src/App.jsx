import { useState } from 'react'
import './App.css'
 
  const TURNS = {
  X: '✖️',
  O: '⭕'
 }


const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : '' }`

  const handleClick = () => {
    updateBoard(index)
  }
  return(
    <div onClick={handleClick} className={className} >
      {children}
    </div>
  )
}
const combos_winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) =>{
    //recorro todos los combos ganadores
    for(const combo of combos_winner){
      const [a,b,c] = combo
      //compara que lo que esta en la posicion 'a' se repita en las posiciones 'b' y 'c'
      if( boardToCheck[a] && boardToCheck[a]===boardToCheck[b] && boardToCheck[a]===boardToCheck[c]){
        return boardToCheck[a]
      }
    }
    //si no hay ganador(despues de comparar con todos los combos)
    return null
  }

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  const checkEmpate = (newBoard)=>{
    //revisamos si no hay espacios vacios(null) en el tablero
    // newBoard = ['x','o','x',null,'x','o','x',null,'o']
    return newBoard.every((square)=> square !== null)
    //si se cumple esto devuelve un true
  }

  const updateBoard = (index) => {
    //para dejar sobreescribir el tablero Si se clickea sobre uno ya marcado o si hay ganador
    if (board[index] || winner) return
    //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //verifica si el hay ganador con el ultimo movimiento cargado
    const newWinner = checkWinner(newBoard)
    //si hay ganador setea el ganador sino fue un empate
    if(newWinner){
      setWinner(newWinner)
    }else if (checkEmpate(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
        <h1>Ta Te Ti </h1>
        <section className='game'>
          {
            board.map((square , index) =>{
              return(
                <Square key={index}
                 index={index}
                 updateBoard={updateBoard} >
                  {square}
                </Square>
              )
            })
          }
        </section>
        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X} 
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O} 
          </Square>
        </section>
        <button onClick={resetGame}>Reiniciar partida</button>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false ? 'empate' : 'Ganador ' + winner
                  }
                </h2>
                  <button onClick={resetGame}>Empezar de nuevo</button>
              </div>
            </section>
          )
        }
    </main>
  )
}

export default App
