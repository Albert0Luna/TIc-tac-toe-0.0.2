import { useContext } from 'react'
import { checkWinner } from '../logic/checkWinner'
import confetti from 'canvas-confetti'
import { GameContext } from '../context/gameContext'

export function useRenderGame () {
  const { mark, setWinner, winner, setMarks, previuosTurn } = useContext(GameContext)
  const renderGame = (index) => {
    if (mark[index] || winner) return
    const newBoard = [...mark]

    previuosTurn.current === '❌' ? previuosTurn.current = '🟢' : previuosTurn.current = '❌'
    localStorage.setItem('turn', JSON.stringify(previuosTurn.current))

    newBoard[index] = previuosTurn.current
    localStorage.setItem('board', JSON.stringify(newBoard))

    setMarks(newBoard)
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      localStorage.setItem('turn', JSON.stringify('🟢'))
      localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
      setWinner(newWinner)
    }

    if (newBoard.every(square => square !== null)) {
      localStorage.setItem('turn', JSON.stringify('🟢'))
      localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
      setWinner(false)
    }
  }
  return { renderGame }
}
