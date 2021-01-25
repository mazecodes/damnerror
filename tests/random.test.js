const { getRandomNumber, getRandomItem } = require('../src/helpers/random');

describe('Generate a random number', () => {
  it('Should be between 0 and 10', () => {
    const randomNumber = getRandomNumber(0, 10);

    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThan(10);
  });

  it('Should be between 5 and 10', () => {
    const randomNumber = getRandomNumber(5, 10);

    expect(randomNumber).toBeGreaterThanOrEqual(5);
    expect(randomNumber).toBeLessThan(10);
  });
});

test('Should pick a random item', () => {
  const array = [0, 1, 2, 3];
  const randomItems = [
    getRandomItem(array),
    getRandomItem(array),
    getRandomItem(array),
  ];

  randomItems.forEach(item => {
    expect(array).toContain(item);
  });
});
