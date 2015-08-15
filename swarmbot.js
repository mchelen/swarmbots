"use strict"

var agent = {

  velocity:  25,
  heading : 90,
  world: null,

  // moves agent a given x,y from current position
	move: function(x, y) {
		this.setX(this.x+x);
		this.setY(this.y+y);
	},
	
  //checks if requested x position is within limits, if not then sets to limit
  setX: function (x) {
    if (x>this.world.xMax){this.x=this.world.xMax;}
    else if (x<this.world.xMin){this.x=this.world.xMin;}
    else {this.x=x;}
  },
  
  //checks if requested y position is within limits, if not then sets to limit
  setY: function (y) {
    if (y>this.world.yMax){this.y=this.world.yMax;}
    else if (y<this.world.yMin){this.y=this.world.yMin;}
    else {this.y=y;}
  },

  travel: function (velocity,heading) {
    //heading of 0,360 is north
    // heading of 90 is east
    var headingRad=heading/360*2*Math.PI;  
    var xCo = velocity*Math.sin(headingRad);
    var yCo = -velocity*Math.cos(headingRad);
    this.move(xCo,yCo); // move agent
  },

  setTravel: function (velocity,heading) {
    this.velocity = velocity;
    this.heading = heading;
  },

  step: function () {
    this.travel(this.velocity,this.heading);
  },

  display: function(){
    console.log('x='+this.x+', y='+this.y);
  },

}




function createAgent(x, y, world) {
	var newAgent = Object.create(agent);
	newAgent.x = x;
	newAgent.y = y;
	newAgent.world = world;
	return newAgent;
}

module.exports = createAgent;


