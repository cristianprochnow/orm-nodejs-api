/**
 * @param {string} message 
 */
function message(message) {
  return `[app] > ${message}`;
}

/**
 * @param {string} message 
 */
export function log(message) {
  console.log(message(message));
}

/**
 * @param {string} message 
 */
export function error(message) {
  console.error(message(message));
}