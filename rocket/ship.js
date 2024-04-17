function Ship () {
    this.x = 0;
    this.y = 0;
    this.width = 25;
    this.height = 20;
    this.rotation = 0;
    this.showFlame = false;
  }
  
  Ship.prototype.draw = function (context) {
      var sinfuego = new Image();
      sinfuego.src = "sinfuego.png";
      var confuego = new Image();
      confuego.src = "confuego.png";
  
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    
    context.drawImage(sinfuego, -sinfuego.width/2, - sinfuego.height/2);
  
  
    if (this.showFlame) {
      context.drawImage(confuego, -confuego.width/2,-confuego.height/2);
    }
    context.restore();
  };