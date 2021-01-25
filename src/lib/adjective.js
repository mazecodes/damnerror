const { getRandomItem } = require('../helpers/random');

const adjectives = [
  'Damn',
  'F*cking',
  'Freaking',
  'GodDamn',
  'Holy',
  'Crazy',
  'NonLogical',
];

/**
 * Get a random adjective
 *
 * @returns {String} - A random adjective
 *
 * @example
 *   getRandomAdjective() // Damn
 */
const getRandomAdjective = () => {
  const randomAdjective = getRandomItem(adjectives);

  return randomAdjective;
};

module.exports = {
  adjectives,
  getRandomAdjective,
};
