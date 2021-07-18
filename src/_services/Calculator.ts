export default {
    'plus': function (firstValue, secondValue) {
        return Number.parseFloat(firstValue) + Number.parseFloat(secondValue);
    },
    'minus': function (firstValue : string, secondValue : string) {
        return Number.parseFloat(firstValue) - Number.parseFloat(secondValue);
    },
    'times': function (firstValue, secondValue) {
        return Number.parseFloat(firstValue) * Number.parseFloat(secondValue);
    },
    'divided': function (firstValue, secondValue) {
        return Number.parseFloat(firstValue)/Number.parseFloat(secondValue);
    }
}