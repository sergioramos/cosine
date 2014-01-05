var map = function(array, aMap, bMap, words){
  array.forEach(function(word){
    if(!aMap[word]) aMap[word] = 0
    if(!bMap[word]) bMap[word] = 0
    aMap[word] += 1
    words[word] = true
  })
}

var similarity = function(a, b){
  var aMap = {}
  var bMap = {}
  var words = {}
  var aA = []
  var bA = []

  map(a, aMap, bMap, words)
  map(b, bMap, aMap, words)

  Object.keys(words).forEach(function(word, i){
    aA[i] = aMap[word]
    bA[i] = bMap[word]
  })

  return {
    a: aA,
    b: bA
  }
}

module.exports = function(a, b){
  var sim = similarity(a.map(String), b.map(String))

  a = sim.a
  b = sim.b

  var product = 0
  var aNorm = 0
  var bNorm = 0

  a.forEach(function(v, i){
    product += v * b[i]
    aNorm += v * v
    bNorm += b[i] * b[i]
  })

  return product / (Math.sqrt(aNorm) * Math.sqrt(bNorm))
}