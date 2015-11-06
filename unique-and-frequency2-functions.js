'use strict'

function unique(array) {

  var newArray = [];

  for (var i in array) {
    newArray = newArray.concat([""]);
  }

  return newArray;
};

function frequency2(array) {

  var word = array.join('');

  var counter = {'':''};
  for (var i = 0; i < word.length; i++) {
    if (counter.hasOwnProperty([word[i]])) {
      counter[word[i]]++;
    } else {
      counter[word[i]] = 1;
    };
  };

  var theWinnerIs = '';
  for (var item in counter) {
    if (counter[item] >= counter[theWinnerIs]) {
      theWinnerIs = item;
    }
  };
  return theWinnerIs;
 }


var e = ['a','b','c','d','e'];

console.log("The original array is: ['a','b','c','d','e']")

console.log("unique returns: " + unique(e));


var testArray = ['saaaaaaaaaaaaaasssssssssy', 'loooooooooooooooooooves', 'sssssssssuggggaaaaar'];

console.log("frequency2 returns the winning letter: " + frequency2(testArray));
