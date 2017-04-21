/**
 * Created by abhij on 3/11/2017.
 */
function Brick(x, y, width, height, color)  {

  Sprite.call(this, x, y);
  this.width = width;
  this.height = height;
  this.color = color;
  this.status = 1;
  var parent = this;
  return {
    width : this.width,
    height : this.height,
    x : x,
    y : y,
    draw : function (context) {
      context.beginPath();
      context.rect(x, y, width, height);
      context.fillStyle = color;
      context.fill();
      context.closePath();
    },

  disappear : function () {
    this.status = 0;
  },
    status : this.status

}
}
