import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicTacToe } from './components/TicTacToe'
import './main.css'
import { GameProvider } from './context/gameContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GameProvider>
        <TicTacToe />
    </GameProvider>
)
