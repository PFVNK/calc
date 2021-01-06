import React, { useState, useEffect } from 'react';

import './App.css';

import Keypad from './components/Keypad'

function App() {
  const [currentNumber, setCurrentNumber] = useState([])
  const [equation, setEquation] = useState([])
  const [calcEquation, setCalcEquation] = useState(0)
  const [operatorCount, setOperatorCount] = useState(0)
  const [currentOperator, setCurrentOperator] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState(0)
  const [calculation, setCalculation] = useState(0)
  const [output, setOutput] = useState('0')
  const [allClear, setAllClear] = useState('AC')
  const [sign, setSign] = useState(false)

  // useEffect(() => {
  //   console.log(currentNumber)
  // })

  return (
    <div className="App">
      <Keypad
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
        equation={equation}
        setEquation={setEquation}
        operatorCount={operatorCount}
        setOperatorCount={setOperatorCount}
        currentOperator={currentOperator}
        setCurrentOperator={setCurrentOperator}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        calculation={calculation}
        setCalculation={setCalculation}
        output={output}
        setOutput={setOutput}
        allClear={allClear}
        setAllClear={setAllClear}
        sign={sign}
        setSign={setSign}
      />
    </div>
  );
}

export default App;
