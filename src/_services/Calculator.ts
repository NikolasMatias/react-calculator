import CalculatorPattern from "../_models/CalculatorPattern";

const Calculator: any = {
    'plus': function (firstValue : string, secondValue: string): number {
        return Number.parseFloat(firstValue) + Number.parseFloat(secondValue);
    },
    'minus': function (firstValue : string, secondValue : string): number {
        return Number.parseFloat(firstValue) - Number.parseFloat(secondValue);
    },
    'times': function (firstValue: string, secondValue: string): number {
        return Number.parseFloat(firstValue) * Number.parseFloat(secondValue);
    },
    'divided': function (firstValue: string, secondValue: string): number {
        return Number.parseFloat(firstValue)/Number.parseFloat(secondValue);
    }
}

export const calculatorPattern: CalculatorPattern = {
    plus: '+' as string,
    minus: '-' as string,
    times: 'X' as string,
    divided: '÷' as string
};


export default Calculator;