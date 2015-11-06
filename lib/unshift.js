var myUnshift = module.exports = exports = function(array, item) {
  for(var i = array.length - 1; i > -1; i--) {
    array[i + 1] = array[i];
  }
  array[0] = item;
}
