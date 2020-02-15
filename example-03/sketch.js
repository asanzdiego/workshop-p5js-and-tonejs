let synth;
let notes = ["C", "D", "E", "F", "G", "A", "B"];
let octaves = ["2", "3", "4", "5", "6", "7"];
let divX;
let divY;

function setup() {

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas = createCanvas(width, height);
  divX = width / notes.length;
  divY = height / octaves.length;
  for (i = 0; i < 8; i++) {
    line(0, divY * i, width, divY * i);
    line(divX * i, 0, divX * i, height);
  }
  synth = new Tone.Synth().toMaster();
}

function doIt() {

  if (Tone.context.state != 'running') {
    Tone.start();
  }

  let note = Math.round((mouseX + (divX / 2)) / divX) - 1;
  let octave = Math.round((mouseY + (divY / 2)) / divY) - 1;
  synth.triggerAttackRelease(notes[note] + octaves[octave], '8n');
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}

function touchStarted() {
  doIt();
}

function mousePressed() {
  doIt();
}