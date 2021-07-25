import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import CalcElement from "./_models/CalcElement";
import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";
import usePrevious from "./hooks/usePrevious";
import Calculator, {calculatorPattern} from "./_services/Calculator";

const calcElementPattern = {number: '0', operator: null};

function App() {
  const [calcElements, setCalcElements] = useState<CalcElement[]>([]);
  const [actualElement, setActualElement] = useState<CalcElement>(calcElementPattern);
  const [result, setResult] = useState<string|null>(null);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const updateCalc = async () => {
      if (actualElement.operator != null) {
        setCalcElements(prevState => {
          let state = prevState.slice();
          let lastElement = state.pop();

          console.log(lastElement);

          if (lastElement && lastElement.operator == null) {
            lastElement.operator = actualElement.operator;
            console.log([...state, lastElement]);
            return [...state, lastElement];
          } else {
            return [...prevState, actualElement];
          }
        });
        setActualElement(calcElementPattern);
      }
    }

    updateCalc();
  }, [actualElement]);

  function addToActualElement(increment : string, operatorChange = null as string|null) {
    if (increment != null)
      setActualElement(prevState => {
        let newState;
        if (prevState.number == '0')
          newState = {number: `${increment}`, operator: operatorChange || null}
        else
          newState = {number: `${prevState.number}${increment}`, operator: operatorChange || null}

        return newState;
      });
  }

  function solveCalc() {
    if (calcElements.length > 0 && actualElement.operator == null) {
      let elements = actualElement.number != '0' ? [...calcElements, actualElement] : calcElements.slice();
      setCalcElements(elements);
      setResult(elements.reduce((previousValue, currentValue, currentIndex, array) => {
        if (previousValue.operator !== null)
          return {number: (Calculator[previousValue.operator](previousValue.number, currentValue.number)).toString(), operator: currentValue.operator};
        return previousValue;
      }).number);
      setActualElement(calcElementPattern);
    }
  }

  function clearCalc() {
    setCalcElements([]);
    setActualElement(calcElementPattern);
    setResult(null);
  }

  return (
    <div className="app-calculator">
      <ThemeContextProvider>
          <div className="grid-calculator">
            <div className="output">
              <div className="elements-prev">
                {calcElements.map((prevCalcElement, index, array) => {
                  return (
                      <p key={index}>{`  ${prevCalcElement.number} ${prevCalcElement.operator != null ? calculatorPattern['plus'] : ' '}  `}</p>
                  );
                })}
              </div>
              <div className="elements-current">
                <p>{(result === null || actualElement.number != '0') ? actualElement.number : ''}</p>
                <p>{actualElement.number == '0' ? result : ''}</p>
              </div>
            </div>
            <button>CT</button>
            <button onClick={clearCalc}>AC</button>
            <button>DEL</button>
            <button onClick={() => {addToActualElement('', 'divided')}}>÷</button>
            <button onClick={() => {addToActualElement('7', null)}}>7</button>
            <button onClick={() => {addToActualElement('8', null)}}>8</button>
            <button onClick={() => {addToActualElement('9', null)}}>9</button>
            <button onClick={() => {addToActualElement('', 'times')}}>X</button>
            <button onClick={() => {addToActualElement('4', null)}}>4</button>
            <button onClick={() => {addToActualElement('5', null)}}>5</button>
            <button onClick={() => {addToActualElement('6', null)}}>6</button>
            <button onClick={() => {addToActualElement('', 'minus')}}>-</button>
            <button onClick={() => {addToActualElement('1', null)}}>1</button>
            <button onClick={() => {addToActualElement('2', null)}}>2</button>
            <button onClick={() => {addToActualElement('3', null)}}>3</button>
            <button onClick={() => {addToActualElement('', 'plus')}}>+</button>
            <button onClick={() => {addToActualElement('.', null)}}>.</button>
            <button onClick={() => {addToActualElement('0', null)}}>0</button>
            <button onClick={solveCalc} className="span-two">=</button>
          </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
