let synth;
let isPressed = false;
let notas = ["C", "D", "E", "F", "G", "A", "B"];
let octavas = ["2", "3", "4", "5", "6", "7"];
let divX;
let divY;

function setup() {

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas = createCanvas(width, height);
  divX = width / notas.length;
  divY = height / octavas.length;
  synth = new Tone.Synth().toMaster();
}

function doIt() {

  if (Tone.context.state != 'running') {
    Tone.start();
  }

  let nota = Math.round((mouseX + (divX / 2)) / divX) - 1;
  let octava = Math.round((mouseY + (divY / 2)) / divY) - 1;
  synth.triggerAttackRelease(notas[nota] + octavas[octava], '8n');
  fill(127);
  ellipse(mouseX, mouseY, 50, 50);
}

function touchStarted() {
  doIt();
}

function mousePressed() {
  doIt();
}