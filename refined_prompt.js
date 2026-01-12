/**
 * Converts a string to camelCase format.
 * 
 * Transforms input strings by removing leading/trailing whitespace, converting to lowercase,
 * splitting on separators (spaces, hyphens, underscores), and capitalizing the first letter
 * of each word except the first one.
 * 
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is not a string (null, undefined, or other types)
 * 
 * @example
 * toCamelCase("first name") // returns "firstName"
 * 
 * @example
 * toCamelCase("user_id") // returns "userId"
 * 
 * @example
 * toCamelCase("SCREEN_NAME") // returns "screenName"
 * 
 * @example
 * toCamelCase(" mobile--number ") // returns "mobileNumber"
 * 
 * @example
 * toCamelCase(123) // throws Error: Input must be a string
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms input strings by removing leading/trailing whitespace, converting to lowercase,
 * splitting on separators (spaces, hyphens, underscores), filtering empty segments, and
 * joining words with dots.
 * 
 * @param {string} str - The string to convert to dot.case
 * @returns {string} The converted dot.case string with words separated by dots
 * @throws {Error} If input is not a string (null, undefined, or other types)
 * 
 * @example
 * toDotCase("first name") // returns "first.name"
 * 
 * @example
 * toDotCase("user_id") // returns "user.id"
 * 
 * @example
 * toDotCase("SCREEN_NAME") // returns "screen.name"
 * 
 * @example
 * toDotCase(" mobile--number ") // returns "mobile.number"
 */
// Write a JavaScript function toCamelCase that converts a string to camelCase.
//
// Requirements:
// - Accept only strings as input
// - Throw a descriptive error if input is null, undefined, or not a string
// - Trim leading and trailing whitespace
// - Handle spaces, hyphens, and underscores
// - Handle uppercase and lowercase inputs consistently
// - Handle multiple adjacent separators
//
// Examples:
// toCamelCase("first name") should return "firstName"
// toCamelCase("user_id") should return "userId"
// toCamelCase("SCREEN_NAME") should return "screenName"
// toCamelCase(" mobile--number ") should return "mobileNumber"
// toCamelCase(123) should throw an error

function toCamelCase(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

// Create a function that converts strings to dot.case format

function toDotCase(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .join(".");
}
