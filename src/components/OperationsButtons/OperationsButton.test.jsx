/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import OperationsButton from './OperationsButton'

describe('Operation Butto tests', () => {
  test('Number Button renders correctly', () => {
    render(<OperationsButton sign="+" onClick={() => {}} />)
  })
})
