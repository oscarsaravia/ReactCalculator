/* eslint-disable linebreak-style */
// eslint-disable-next-line no-console
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import NumberButton from './components/NumberButton/NumberButton'
import OperationsButton from './components/OperationsButtons/OperationsButton'

const App = () => {
  const [currentInput, changeInput] = useState('')
  const [newInput, changeNewInput] = useState(false)
  const [operation, setOperation] = useState({
    val1: '',
    op: '',
    val2: '',
  })
  const operar = (operadorFinal) => {
    setOperation({
      val1: operation.val1,
      op: operation.op,
      val2: currentInput,
    })
    setOperation(({ val1, op, val2 }) => {
      let resultado = 0
      switch (op) {
        case '+':
          resultado = parseFloat(val1) + parseFloat(val2)
          if (resultado > 999999999) {
            changeInput('ERROR')
            changeNewInput(true)
          } else {
            changeInput(resultado.toFixed(2))
          }
          break
        case '-':
          resultado = parseFloat(val1, 10) - parseFloat(val2, 10)
          if (resultado > 999999999) {
            changeInput('ERROR')
            changeNewInput(true)
          } else {
            changeInput(resultado.toFixed(2))
          }
          break
        case '*':
          resultado = parseFloat(val1, 10) * parseFloat(val2, 10)
          if (resultado > 999999999) {
            changeInput('ERROR')
            changeNewInput(true)
          } else {
            changeInput(resultado.toFixed(2))
          }
          break
        default:
      }
      return {
        val1: resultado.toString(),
        op: operadorFinal,
        val2: '',
      }
    })
  }
  const makeOperation = (symb) => {
    if (operation.op === '') {
      setOperation({
        val1: currentInput,
        op: symb,
        val2: '',
      })
      changeInput('')
    } else {
      operar(symb)
      changeNewInput(true)
    }
  }
  const agregarNumero = (num) => {
    if (newInput === true) {
      changeInput('')
      changeInput(num)
      changeNewInput(false)
    } else if (currentInput.length < 9) {
      if (num === '.') {
        if (currentInput.includes('.') === false) {
          changeInput(currentInput + num)
        }
      } else {
        changeInput(currentInput + num)
      }
    }
  }

  const cambiarSigno = () => {
    if (currentInput !== '') {
      if (currentInput.length < 9) {
        const operacion = parseFloat(currentInput) * -1
        changeInput(operacion.toFixed(2).toString())
      }
    }
  }
  const clear = () => {
    changeInput('')
    setOperation({
      val1: '',
      op: '',
      val2: '',
    })
  }
  return (
    <div className="calculator">
      <div className="inputSection">{currentInput}</div>
      <div className="calcNumbers">
        <OperationsButton sign="AC" onClick={clear} />
        <NumberButton number="1" onClick={agregarNumero} />
        <NumberButton number="2" onClick={agregarNumero} />
        <NumberButton number="3" onClick={agregarNumero} />
        <NumberButton number="4" onClick={agregarNumero} />
        <NumberButton number="5" onClick={agregarNumero} />
        <NumberButton number="6" onClick={agregarNumero} />
        <NumberButton number="7" onClick={agregarNumero} />
        <NumberButton number="8" onClick={agregarNumero} />
        <NumberButton number="9" onClick={agregarNumero} />
        <NumberButton number="0" onClick={agregarNumero} />
        <OperationsButton sign="." onClick={agregarNumero} />
        <OperationsButton sign="+" onClick={makeOperation} />
        <OperationsButton sign="-" onClick={makeOperation} />
        <OperationsButton sign="*" onClick={makeOperation} />
        <OperationsButton sign="=" onClick={() => operar('')} />
        <OperationsButton sign="+/-" onClick={cambiarSigno} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
