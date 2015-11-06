var myPush = module.exports = exports = function(array, item) {
  array[array.length] = item;
  return item;
}
