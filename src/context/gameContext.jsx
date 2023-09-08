/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
import React, { createContext, useState, useRef } from 'react'

export const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const previuosTurn = useRef(JSON.parse(localStorage.getItem('turn')))

  const [mark, setMarks] = useState(
    JSON.parse(localStorage.getItem('board')) ||
      Array(9).fill(null)
  )

  const [winner, setWinner] = useState(null)

  return (
		<GameContext.Provider value={{
		  previuosTurn,
		  mark,
		  setMarks,
		  winner,
		  setWinner
		}}>
			{children}
		</GameContext.Provider>
  )
}
