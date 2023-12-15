
export function WinnerModal({winner, resetGame}) {

    if (winner == null) {
        return null
    }
    const winnerText =  winner === false ? '😱 empate 😱' : 'Ganador🏆: ' + winner
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <button onClick={resetGame}>Empezar de nuevo</button>
            </div>
        </section>
    )
}
