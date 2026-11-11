let canvas;

let firstLine = [
  "music,",
  "you,",
  "statues,",
  "violins,",
  "cabins,",
  "valleys,",
  "mountains,",
  "dogs,",
  "pine,",
  "cicadas,",
  "magazines,",
  "the woods,",
  "nuns,",
];

let secondLine = [
  "you",
  "poetry",
  "old books",
  "trinkets",
  "instruments",
  "insects",
  "wood ovens",
  "old movies",
  "myself,",
  "monastaries",
];

let thirdLine = [
  "peering through stained glass windows.",
  "swinging over a creek.",
  "collecting evidence of life.",
  "the things I never told you.",
  "unevident grief.",
  "swimming in a reedy pond.",
  "collections of abandoned writing.",
  "being scared of dogs.",
  "learning a new language.",
  "orchestras I'm not in.",
  "the fiddle I left four hours northwest.",
];

function setup() {
  canvas = createCanvas(600, 400);
  canvas.parent("sketch-holder")
  background(0);
  textSize(15);
  text("Click to generate a poem!", 200, 180);
}

function textGenerator() {
  background(0);
  fill(255);
  text("When I think of " + random(firstLine), 100, 150);
  text("I think of " + random(secondLine), 100, 200);
  text("and " + random(thirdLine), 100, 250);
}

function draw() {}

function mousePressed() {
  textGenerator();
}