let synth;

function setup() {

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas = createCanvas(width, height);
  synth = new Tone.Synth().toMaster();
}

function doIt() {

  if (Tone.context.state != 'running') {
    Tone.start();
  }

  synth.triggerAttackRelease('D4', '8n');
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}

function touchStarted() {
  doIt();
}

function mousePressed() {
  doIt();
}
