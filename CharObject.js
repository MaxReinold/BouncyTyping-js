class CharObject {
  constructor(character) {
    this.char = character;
    this.velocity = createVector(-5, -20);
    this.position = createVector(canvasWidth/2, canvasHeight/2);
  }

  function update(){
    this.position.add(velocity);
  }

  function draw(){
    text(this.char, this.position.x, this.position.y);
  }
}
