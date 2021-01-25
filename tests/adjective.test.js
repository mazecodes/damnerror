const { adjectives, getRandomAdjective } = require('../src/lib/adjective');

test('Should generate a random adjective', () => {
  const randomAdjectives = [
    getRandomAdjective(),
    getRandomAdjective(),
    getRandomAdjective(),
  ];

  randomAdjectives.forEach(adjective => {
    expect(adjectives).toContain(adjective);
  });
});
