function agent(id, parent, xPos, yPos, world) {

    this.xMin = world.xMin;
    this.yMin = world.yMin;
    this.xMax = world.xMax;
    this.yMax = world.yMax;    
    this.xPos = xPos;
    this.yPos = yPos;
    this.id = id;
    

    
    // create agent div
    var agentDiv = document.createElement("div");
    //set agent div id & class
    agentDiv.setAttribute("id",id);
    agentDiv.setAttribute("class","agent");
    
    var r = Math.floor(Math.random() * 255) + 1;
    var g = Math.floor(Math.random() * 255) + 1;
    var b = Math.floor(Math.random() * 255) + 1;
    
    agentDiv.setAttribute("style","background: rgb("+r+","+g+","+b+")");
    
    
    //get the parent element
    var parentElement = document.getElementById(parent);
    //append the agent div
    parentElement.appendChild(agentDiv);
    
    
    //checks if requested x position is within limits, if not then sets to limit
    this.setX = function (x) {
      if (x>this.xMax){this.xPos=this.xMax;}
      else if (x<this.xMin){this.xPos=this.xMin;}
      else {this.xPos=x;}
    }
    
    //checks if requested y position is within limits, if not then sets to limit
    this.setY = function (y) {
      if (y>this.yMax){this.yPos=this.yMax;}
      else if (y<this.yMin){this.yPos=this.yMin;}
      else {this.yPos=y;}
    }
    // moves agent a given x,y from current position
    this.dPos = function (dX,dY) {
      this.setX(this.xPos+dX);
      this.setY(this.yPos+dY);
    };
    this.velocity = 25;
    this.heading = 90;
    this.move = function (velocity,heading) {
  //heading of 0,360 is north
  // heading of 90 is east
      headingRad=heading/360*2*Math.PI;  
      xCo = velocity*Math.sin(headingRad);
      yCo = -velocity*Math.cos(headingRad);
      this.dPos(xCo,yCo); // move agent
      this.display(); // update display
    };


    this.update = function () {
    };
    
    this.display = function() {
// moves the html elements to match agent position
      move("#"+this.id)
      .to(this.xPos, this.yPos)
      .end();
    }
}




function step(stepsLeft, timeOut) {

  if (stepsLeft == 0 ){ return; }

  
  for (i=0;i<agents.length;i++) {
    var heading = Math.floor(Math.random() * 360) + 1;
    agents[i].move(50,heading);
    console.log("agent: "+i+" x:"+agents[i].xPos+" y:"+agents[i].yPos+" head: "+heading);
  }
  
  setTimeout(function(){step(stepsLeft-1,timeOut);},timeOut)
}


//create agents

var agents = []; // create empty array

var agentNum = 5; // how many agents to create

var world = {
      xMin : 0,
      yMin : 0,
      xMax : 800,
      yMax : 300,    
    };

for (i=0; i<agentNum; i++) {
  agents[agents.length] = new agent('square'+i,'agentsContainer',200,200,world);
}

step(20,1200);

