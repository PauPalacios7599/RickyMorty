import React, { useState, useEffect } from 'react'
import Character from './components/Character/character'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // Petición a la API de Rick y Morty
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error al obtener los datos:', error))
  }, [])

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <div className='character-container'>
        {' '}
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default App
