import { useState } from 'react'
import './App.css'
 const TURNS = {
  X: 'X',
  O: 'o'
 }

 const board = Array(9).fill(null)

function App() {
  return (
    <main className='board'>
        <h1>Ta Te Ti </h1>
        <section className='game'>
          {
            board.map((_, index) =>{
              return(
                <div className='cell'>
                  <span className='cell_content'>
                    {index}
                  </span>
                </div>
              )
            })
          }
        </section>
    </main>
  )
}

export default App
