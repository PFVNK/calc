import React, { useEffect } from 'react'

function Keypad({
  currentNumber,
  setCurrentNumber,
  equation,
  setEquation,
  clacEquation,
  setCalcEquation,
  operatorCount,
  setOperatorCount,
  currentOperator,
  setCurrentOperator,
  currentAnswer,
  setCurrentAnswer,
  calculation,
  setCalculation,
  output,
  setOutput,
  allClear,
  setAllClear,
  sign,
  setSign
}) {

  useEffect(() => {
    console.log(operatorCount)
    console.log(currentAnswer)
    setOutput(currentAnswer)
    // if (sign) {
    //   if (!equation.some(isNaN) && equation[0] !== '-') {
    //     setEquation(['-', ...equation])
    //     setSign(false)
    //   }

    //   if (equation.some(isNaN)) {
    //     for (let i = equation.length - 1; i >= 0; i--) {
    //       if (isNaN(equation[i]) && equation[i - 1] !== '-') {
    //         equation.splice(i + 1, 0, '-')
    //         setEquation(equation)
    //         setSign(false)
    //       }
    //     }
    //   }
    // }
  })

  let getNumber = (e) => {
    let number = [...currentNumber, e.target.value].join('')
    setEquation([...equation, number])
    setAllClear('C')
  }

  let getOperator = (e) => {
    setCurrentOperator(e.target.value)
    if (equation.length > 0) {
      setEquation([...equation, e.target.value])
      setCurrentNumber([])
      // getAnswer()
      setOperatorCount(operatorCount + 1)
    }

    if (operatorCount > 3) {
      getAnswer()
    }
  }


  let getAnswer = () => {
    setCurrentAnswer(eval(equation.join('')))
  }


  let clearAll = () => {
    setEquation([])
    setOutput('0')
    setAllClear('AC')
    setSign(false)
    setCurrentAnswer(0)
  }


  let changeSign = () => {
    sign ? setSign(false) : setSign(true)
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <div className='equation'>
          <div className='exit-menu'>
            <div className='dots'>&times;</div>
            <div className='dots'>-</div>
            <div className='dots'>+</div>
          </div>
          <div className='equation-output'>
            {equation}
          </div>
        </div>
        <div className='output'>{output}</div>
        <div className='keypad'>
          <div className='row-one'>
            <button onClick={clearAll} className='top-dark'>{allClear}</button>
            <button onClick={changeSign} className='top-dark'>+/-</button>
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



      // let symbols = equation.filter(item => {
      //   return !(parseInt(item) == item)
      // })

      // let lastSymbolIndex = equation.lastIndexOf(symbols[symbols.length - 1])
      // console.log(lastSymbolIndex)
      // equation.splice(lastSymbolIndex, 0, '-')
      // setEquation(equation)

            // let signIndex = equation.lastIndexOf('-')
      // equation.splice(signIndex, 1)
      // setEquation(equation)



// let getNumber = (e) => {
//   let number = [...currentNumber, e.target.value].join('')
//   setEquation([...equation, number])
//   setAllClear('C')
// }

// let getOperator = (e) => {
//   setCurrentOperator(e.target.value)
//   if (equation.length > 0) {
//     setEquation([...equation, e.target.value])
//     setCurrentNumber([])
//     getAnswer()
//     setOperatorCount(operatorCount + 1)
//   }

//   if (operatorCount > 3) {
//     getAnswer()
//   }
// }

// let changeSign = () => {
//   sign ? setSign(false) : setSign(true)
// }

// let currOutput = () => setOutput(currentNumber)

// let getAnswer = () => {
//   if (currentAnswer === 0) {
//     setCurrentAnswer(eval(equation.splice(0, equation.length - 1).join('')))
//   }

//   currOutput()
// }

// let clearAll = () => {
//   setEquation([])
//   setOutput('0')
//   setAllClear('AC')
//   setSign(false)
// }

//most recent working
// let getNumber = (e) => {
//   let number = [...currentNumber, e.target.value].join('')
//   console.log(`num: ${number}`)
//   setEquation([...equation, number])
//   setAllClear('C')
// }

// let getOperator = (e) => {
//   setCurrentOperator(e.target.value)
//   if (equation.length > 0) {
//     setEquation([...equation, e.target.value])
//     setCurrentNumber([])
//     // getAnswer()
//     setOperatorCount(operatorCount + 1)
//   }

//   if (operatorCount > 3) {
//     getAnswer()
//   }
// }


// let getAnswer = () => {
//   setCurrentAnswer(eval(equation.join('')))
// }


// let clearAll = () => {
//   setEquation([])
//   setOutput('0')
//   setAllClear('AC')
//   setSign(false)
//   setCurrentAnswer(0)
// }


// let changeSign = () => {
//   sign ? setSign(false) : setSign(true)
// }