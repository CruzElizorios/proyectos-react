import { useState } from 'react'
import './App.css'
 
  const TURNS = {
  X: 'x',
  O: 'o'
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
    
    if(newWinner){
      setWinner(newWinner)
    }
  }

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
  return (
    <main className='board'>
        <h1>Ta Te Ti </h1>
        <section className='game'>
          {
            board.map((_, index) =>{
              return(
                <Square key={index}
                 index={index}
                 updateBoard={updateBoard} >
                  {board[index]}
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
