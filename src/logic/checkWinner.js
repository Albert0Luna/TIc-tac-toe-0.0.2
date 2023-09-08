import { winnerCombos } from '../services/winnerCombos.js'

export const checkWinner = (boardToCheck) => {
  //* revisar todas las combinaciones ganadoras
  for (const combo of winnerCombos) {
    const [a, b, c] = combo
    if (boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // x u o
    }
  }
  return null
}
