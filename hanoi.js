

function Stack(n) {
	var _stack = [];

	// constructor
	for(var i=n; i>0; i--) _stack.push(i);

	return {
		count: function(){ 
			return _stack.length;
		},
		pick: function() {
			if(_stack.length>0) return _stack.pop();
			return 0;
		},
		add: function(n) {
			var last = (_stack.length>0) ? _stack[_stack.length-1] : 0;
			if(n>last && last>0) return false;
			_stack.push(n);
			return true;
		},
		show: function() {
			console.log(_stack);
		}
	}
}

function Hanoi(s) { // mediator pattern
	var towers = {};
	var index = 0;
	var counter;
	var size = s ? s : 7;

	var methods = {
		addTower: function(t) {
			towers[index++] = t;
		},
		move: function(ini,end) {
			var i = towers[ini].pick();
			if(i==0) return false;
			var r = towers[end].add(i);
			if(r==false) towers[ini].add(i);
			return r!=false;
		},
		show: function() {
			for(var i=0; i<index; i++) towers[i].show();
			if(counter>0) console.log("Total movements: " + counter);
			console.log("******************************************");
		},
		solve: function() {
			counter = 0;
			var solution = function(disk,source,dest,spare) {
				counter++;
				if(disk==1) {
					methods.move(source,dest);					
				} else {
					solution(disk-1,source,spare,dest);
					methods.move(source,dest);
					solution(disk-1,spare,dest,source);
				}				
			}
			solution(towers[0].count(),0,1,2);
		}
	}

	methods.addTower(new Stack(size));
	methods.addTower(new Stack(0));
	methods.addTower(new Stack(0));
	return methods;
}


var game = new Hanoi(7);
game.show();
game.solve();
game.show();

