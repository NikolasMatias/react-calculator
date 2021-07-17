import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CalcElement from "./_models/CalcElement";
import ThemeContextProvider, {useTheme} from "./contexts/ThemeContext";

function App() {
  const [actualElement, setActualElement] = useState<CalcElement>({number: 0, operator: null});
  const [calcElements, setCalcElements] = useState<CalcElement[]>([]);
  const [theme, setTheme] = useTheme();

  function addToCalcElements(newValue) {
    if (newValue !== null) {
      setCalcElements(prevState => [...prevState, newValue])
    }
  }

  function clearCalc() {
    setCalcElements([]);
  }

  return (
    <div className="app-calculator">
      <ThemeContextProvider>
          <div className="grid-calculator">
            <div className="output">
              <div className="output-prev">

              </div>
              <div className="output-current">

              </div>
            </div>
          </div>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
