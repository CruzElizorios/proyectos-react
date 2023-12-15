import { combos_winner } from "../components/constants.js"

export const checkWinner = (boardToCheck) => {
    //recorro todos los combos ganadores
    for (const combo of combos_winner) {
        const [a, b, c] = combo
        //compara que lo que esta en la posicion 'a' se repita en las posiciones 'b' y 'c'
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    //si no hay ganador(despues de comparar con todos los combos)
    return null
}

export const checkEmpate = (newBoard) => {
    //revisamos si no hay espacios vacios(null) en el tablero
    // newBoard = ['x','o','x',null,'x','o','x',null,'o']
    return newBoard.every((square) => square !== null)
    //si se cumple esto devuelve un true
}