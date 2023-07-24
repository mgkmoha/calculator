import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
  const operators = ["÷", "x", "-", "+"]


  const [operations, setOperations] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [results, setResults] = useState(0);

  useEffect(() => {
      console.log(results);
  }, [results]);

  function clickNumbers(val){
    if (operations == ""){
      setFirstNumber(firstNumber + val);
    } else {
      setSecondNumber(secondNumber + val);
    }
  }

  function clickOperations(val){
    setOperations(val);
  }

  function performCalculation(){
    switch(operations){
      case "+":
        setResults(Number(firstNumber) + Number(secondNumber))
        break;
      case "-":
        setResults(Number(firstNumber) - Number(secondNumber))
        break;
      case "x":
        setResults(Number(firstNumber) * Number(secondNumber))
        break;
      case "÷":
        setResults(Number(firstNumber) / Number(secondNumber))
        break;
      default:
        return null
    }
  }

  return (
    <div className="App">
      <div className="calculator-container">

        <div className="display">{results}</div>

        <div className="button">
          <div className="left-side">
            {/* <div id='button-container'>
              <div id="clearResult">AC</div>
              <div id="backSpaceDelete">C</div> */}
              <div id="seeResult" onClick={performCalculation}>=</div>
              <div className='numbers'>
                {numbers.map((val)=>{
                  return <div 
                  id="individualNumber" 
                  onClick={()=> {
                    clickNumbers(val); 
                  }}>{val}</div>
                })}
              </div>
            {/* </div> */}
          </div>

          <div className="right-side">
            {operators.map((val)=>{
              return <div 
              id="individualOperators" 
              onClick={()=> {
                clickOperations(val);
              }}>{val}</div>
            })} 
          </div>
        </div>

      </div>
    </div>
  )}

export default App;
