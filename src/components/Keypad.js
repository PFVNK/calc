import React from 'react'

function Keypad({
  currentNumber,
  setCurrentNumber,
  equation,
  setEquation,
  output,
  setOutput,
}) {

  let getNumber = (e) => {
    let number = [...currentNumber, e.target.value].join('')
    setEquation([...equation, number])
  }

  let getOperator = (e) => {
    if (equation.length > 0) {
      setEquation([...equation, e.target.value])
      setCurrentNumber([])
    }
  }

  let getAnswer = () => {
    if (equation.length >= 3) {
      setOutput(eval(equation.join('')))
    }
  }

  let clearAll = () => {
    setEquation([])
    setOutput('0')
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='equation'>
          <div className='exit-menu'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
          </div>
          {equation}
        </div>
        <div className='output'>{output}</div>
        <div className='keypad'>
          <div className='row-one'>
            <button onClick={clearAll} className='top-dark'>AC</button>
            <button className='top-dark'>+/-</button>
            <button className='top-dark' onClick={getOperator} value='%'>%</button>
            <button className='operator' onClick={getOperator} value='/'>&#247;</button>
          </div>
          <div className='row-two'>
            <button className='number' onClick={getNumber} value='7'>7</button>
            <button className='number' onClick={getNumber} value='8'>8</button>
            <button className='number' onClick={getNumber} value='9'>9</button>
            <button className='operator' onClick={getOperator} value='*'>&times;</button>
          </div>
          <div className='row-three'>
            <button className='number' onClick={getNumber} value='4'>4</button>
            <button className='number' onClick={getNumber} value='5'>5</button>
            <button className='number' onClick={getNumber} value='6'>6</button>
            <button className='operator' onClick={getOperator} value='-'>-</button>
          </div>
          <div className='row-four'>
            <button className='number' onClick={getNumber} value='1'>1</button>
            <button className='number' onClick={getNumber} value='2'>2</button>
            <button className='number' onClick={getNumber} value='3'>3</button>
            <button className='operator' onClick={getOperator} value='+'>+</button>
          </div>
          <div className='row-five'>
            <button className='number zero' onClick={getNumber} value='0'>0</button>
            <button className='number' onClick={getOperator} value='.'>.</button>
            <button className='operator equals' onClick={getAnswer}>=</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Keypad