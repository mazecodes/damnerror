const { getRandomItem } = require('../helpers/random');

const emoticons = {
  throw: [
    '(╯°□°）╯︵ ┻━┻',
    '(┛◉Д◉)┛彡┻━┻',
    '(ﾉ≧∇≦)ﾉ ﾐ ┸━┸',
    '(ノಠ益ಠ)ノ彡┻━┻',
    '(╯ರ ~ ರ）╯︵ ┻━┻',
    '(┛ಸ_ಸ)┛彡┻━┻',
    '(ﾉ´･ω･)ﾉ ﾐ ┸━┸',
    '(ノಥ,_｣ಥ)ノ彡┻━┻',
    '(┛✧Д✧))┛彡┻━┻',
  ],
  angry: [
    '( ≧Д≦)',
    '(；￣Д￣）',
    '(;¬_¬)',
    '（；¬＿¬)',
    '(｡+･`ω･´)',
    '｡゜(｀Д´)゜｡',
    '(　ﾟДﾟ)＜!!',
    '(‡▼益▼)',
    '(,,#ﾟДﾟ)',
    '૮( ᵒ̌▱๋ᵒ̌ )ა',
  ],
};

/**
 * Get a random emoticon
 *
 * @param {String} [category] - Emoticon category (optional)
 * @returns {String} - A random emoticon
 *
 * @example
 *   getRandomEmoticon() // (╯°□°）╯︵ ┻━┻
 *   getRandomEmoticon('throw') // (╯°□°）╯︵ ┻━┻
 */
const getRandomEmoticon = (category = 'throw') => {
  if (!emoticons[category]) {
    throw new Error(`Emoticon category ${category} does not exist`);
  }

  const randomEmoticon = getRandomItem(emoticons[category]);

  return randomEmoticon;
};

module.exports = {
  emoticons,
  getRandomEmoticon,
};
