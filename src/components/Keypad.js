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
    setEquation([...equation, e.target.value])
    setCurrentNumber([])
  }

  let getAnswer = () => {
    setOutput(eval(equation.join('')))
  }

  let clearAll = () => {
    setEquation([])
    setOutput('0')
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='equation'>{equation}</div>
        <div className='output'>{output}</div>
        <div className='keypad'>
          <div className='row-one'>
            <button onClick={clearAll} className='top-dark'>AC</button>
            <button className='top-dark'>+/-</button>
            <button className='top-dark'>%</button>
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
            <button className='number'>.</button>
            <button className='operator equals' onClick={getAnswer}>=</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Keypad




// let getNumber = (e) => {
//   setOutput([...output, e.target.value])
// }

// let submitNumber = () => {
//   setNumber([...number, output.join('')])
//   setOutput([])
// }

// let getOperator = (e) => {
//   submitNumber()
//   setOperator(e.target.value)
//   if (number.length >= 2) { evaluate() }
// }

// let evaluate = () => {
//   console.log(`${+number[0]} ${operator} ${+number[1]}`)
//   setOutput(eval(`${+number[0]} ${operator} ${+number[1]}`))
// }



// let submitNumber = () => {
//   setNumber([...number, +output.join('')])
//   setOutput([])
// }

// let getOperator = (e) => {
//   submitNumber()
//   setOperator(e.target.value)
// }

// let evaluate = () => {
//   let outcome = eval(`${+number[0]} ${operator} ${+number[1]}`)
//   setOutput(outcome.toString())
//   setNumber(outcome)
// }

  // useEffect(() => {
  //   if (number.length >= 2) { evaluate() }
  // })




  //works

// useEffect(() => {
//   if (currentNumber.length && previousNumber.length) {
//     setOutput(eval(`${previousNumber}${operator}${currentNumber}`))
//     setEquation(`${previousNumber}${operator}${currentNumber}`)
//     setPreviousNumber([])
//   }
// })

// useEffect(() => {
//   if (output && !previousNumber) {
//     setCurrentNumber(output)
//   }
// })

// let getNumber = (e) => {
//   setCurrentNumber([...currentNumber, e.target.value].join(''))
// }

// let getOperator = (e) => {
//   setOperator(e.target.value)
//   setPreviousNumber(currentNumber)
//   setCurrentNumber([])
// }


// const [currentNumber, setCurrentNumber] = useState([])
// const [previousNumber, setPreviousNumber] = useState([])