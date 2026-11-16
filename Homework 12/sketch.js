
let canvas;
let soundfile, fft; 

async function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch-holder");
  soundfile = await 
  loadSound('./assets/MiiChannel.mp3');
  noStroke();


  fft = new p5.FFT();
 soundfile.connect(fft);
 soundfile.loop();
}

function mousePressed() {
 if(!soundfile.isPlaying()) {
   soundfile.play();
 }
 else {
   soundfile.stop();
 }
}

function draw() {
 background(220);
 
  let spectrum = fft.analyze();
 
 noStroke();
 fill(0);

 for (let i = 0; i < spectrum.length; i++) {
   let x = map(i, 0, spectrum.length, 0, width);     
   let h = -height + map(spectrum[i], 0, 0.1, height, 0);
   rect(x, height, width / spectrum.length, h * 4)
 }
}

