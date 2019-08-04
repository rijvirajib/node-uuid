// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var randomBytes = require('nativescript-randombytes');


module.exports = function nodeRNG() {
  return randomBytes(16);
};
