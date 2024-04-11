

function sprite () {
    this.width = 5500; // ****el ancho todal de mi spritesheet***
    this.height = 381; // ***el alto de mi spritesheet ***
    this.x = 0;
    this.y = 0;
    this.radius = 500; //***esta medida es lo que mide el ancho de un sprite (un frame del spritesheet)***
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    //this.totalSpriteFrames = 7; //***este es el numero total de frames en mi spritesheet***
  }
    var frameIndex = 0;
    var tickCount = 0;
    var ticksPerFrame = 2; //funciona para controlar los fps, si es 4 son 15fps
    var numberOfFrames = 11; //*** El numero de frames que tiene mi spritesheet***

  update = function () {

    tickCount += 1;
  
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      // Go to the next frame
      frameIndex += 1; 
    } if (frameIndex >= numberOfFrames){
      frameIndex = 0; //cuando llega al frame final de mi spritesheet se regresa al primero
    }
}; 


  sprite.prototype.draw = function (context) {
    var marioImage = new Image(); //***puedes cambiar el nombre de la variable ***
    marioImage.src = "Homerop.png"; // ***el nombre de tu imagen***
    update();
    context.save();
    context.translate(this.x, this.y);
    
    context.drawImage(marioImage, 
        frameIndex * this.width / numberOfFrames,
        0,
        this.width / numberOfFrames,
        this.height,
        0,
        0,
        this.width / numberOfFrames,
        this.height);
     
    context.restore();
    
  };

  sprite.prototype.getBounds = function () {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  };

