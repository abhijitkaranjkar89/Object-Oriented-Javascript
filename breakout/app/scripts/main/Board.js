/**
 * Created by abhij on 3/12/2017.
 */

function Board() {

  var canvas = document.getElementById("game-canvas");
  var context = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height - 150;

  var ball = new Ball(x, y, 10, 'red');
  var paddle = new Paddle((canvas.width - 180) / 2, canvas.height - 45, 180, 15, 'blue');


  var bricksGrid = new BricksGrid();
  bricksGrid.configureGrid();

  var collisionDetectionService = new CollisionDetectionService();
  var playerPerformanceCheckerService = new PlayerPerformanceCheckerService();


  setInterval(run, 10, canvas, context, ball, paddle, bricksGrid, collisionDetectionService, playerPerformanceCheckerService);
}

function run(canvas, context, ball, paddle, bricksGrid, collisionDetectionService, playerPerformanceCheckerService) {

  context.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(context);
  paddle.draw(context);
  bricksGrid.draw(context);


  if (playerPerformanceCheckerService.checkIfGameOver(ball, paddle)) {

    console.log('Game over!');
  }


  if (playerPerformanceCheckerService.checkIfWon(bricksGrid)) {

    console.log('Player won');
  }


  //Detect Collision with bricks
  var count = 0;

  bricksGrid.bricks.forEach(function (brick) {

    count++;
    if (!brick.status) {

      return;
    }


      if (collisionDetectionService.ballVsBrickCollisionEvent(brick, ball)) {

        //Action on Collision
        brick.disappear();
        ball.yBounce();
      }



  });


  //Detect Ball with paddle
  if (collisionDetectionService.ballVsPaddleCollisionEvent(paddle, ball)) {

    //Action
    ball.yBounce();
  }

  //Detect Ball with walls collision
  //1. Side wall

  if (collisionDetectionService.ballVsSideWallCollisionEvent(ball, canvas.width)) {
    //Action
    ball.xBounce();
  }

  //2. Top Wall

  if (collisionDetectionService.ballVsTopWallCollisionevent(ball)) {
    //Action
    ball.yBounce();
  }


  // Add an event listener to the keypress event.
  document.addEventListener("keydown", keyDown, false);
  document.addEventListener("keyup", keyUp, false);


  if (rightKey) {
    paddle.moveRight(canvas.width - paddle.width);
  }


  if (leftKey) {
    paddle.moveLeft();
  }

  ball.move();

}
