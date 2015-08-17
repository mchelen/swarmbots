
var swarmbot = require('./swarmbot');

window.jQuery = window.$ = require("jquery");

require("velocity-animate");


// $("body").velocity({ opacity: 0.5 });

var world = {
      xMin : 0,
      yMin : 0,
      xMax : 800,
      yMax : 300,    
    };

var velocity_options = 500;

function display_callback() {
  $("#"+this.elementId).velocity({ 
  top: this.y,
  left: this.x,
  }, velocity_options);
  console.log('agent: '+this.elementId+', x='+this.x+', y='+this.y);
}

function create_agent_callback (elementId,x,y) {
  $("#agentsContainer").append('<div id="'+elementId+'" class="agent" style="top:'+x+'px;left:'+y+'px;"></div>');
}

//create agents


/*
params = {
  id: "foo123",
  x: 200,
  y: 200,
  world: world,
  display_callback: display_callback,
  create_agent_callback: create_agent_callback,
}*/

// var foo = swarmbot(params,create_agent_callback);


var agents = []; // create empty array
var agent_count = 5; // how many agents to create

for (i=0; i<agent_count; i++) {
  agents[i] = swarmbot({
    id: "foo" + i,
    x:200,
    y:200,
    world: world,
    velocity: 50,
    heading: 90,
    display_callback: display_callback,
    create_agent_callback: create_agent_callback,
  });
  agents[i].display();
}


for (j=0;j<3;j++) {
  for (i=0;i<agents.length;i++) {     
      agents[i].heading = Math.floor(Math.random() * 360) + 1;
      agents[i].step();
      agents[i].display();
  }
}




/*


var agents = []; // create empty array

var agentCount = 5; // how many agents to create


for (i=0; i<agentCount; i++) {
  agents[agents.length] = swarmbot(200,200,world);
}

step(20,1200);


function step(stepsLeft, timeOut) {

  if (stepsLeft == 0 ){ return; }

  for (i=0;i<agents.length;i++) {
    var heading = Math.floor(Math.random() * 360) + 1;
    agents[i].move(50,heading);
    console.log("agent: "+i+" x:"+agents[i].xPos+" y:"+agents[i].yPos+" head: "+heading);
  }
  
  setTimeout(function(){step(stepsLeft-1,timeOut);},timeOut)
}

*/
