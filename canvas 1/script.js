function draw() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(250,130,100,0,Math.PI*2,true);
    ctx.fill();
    
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(250,130,40,0,Math.PI*2,true);
    ctx.fillRect(150,120,200,20);
    ctx.fill(); 
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(250,130,25,0,Math.PI*2,true);
    ctx.fill();
  }