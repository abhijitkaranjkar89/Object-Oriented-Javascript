/**
 * Created by abhij on 3/12/2017.
 */
function BricksGrid() {

  brickRows = 3;
  brickCol = 9;
  brickW = 75;
  brickH = 20;
  brickPadding = 10;
  brickOffsetTop = 30;
  brickOffsetLeft = 30;

  this.bricks = [];

  return {
    bricks : this.bricks,
    configureGrid : function () {




      for (c = 0; c < brickCol; c++) {
        for (r = 0; r < brickRows; r++) {
          x = (c * (brickW + brickPadding)) + brickOffsetLeft;
          y = (r * (brickH + brickPadding)) + brickOffsetTop;
          brick = new Brick(x, y, brickW, brickH, 'green');
          this.bricks.push(brick);
        }
      }
    },

  draw : function(context) {

    this.bricks.forEach(function (brick) {


      if (!brick.status) return;
      brick.draw(context);
    });
  }
}
}
