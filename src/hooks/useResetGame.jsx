import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function useResetGame () {
  const { setMarks, setWinner, previuosTurn } = useContext(GameContext)
  const resetGame = () => {
    localStorage.setItem('turn', JSON.stringify('🟢'))
    localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
    setMarks(Array(9).fill(null))
    setWinner(null)
    previuosTurn.current = localStorage.getItem('turn') || 'O'
  }
  return { resetGame }
}
