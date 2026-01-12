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
