/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import NumberButton from './NumberButton'

describe('Number Button tests', () => {
  test('Number Button renders correctly', () => {
    render(<NumberButton number="1" onClick={() => {}} />)
  })
})
