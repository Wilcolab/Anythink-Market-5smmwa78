// Write a JavaScript function toCamelCase that converts strings to camelCase.
// Here are some examples:
// first name -> firstName
// user_id -> userId
// SCREEN_NAME -> screenName
// mobile-number -> mobileNumber
// Implement the function to handle these cases.
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');