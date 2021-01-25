const { getErrorName, getErrorMessage } = require('./lib/error');

class DamnError extends Error {
  constructor(message, ...args) {
    super(message, ...args);

    this.name = getErrorName();
    this.message = getErrorMessage();
  }
}

module.exports = DamnError;
