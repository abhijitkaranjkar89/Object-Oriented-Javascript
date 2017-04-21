/**
 * Created by abhij on 3/12/2017.
 */

function CollisionDetectionService() {

  return {
    ballVsBrickCollisionEvent: function (brick, ball) {



       var brickXCollisiom = (ball.getX() > brick.x) && (ball.getX() < brick.x + brick.width),
       brickYCollision = (ball.getY() > brick.y) && (ball.getY() < (brick.y + brick.height));



      /*

      var brickXCollisiom = (ball.x + ball.radius) > brick.x && ball.x < (brick.x + brick.width),
        brickYCollision = ((ball.y - ball.radius) < (brick.y + brick.height)) && (ball.y > (brick.y + brick.height));



      if(((ball.y - ball.radius) < (brick.y + brick.height))) {
        console.log('Got it');
      }

      if(brickYCollision && brickXCollisiom)
        return true;

      brickYCollision = (ball.y + ball.radius > brick.y) && (ball.y < brick.y + brick.height);

      */
      if(brickXCollisiom && brickYCollision)
        return true;
      return false;

    },

    ballVsPaddleCollisionEvent: function (paddle, ball) {

      var paddleXCollision = ball.getX() + ball.radius > paddle.getX() && ball.getX() + ball.radius < paddle.getX() + paddle.width,
        paddleYCollision = ball.getY() + ball.getDy() + ball.radius > paddle.getY() && ball.getY() + ball.getDy() + ball.radius < paddle.getY() + paddle.height;

      if (paddleXCollision && paddleYCollision) {
        return true;
      }

      return false;
    },

    ballVsSideWallCollisionEvent: function (ball, canvasWidth) {

      return ball.getX() + ball.getDx() > canvasWidth - ball.radius || ball.getX() + ball.getDx() < ball.radius;

    },


    ballVsTopWallCollisionevent: function (ball) {

      return ball.getY() + ball.getDy() < ball.radius;
    }
  }
}


