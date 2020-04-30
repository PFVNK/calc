import React, { useState } from 'react';

import './App.css';

import Keypad from './components/Keypad'

function App() {
  const [currentNumber, setCurrentNumber] = useState([])
  const [equation, setEquation] = useState([])
  const [output, setOutput] = useState('0')

  return (
    <div className="App">
      <Keypad
        currentNumber={currentNumber}
        setCurrentNumber={setCurrentNumber}
        equation={equation}
        setEquation={setEquation}
        output={output}
        setOutput={setOutput}
      />
    </div>
  );
}

export default App;
