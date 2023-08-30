import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
  const operators = ["÷", "x", "-", "+"]

  const [display, setDisplay] = useState("");
  const [previousNumber, setPreviousNumber] = useState("")
  const [operator, setOperator] = useState("")
  const [currentNumber, setCurrentNumber] = useState("")

    useEffect(()=> {
      if (previousNumber && currentNumber && operator) {
      performRealCalculation();}
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
    console.log(splitDisplay);
    setCurrentNumber(splitDisplay[1]); 
    console.log(currentNumber);
  }

  return (
    <div className="App">
      <div className="calculator-container">

        <div className="display">
          <h1>{display}</h1>
        </div>

        <div className="button">
          <div className="left-side">
              <div id="seeResult" onClick={performCalculation}>=</div>
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