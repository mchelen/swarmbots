"use strict"

var agent = {
  x: null,
  y: null,
  velocity:  25,
  heading : 90,
  world: null,
  elementId: null,
  display_callback: null,
  create_agent_callback: null,

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
    this.display_callback(this.elementID);  
  },

}


/*
params = {
  id: "foo",
  x: 200,
  y: 200,
  world: world,
  display_callback: display_callback,
  create_agent_callback: create_agent_callback,
}
*/

function createAgent(params) {
	var newAgent = Object.create(agent);
	
	// set agent world and element id
	newAgent.world = params.world;
	newAgent.elementId = params.id;
	
	// set starting location
	newAgent.setX(params.x);
	newAgent.setY(params.y);
		
	// set display callback
	newAgent.display_callback = params.display_callback;
	
	// one time creation callback
	params.create_agent_callback(newAgent.elementId);
	
	return newAgent;
}

module.exports = createAgent;


