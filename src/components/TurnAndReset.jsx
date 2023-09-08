/* eslint-disable react/prop-types */
import { classRoots } from '../styles/styles'
import React, { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function TurnAndReset ({ resetGame }) {
  const { winner, mark } = useContext(GameContext)
  return (
  <div className='w-full flex my-5 flex-col'>
      {!winner && !(mark.every(mark => mark === null)) && (
                <div className={classRoots.turn}>
                <p>
                  Turn of: {
                  JSON.parse(localStorage.getItem('turn')) === '❌'
                    ? '🟢'
                    : '❌'}
                </p>
              </div>
      )}
      {!(mark.every(mark => mark === null)) && !winner && <button className={classRoots.resetGame} onClick={resetGame}>Reset Game</button>}
  </div>
  )
}
