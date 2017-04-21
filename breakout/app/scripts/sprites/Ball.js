/**
 * Created by abhij on 3/11/2017.
 */
function Ball(x, y, radius, color) {

  dx = 3;
  dy = -3;
  Sprite.call(this, x, y);
  this.radius = radius;
  this.color = color;




  return {

    x : x,
    y : y,
    dx : dx,
    dy : dy,
    getX : function () {
      return x;
    },
    getY : function () {
      return y;
    },

    getDy : function () {
      return dx;
    },

    getDx : function () {
      return dy;
    },

    radius : this.radius,
    draw: function (context) {


      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = color;
      context.fill();
      context.closePath();

    },

    xBounce: function () {
      dx = -dx;
    },

    yBounce: function () {

      dy = -dy;
    },

    move: function () {

      x += dx;
      y += dy;
    }
  }
}

