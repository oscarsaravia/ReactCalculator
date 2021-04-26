/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'

const OperationsButton = ({
  sign, onClick,
}) => {
  const buttsyle = {
    backgroundColor: '#fe9e09',
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
    <button type="button" style={buttsyle} onClick={() => onClick(sign)}>{ sign }</button>
  )
}

OperationsButton.propTypes = {
  sign: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default OperationsButton
