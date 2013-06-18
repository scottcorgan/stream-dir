# stream-dir

Stream directories recursively.

## Install

```
npm install stream-dir --save
```

## Usage

```javascript
var streamDir = require('stream-dir');

streamDir('path/to/directory').pipe(process.stdout);
```

## Todo

* Add options for not recursive stream

## Changelog

* **0.1.0** - Initial release with base stream support.