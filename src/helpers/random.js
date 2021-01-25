/**
 * Get a random number
 *
 * @param {Number} min - Minimum number
 * @param {Number} max - Maximum number
 * @returns {Number} - A random number
 *
 * @example
 *   getRandomNumber(0, 10) // 6
 */
const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
};

/**
 * Get a random item from an array
 *
 * @param {Array} array - An array to get the item from
 * @returns {any} - A random item
 *
 * @example
 *   getRandomItem([1, 2, 3]) // 2
 */
const getRandomItem = array => {
  const { length } = array;
  const randomIndex = getRandomNumber(0, length);
  const randomItem = array[randomIndex];

  return randomItem;
};

module.exports = {
  getRandomNumber,
  getRandomItem,
};
