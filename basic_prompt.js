// Write a function called toCamelCase that converts a string to camelCase.
// For example, toCamelCase("hello world") should return "helloWorld".
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');  