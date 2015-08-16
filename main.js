
var swarmbot = require('./swarmbot');

window.jQuery = window.$ = require("jquery");

require("velocity-animate");

/* Your app code here. */
$("body").velocity({ opacity: 0.5 });



//create agents

var agents = []; // create empty array

var agentCount = 5; // how many agents to create

var world = {
      xMin : 0,
      yMin : 0,
      xMax : 800,
      yMax : 300,    
    };


var foo = swarmbot(200,200,world);


foo.display();

foo.step();

foo.display();

foo.setTravel(25, 105);

foo.step();

foo.display();


/*
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
