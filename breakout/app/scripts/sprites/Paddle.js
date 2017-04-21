/**
 * Created by abhij on 3/11/2017.
 */
function Paddle(x, y, width, height, color) {

  Sprite.call(this, x, y);
  this.width = width;
  this.height = height;
  this.color = color;

  displacement = 7;

  return {
    x : x,
    y : y,
    getX : function () {
      return x;
    },
    getY : function () {
      return y;
    },
    getWidth : function () {

      return this.width;
    },
    getHeight : function () {

      this.height;
    },
    width : this.width,
    height : this.height,
    draw : function (context) {
      context.beginPath();
      context.rect(x, y, width, height);
      context.fillStyle = color;
      context.fill();
      context.closePath();
    },

  moveRight : function (canvasMax) {

    x = x + displacement;
    x = Math.min(x, canvasMax);
  },

  moveLeft : function () {


    x = x - displacement;
    x = Math.max(x,0);
  }
}
}
