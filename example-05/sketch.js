let synth;
let notes = ["C","D","E","F","G","A","B"]; 
let colores = [0,20,40,90,130,170,210];
let octaves = ["2","3","4","5","6","7"];
let tonos = [105,135,165,195,225,255];
let divX;
let divY;
let oldIsPressed = false;
let isPressed = false;

function setup() {

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas = createCanvas(width, height);
  divX = width / notes.length;
  divY = height / octaves.length;
  for (i=0; i < 8; i++) {
    line(0, divY*i, width, divY*i);
    line(divX*i, 0, divX*i, height);
  }
  synth = new Tone.Synth().toMaster();
  colorMode(HSB, 255);
}

function draw() {

  if (Tone.context.state != 'running') {
    Tone.start();
  }

  if (isPressed) {

    let note = Math.round((mouseX+(divX/2))/divX)-1;
    let octave = Math.round((mouseY+(divY/2))/divY)-1;
    fill(colores[note], 127, tonos[octave]);
    ellipse(mouseX, mouseY, 50, 50);

    if (!oldIsPressed) {
      synth.triggerAttack(notes[note]+octaves[octave]);
    }

  } else {

    if (oldIsPressed) {
      synth.triggerRelease();
    }
  }

  oldIsPressed = isPressed;
}

function touchStarted()  {
  isPressed = true;
}

function touchEnded() {
  isPressed = false;
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
}