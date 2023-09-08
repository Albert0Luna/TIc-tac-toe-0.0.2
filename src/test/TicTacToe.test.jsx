import React from 'react'
import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import { it, describe, afterEach, expect } from 'vitest'
import { TicTacToe } from '../components/TicTacToe'
import { Header } from '../components/Header'
import { GameProvider } from '../context/gameContext'

const turns = {
  X: '❌',
  O: '🟢'
}

describe('TicTacToe', () => {
  afterEach(() => {
    cleanup()
  })

  const { X, O } = turns

  it('should render a title', () => {
    render(
      <GameProvider>
        <TicTacToe />
      </GameProvider>
    )
    screen.getByText('Tic Tac Toe')
  })

  it('should render X when is clicked', () => {
    render(
      <GameProvider>
        <TicTacToe />
      </GameProvider>
    )
    const btn = screen.getByRole('2')
    fireEvent.click(btn)
    const btnClicked = screen.getByRole('2')
    expect(btnClicked.textContent).toBe(X)
  })

  it('should keep the mark when is double clicked', () => {
    render(
      <GameProvider>
        <TicTacToe />
      </GameProvider>
    )
    const btn = screen.getByRole('2')
    fireEvent.click(btn)
    fireEvent.click(btn)
    const btnClicked = screen.getByRole('2')
    expect(btnClicked.textContent).toBe(X)
  })

  it('should change the turn each clik', () => {
    render(
      <GameProvider>
        <TicTacToe />
      </GameProvider>
    )
    const btn0 = screen.getByRole('0')
    fireEvent.click(btn0)

    const btn1 = screen.getByRole('1')
    fireEvent.click(btn1)

    const btnClicked0 = screen.getByRole('0')
    expect(btnClicked0.textContent).toBe(O)

    const btnClicked1 = screen.getByRole('1')
    expect(btnClicked1.textContent).toBe(X)
  })
})
