/* eslint-disable react/prop-types */
import { classRoots } from '../styles/styles'
import React, { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function Modal ({ resetGame }) {
  const { winner } = useContext(GameContext)
  return (
    <>
      {winner !== null && (
        <div className={classRoots.modalContainer}>
          <div className={classRoots.modalCont}>
            <p className={classRoots.modalText}>
              {winner === false
                ? (
                    'Draw'
                  )
                : (
                <>
                  <span className='text-lime-500'>W</span>
                  <span className='text-pink-500'>i</span>
                  <span className='text-blue-500'>n</span>
                  {winner}
                </>
                  )}
            </p>
            <button className={classRoots.resetGameWinner} onClick={resetGame}>
              Reset Game
            </button>
          </div>
          <div className={classRoots.modalBackgroud}></div>
        </div>
      )}
    </>
  )
}
