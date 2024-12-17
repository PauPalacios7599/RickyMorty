import React, { useState } from 'react'
import './character.css'
import proptypes from 'prop-types'

const CharacterCard = ({ character }) => {
  const [isRotated, setIsRotated] = useState(false)

  const handleImageClick = () => {
    setIsRotated(!isRotated) // Cambia el estado al hacer clic
  }

  return (
    <div>
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        onClick={handleImageClick}
      />
      <p>{character.species}</p>
    </div>
  )
}

export default CharacterCard
