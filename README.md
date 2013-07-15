# stream-dir

Stream directories recursively.

## Install

[![NPM](https://nodei.co/npm/stream-dir.png)](https://nodei.co/npm/stream-dir/)

## Usage

```javascript
var streamDir = require('stream-dir');

streamDir('path/to/directory').pipe(process.stdout);
```

## Todo

* Add options for non-recursive stream
* Add option for file reading?

## Changelog

* **0.1.0**
  * Initial release with basic stream support.
