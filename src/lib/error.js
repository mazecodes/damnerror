const { getRandomAdjective } = require('./adjective');
const { getRandomEmoticon } = require('./emoticon');

/**
 * Get a random error name
 *
 * @returns {String} - A random error name
 *
 * @example
 *   getErrorName() // DamnError
 */
const getErrorName = () => {
  const randomAdjective = getRandomAdjective();
  const errorName = `${randomAdjective}Error`;

  return errorName;
};

/**
 * Get a random error message
 *
 * @param {String} [message] - Error initial massage (optional)
 * @returns {String} - A random error message
 *
 * @example
 *   getErrorMessage() // (╯°□°）╯︵ ┻━┻
 *   getErrorMessage('Error') // ૮( ᵒ̌▱๋ᵒ̌ )ა ERROR!!!
 */
const getErrorMessage = message => {
  const randomEmoticon = getRandomEmoticon(message ? 'angry' : 'throw');
  const errorMessage = message
    ? `${randomEmoticon} ${message.toUpperCase()}!!!`
    : randomEmoticon;

  return errorMessage;
};

module.exports = {
  getErrorName,
  getErrorMessage,
};
