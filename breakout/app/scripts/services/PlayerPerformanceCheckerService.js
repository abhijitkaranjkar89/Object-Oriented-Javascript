/**
 * Created by abhij on 3/12/2017.
 */
function PlayerPerformanceCheckerService() {

  return {
    checkIfGameOver: function (ball, paddle) {

      if ((ball.getY() + ball.getDy() + ball.radius) > (paddle.getY() + paddle.height)) {
        return true;
      }

      return false;
    },

    checkIfWon: function (bricksGrid) {

      var count = 0;


      bricksGrid.bricks.forEach(function (brick) {


        if (brick.status) count++;

      });

      if(count == 0)
        return true;

      return false;
    }
  }

}


