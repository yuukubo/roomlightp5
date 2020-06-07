// roomlightp5

let game_title = "* roomlightp5 * c1.0"
let [canvas_W, canvas_H] = [400, 400];
let switch_X = canvas_W / 2;
let switch_Y = canvas_H / 2;
let switch_W = 80;
let switch_H = 80;
let is_switch_on = 0;
let on_RGB = [10, 200, 100];
let off_RGB = [250, 90, 90];
let is_touch = 0;

function setup() {
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove",  function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(canvas_W, canvas_H);
  rectMode(CENTER);
}
 
function draw() {
  background(200, 200 ,200);
  set_game_title();
  if (is_switch_on) {
    set_switch(on_RGB[0], on_RGB[1], on_RGB[2], switch_X, switch_Y, switch_W, switch_H);
  } else {
    set_switch(off_RGB[0], off_RGB[1], off_RGB[2], switch_X, switch_Y, switch_W, switch_H);
  }
  
  if (1 == is_touch) {
    touched();
    is_touch = 0;
  }
  set_pointer();
}

function set_pointer() {
  push();
  noStroke();
  fill(255, 255, 0)
  circle(mouseX, mouseY, 4);
  pop();
}

function touchStarted() {
  is_touch = 1;
}
function touched() {
  mousePressed();
  is_touch = 0;
}
function touchEnded() {
  is_touch = 0;
}
function mousePressed() {
  if ((switch_X - switch_W / 2 < mouseX && mouseX < switch_X + switch_W / 2) && (switch_Y - switch_H / 2 < mouseY && mouseY < switch_Y + switch_H / 2)) {
    if (is_switch_on) {
      is_switch_on = 0;
    } else {
      is_switch_on = 1;
    }
  }
}
function set_switch(switch_R, switch_G, switch_B, switch_X, switch_Y, switch_W, switch_H) {
  push();
  noStroke();
  rectMode(CENTER);
  fill(switch_R, switch_G, switch_B);
  rect(switch_X, switch_Y, switch_W, switch_H, 10);
  pop();
}

function set_game_title() {
  push();
  textSize(10);
  textFont("Comic Sans MS");
  textAlign(CENTER, CENTER);
  noStroke();
  fill(10);
  text(game_title, canvas_W * 8 / 10, canvas_H -20);
  pop();
}
