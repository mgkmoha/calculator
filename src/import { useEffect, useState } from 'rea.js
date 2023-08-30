import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3"]
  const operators = ["÷", "x", "-", "+"]

  const [display, setDisplay] = useState("");
  const [previousNumber, setPreviousNumber] = useState("")
  const [operator, setOperator] = useState("")
  const [currentNumber, setCurrentNumber] = useState("")
  const [result, setResult] = useState("")

    // useEffect(() => {
    //   function performRealCalculation(){
    //     if (previousNumber !== null  && currentNumber !== null && operator !== null) {
    //       switch(result){
    //         case operator === "+":
    //           setResult(Number(previousNumber) + Number(currentNumber))
    //           console.log(result);
    //           break;
    //         case operator === "-":
    //           setResult(Number(previousNumber) - Number(currentNumber))
    //           console.log(result);
    //           break;
    //         case operator === "x":
    //           setResult(Number(previousNumber) * Number(currentNumber))
    //           console.log(result);
    //           break;
    //         case operator === "/":
    //           setResult(Number(previousNumber) / Number(currentNumber))
    //           console.log(result);
    //           break;
    //         default:
    //           return null
    //       }
    //       console.log(result);
    //     } else 
    //       return null

    //     console.log(result);
    //   }

    //   performRealCalculation();
    //   console.log(previousNumber);
    //   console.log(operator);
    //   console.log(currentNumber);
    //   console.log(result);

    // }, [previousNumber, currentNumber, operator, result]);



    useEffect(()=> {
      if (previousNumber && currentNumber && operator) {
      performRealCalculation();}
    }, [previousNumber, currentNumber, operator]);

    function performRealCalculation(){
        switch(operator){
          case "+":
            setDisplay(Number(previousNumber) + Number(currentNumber))
            // console.log("op5", result);
            break;
          case "-":
            setDisplay(Number(previousNumber) - Number(currentNumber))
            // console.log("op6", result);
            break;
          case "x":
            setDisplay(Number(previousNumber) * Number(currentNumber))
            // console.log("op7", result);
            break;
          case "÷":
            setDisplay(Number(previousNumber) / Number(currentNumber))
            // console.log("op8", result);
            break;
          default:
            return null
        }
          // console.log("op1",previousNumber);
          // console.log("op2",operator);
          // console.log("op3",currentNumber);
          // console.log("op4",result);
          // console.log(localStorage);
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
    // performRealCalculation();
    // console.log(currentNumber);
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