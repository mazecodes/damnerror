const { getErrorName, getErrorMessage } = require('../src/lib/error');
const { emoticons } = require('../src/lib/emoticon');

test('Error name should contain Error', () => {
  const errorName = getErrorName();

  expect(errorName).toMatch(/Error/);
});

describe('Error message', () => {
  it('Should be a throwing table emoticon', () => {
    const errorMessage = getErrorMessage();

    expect(emoticons.throw).toContain(errorMessage);
  });

  it('Should be like MESSAGE!!!', () => {
    const errorMessage = getErrorMessage('Message');

    expect(errorMessage).toMatch(/MESSAGE!!!$/);
  });
});
