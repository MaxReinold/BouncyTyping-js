let chars = [];
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  fill(255);
  textSize(32)
}
function draw(){
  background(0);
  for(let i = 0; i < chars.length; i++){
    chars[i].draw();
    chars[i].update();
    if(!chars[i].onScreen()){
      chars.splice(i, 1);
    }
  }
}

function keyPressed(){
  if(key.length == 1){
    chars.push(new CharObject(key))
  }
}

class CharObject {
  constructor(character) {
    this.char = character;
    this.velocity = createVector(random(-4, 4), random(-12, -7));
    this.position = createVector(random((windowWidth/2)-100, (windowWidth/2)+100), windowHeight);
  }

  update(){
    this.position.add(this.velocity);
    this.velocity.add(0, .25);
  }

  draw(){
    text(this.char, this.position.x, this.position.y);
  }

  onScreen(){
    if(this.position.y > windowHeight) return false;
    else return true;
  }
}
