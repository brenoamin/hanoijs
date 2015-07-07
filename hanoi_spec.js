// hanoi_test.js

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert,
    cglobal = require('./hanoi.js');

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

describe('ValidStack', function() {
  var game = new cglobal.Hanoi(7);
  var towers = game.getTowers();
  it('3 memory stack', function() {
  		towers.should.be.a('object');
  });  
  it('get 3 towers', function() {   	
   	var n = 0;
   	for(var i in towers) n++;
    expect(n).to.equal(3);	
  });  
  it('first stack must have 7 elements', function() {
  	    expect(towers[0].count()).to.equal(7);
  	    expect(towers[1].count()).to.equal(0);
  	    expect(towers[2].count()).to.equal(0);
  });
  it('Solution is working',function() {
  	   game.solve();
  	   game.show();
  	   expect(towers[0].count()).to.equal(0);
  	   expect(towers[1].count()).to.equal(7);
  	   expect(towers[2].count()).to.equal(0);
  });


});