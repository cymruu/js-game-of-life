var gof = require('./gof.js');


// var gof = new gof(10, [[5,4],[4,5],[5,5],[6,5],[5,6]], [0,2,3]);
// gof.simulate(5, function(result){
//   console.log(result);
// });
var res = [[[11,10], [11,11], [11,12]], [[10,11],[11,11],[12,11]]];
var game1 = new gof(20, [[10,11], [11,11], [12,11], [5,6]], [5,6]);
console.log(game1);
console.log(res);
