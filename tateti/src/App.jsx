import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square.jsx'
import { TURNS } from './components/constants.js'
import { checkWinner, checkEmpate } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)



  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      confetti()
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
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
