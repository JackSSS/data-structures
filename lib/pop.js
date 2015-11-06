var myPop = module.exports = exports = function(array) {
  var last = {ind: array[array.length -1]};
  array.splice(array.length - 1, 1)
  return last.ind;

}
