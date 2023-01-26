const dateOptions = require('./dateOptions');

// Default messages shown in index
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date().toLocaleTimeString('en-us', dateOptions),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date().toLocaleTimeString('en-us', dateOptions),
  },
];

module.exports = messages;