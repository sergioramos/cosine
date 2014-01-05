var cosine = process.env.COSINE_COV ? require('../lib-cov/cosine') : require('../')
var assert = require('assert')

var s1 = 'Julie loves me more than Linda loves me'.split(/\s/)
var s2 = 'Jane likes me more than Julie loves me or'.split(/\s/)

test('cosine', function(){
  assert(cosine(s1, s2) === 0.7833494518006403)
})