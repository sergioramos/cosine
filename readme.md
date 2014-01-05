# cosine

[![NPM version](https://badge.fury.io/js/cosine.png)](http://badge.fury.io/js/cosine)
[![Build Status](https://secure.travis-ci.org/ramitos/cosine.png)](http://travis-ci.org/ramitos/cosine)
[![Dependency Status](https://gemnasium.com/ramitos/cosine.png)](https://gemnasium.com/ramitos/cosine)
[![Coverage Status](https://coveralls.io/repos/ramitos/cosine/badge.png?branch=master)](https://coveralls.io/r/ramitos/cosine?branch=master)
[![Code Climate](https://codeclimate.com/github/ramitos/cosine.png)](https://codeclimate.com/github/ramitos/cosine)

## install

```bash
npm install [--save/--save-dev] cosine
```

```bash
component install cosine
```

## api

```js
var cosine = require('cosine')

var s1 = 'Julie loves me more than Linda loves me'.split(/\s/)
var s2 = 'Jane likes me more than Julie loves me or'.split(/\s/)

cosine(s1, s2) // => 0.7833494518006403
```

## license

MIT