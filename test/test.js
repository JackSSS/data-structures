'use strict';

var mocha = require('mocha');
var chai = require('chai');
var expect = require('chai').expect;
var myPop = require(__dirname + '/../lib/pop');
var myPush = require(__dirname + '/../lib/push');
var myShift = require(__dirname + '/../lib/shift');
var myUnshift = require(__dirname + '/../lib/unshift');


var a = ['a','b','c','d','e'];
var b = ['a','b','c','d','e'];
var c = ['a','b','c','d','e'];
var d = ['a','b','c','d','e'];

myPush(b, 6);
myUnshift(a, 6);

describe('the myPop function', function() {
  it('should return [a,b,c,d]', function() {
    expect(myPop(d)).to.eql('e');
  });
});

describe('the myShift function', function() {
  it('should return [b,c,d,e]', function() {
    expect(myShift(c)).to.eql('a');
  });
});

describe('the myPush function', function() {
  it('should return [a,b,c,d,e,6]', function() {
    expect(b).to.include.keys('5');
  });
});

describe('the myUnshift function', function() {
  it('should return [6,a,b,c,d,e]', function() {
    expect(a).to.include.keys('5');
  });
});
