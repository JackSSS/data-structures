var myShift = module.exports = exports = function myShift(array) {
  var first = {ind: array[0]};
  for (var i = 0; array.length > i; i++ ) {
    array[i - 1] = array[i];
  }
  array.length = array.length - 1;
  return first.ind;
};
