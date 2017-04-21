/**
 * Created by abhij on 3/12/2017.
 */
var RIGHT_ARROW = 39,
  LEFT_ARROW = 37;

rightKey = false;
leftKey = false;


function rightPressed(e) {
  return e.keyCode == RIGHT_ARROW;
}
function leftPressed(e) {
  return e.keyCode == LEFT_ARROW;
}

function keyDown(e) {

  rightKey = rightPressed(e);
  leftKey = leftPressed(e);

}

function keyUp(e) {

  rightKey = rightPressed(e) ? false : rightKey;
  leftKey = leftPressed(e) ? false : leftKey;
}
