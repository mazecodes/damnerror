const { emoticons, getRandomEmoticon } = require('../src/lib/emoticon');

describe('Generate a random emoticon', () => {
  it('Should generate a random throw table emoticon', () => {
    const randomEmoticons = [
      getRandomEmoticon(),
      getRandomEmoticon('throw'),
      getRandomEmoticon('throw'),
    ];

    randomEmoticons.forEach(emoticon => {
      expect(emoticons.throw).toContain(emoticon);
    });
  });

  it('Should generate a random angry emoticon', () => {
    const randomEmoticons = [
      getRandomEmoticon('angry'),
      getRandomEmoticon('angry'),
      getRandomEmoticon('angry'),
    ];

    randomEmoticons.forEach(emoticon => {
      expect(emoticons.angry).toContain(emoticon);
    });
  });
});
