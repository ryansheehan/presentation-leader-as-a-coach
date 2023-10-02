const twemoji = require('twemoji');

module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      twemoji.parse(markdown, {
        folder: 'svg',
        ext: '.svg'
      })
    );
  });
};
