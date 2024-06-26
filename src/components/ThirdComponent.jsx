import React from 'react'
import PropTypes from "prop-types";

export const ThirdComponent = ({card}) => {
    console.log(card);
  return (
    <div>
        <hr width="100%"/>
        <h2>Values Props</h2>
        <p>Estatura: {card.height}</p>
        <p>Tipo de Sangre: RH{card.rh}</p>
        <p>Alergias: {card.allergies}</p>
    </div>
  )
}

ThirdComponent.propTypes = {
  card: PropTypes.object
}
