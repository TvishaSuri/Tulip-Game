class Bubble {
  
  constructor() { 
    var allInstances = [];
    
    var radius = random(10,30);
    this.x = random(0, width);
    this.y = random(0, height);
    this.width = radius;
    this.height = radius;
    this.color = "blue";
    this.velocityX = random(-5, +20);
    this.velocityY= random(-5, +7);
    
    this.display = function() {
      stroke(255);
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
    }
    
    this.move = function() {
      this.x = this.x + this.velocityX;
      this.y = this.y + this.velocityY;
    }
      
  }
}