/* eslint-disable react/prop-types */
import { classRoots } from '../styles/styles'
import React, { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function RenderBoard ({ renderGame }) {
  const { mark } = useContext(GameContext)
  return (
        <div className='w-72 md:w-[500px] md:h-[500px] grid grid-cols-3 gap-5 m-auto'>
      {mark.map((turnToPlay, index) => (
        <div key={index} className='md:w-40 md:h-40 flex'>
          <button role={index} onClick={() => renderGame(index)} className={classRoots.squares}>
            {turnToPlay === '❌'
              ? <div className={classRoots.circle}>{turnToPlay}</div>
              : <div className={classRoots.cross}>{turnToPlay}</div>
            }
        </button>
        </div>
      ))}
      </div>
  )
}
