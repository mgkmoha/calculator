import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
  const operators = ["÷", "x", "-", "+"]
  const resetCal = "";
  const [display, setDisplay] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(()=> {
    if (previousNumber && currentNumber && operator) {
    performRealCalculation();}
    axios.get('http://localhost:5000/api/hello').then((response) => {
      setMessage(response.data.message);
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [previousNumber, currentNumber, operator]);

  function performRealCalculation(){
      switch(operator){
        case "+":
          setDisplay(Number(previousNumber) + Number(currentNumber))
          break;
        case "-":
          setDisplay(Number(previousNumber) - Number(currentNumber))
          break;
        case "x":
          setDisplay(Number(previousNumber) * Number(currentNumber))
          break;
        case "÷":
          setDisplay(Number(previousNumber) / Number(currentNumber))
          break;
        default:
          return null
      }
      setOperator(resetCal);
      setPreviousNumber(resetCal);
      setCurrentNumber(resetCal);
  }

  function clickOperators(val){
    setPreviousNumber(display);
    setOperator(val);
    setDisplay(display + val);
  }

  function clickNumbers(val){
    setDisplay(display + val);
  }

 function performCalculation(){
    var splitDisplay = display.split(operator);
    setCurrentNumber(splitDisplay[1]);
  }

  function clearInput(){
    setDisplay(resetCal);
    setPreviousNumber(resetCal);
    setCurrentNumber(resetCal);
    setOperator(resetCal);
  }

  function clearPreviousEntry(){
    // console.log(display);
    // const clearPrevious = display.toString();
    // setDisplay(clearPrevious);
    // console.log(clearPrevious);
    // setDisplay(display.slice(0, -1));
    // setCurrentNumber.toString((currentNumber.slice(0, -1)));
    const clearprv = display.toString();
    setDisplay(clearprv.slice(0, -1));
    
    
    // setPreviousNumber(previousNumber.slice(0, -1));
    // setOperator(operator.slice(0 ,-1));
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <div><h1>{message}</h1></div>

        <div className="display">
          <h1>{display}</h1>
        </div>

        <div className="button">
          <div className="left-side">
              <div className='clear-result-container'>
                <div id="seeResult" onClick={performCalculation}>=</div>
                <div id="clearResult" onClick={clearInput}>C</div>
                <div id="backSpaceDelete" onClick={clearPreviousEntry}>CE</div>
              </div>
              <div className='numbers'>
                {numbers.map((val)=>{
                  return <div 
                  className="individualNumber" 
                  onClick={()=> {
                    clickNumbers(val); 
                  }}>{val}</div>
                })}
              </div>
          </div>

          <div className="right-side">
            {operators.map((val)=>{
              return <div 
              className="individualOperators" 
              onClick={()=> {
                clickOperators(val);
              }}>{val}</div>
            })} 
          </div>
        </div>

      </div>
    </div>
  )}

export default App;