import React from 'react'
import '../main.css'
import { Modal } from './Modal'
import { TurnAndReset } from './TurnAndReset'
import { RenderBoard } from './RenderBoard'
import { Header } from './Header.jsx'
import { useRenderGame } from '../hooks/useRenderGame'
import { useResetGame } from '../hooks/useResetGame'

export function TicTacToe () {
  const { renderGame } = useRenderGame()
  const { resetGame } = useResetGame()
  return (
    <main >
        <Header />
        <RenderBoard renderGame={renderGame} />
        <TurnAndReset resetGame={resetGame}/>
        <Modal resetGame={resetGame}/>
    </main>
  )
}
