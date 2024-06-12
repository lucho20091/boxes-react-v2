import './App.css';
import React from 'react'
import Box from './components/Box'
import boxes from './boxes'

export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  console.log(squares)
  
  function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map((square) => {
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
  }
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={() => toggle(square.id)}
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}
