'use strict'
var assert = require('assert');
var gof = require('../gof.js');
describe("Game Of Life tests", function(){
  it('Blinker', function(){
    let game1 = new gof(20, [[10,11], [11,11], [12,11], [5,6]], [5,6]);
    assert.deepEqual(game1, [[[11,10], [11,11], [11,12]], [[10,11],[11,11],[12,11]]]);
  });
});
