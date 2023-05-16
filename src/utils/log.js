/**
 * @param {string} text 
 */
function message(text) {
  return `[app] > ${text}...`;
}

/**
 * @param {string} text 
 */
export function log(text) {
  console.log(message(text));
}

/**
 * @param {string} text 
 */
export function error(text) {
  console.error(message(text));
}