// Create a JavaScript function called toKebabCase by following these steps:
//
// 1. First, validate the input and throw a descriptive error if the value is null,
//    undefined, or not a string.
// 2. Next, normalize the input by trimming whitespace and converting all characters
//    to lowercase.
// 3. Then, split the string into words by handling spaces, underscores, and
//    camelCase boundaries.
// 4. Finally, join the words using hyphens to produce kebab-case and return the result.
//
// The function should return a kebab-case string and handle edge cases consistently.
function toKebabCase(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .join("-");     