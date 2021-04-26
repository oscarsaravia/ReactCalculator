/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'

const NumberButton = ({
  number, onClick,
}) => {
  const buttsyle = {
    backgroundColor: '#333333',
    border: '1px solid #111',
    padding: '20px',
    color: 'white',
    borderRadius: '50%',
    fontSize: '22px',
    cursor: 'pointer',
    width: '70px',
    height: '70px',
    margin: '5px 5px 5px 5px',
  }

  return (
    <div className="container">
      <button type="button" style={buttsyle} onClick={() => onClick(number)}>{ number }</button>
    </div>
  )
}

NumberButton.propTypes = {
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default NumberButton
