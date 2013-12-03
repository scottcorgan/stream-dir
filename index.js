var path = require('path');
var fs = require('fs');
var assert = require('assert');
var through = require('through');
var walk = require('walk');

//
module.exports = function (dir) {
  assert.notEqual(dir, undefined, 'stream-dir requires a directory');
  
  var stream = through();
  var walker = walk.walk(dir, {followLinks: false});
  
  walker.on('file', function (root, fileStats, next) {
    filePath = path.join(root, fileStats.name);
    stream.write(filePath);
    next()
  });
  
  walker.on('end', function () {
    stream.end();
  });
  
  return stream;
};