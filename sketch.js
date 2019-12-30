let bouncers = []

let compressor = new Tone.Compressor().toMaster()
let reverb = new Tone.Reverb(1).connect(compressor)
reverb.generate()

let pan1 = new Tone.Panner().connect(reverb)
let pan2 = new Tone.Panner().connect(reverb)
let pan3 = new Tone.Panner().connect(reverb)
let pan4 = new Tone.Panner().connect(reverb)

let synth1 = new Tone.PolySynth(6, Tone.FMSynth, {
  harmonicity: 3,
  modulationIndex: 10,
  detune: 0,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.01,
    decay: 0.01,
    sustain: 1,
    release: 0.5
  },
  modulation: {
    type: "square"
  },
  modulationEnvelope: {
    attack: 0.5,
    decay: 0,
    sustain: 1,
    release: 0.5
  }
}).connect(pan1)

let synth2 = new Tone.PolySynth(6, Tone.FMSynth, {
  harmonicity: 4.02,
  modulationIndex: 2,
  detune: 5,
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.01,
    decay: 0.01,
    sustain: 0.8,
    release: 0.5
  },
  modulation: {
    type: "sine"
  },
  modulationEnvelope: {
    attack: 0.1,
    decay: 0.01,
    sustain: 1,
    release: 0.2
  }
}).connect(pan2)

let synth3 = new Tone.PolySynth(6, Tone.FMSynth, {
  harmonicity: 3,
  modulationIndex: 10,
  detune: 0,
  oscillator: {
    type: "triangle"
  },
  envelope: {
    attack: 0.001,
    decay: 0.1,
    sustain: 0.2,
    release: 0.5
  },
  modulation: {
    type: "square"
  },
  modulationEnvelope: {
    attack: 0.001,
    decay: 0,
    sustain: 1,
    release: 0.5
  }
}).connect(pan3)

let synth4 = new Tone.PolySynth(6, Tone.FMSynth, {
  harmonicity: 2,
  modulationIndex: 1,
  detune: 0,
  oscillator: {
    type: "triangle"
  },
  envelope: {
    attack: 0.01,
    decay: 0.01,
    sustain: 1,
    release: 0.5
  },
  modulation: {
    type: "sine"
  },
  modulationEnvelope: {
    attack: 0.01,
    decay: 0,
    sustain: 0.5,
    release: 0.5
  }
}).connect(pan4)

let backgroundColor = document.body.style.backgroundColor
console.log(backgroundColor)

let c
let isPressed = false

let xSpeed
let ySpeed 

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  c.parent("myCanvas")
  c.position(0, 0)
  c.style("z-index", "-1")

  c.mouseMoved(canvasMoved)
  c.touchMoved(canvasMoved)
  
}

function draw() {
  background("tomato");
  xSpeed = (mouseX - pmouseX) / 2
    ySpeed = (mouseY - pmouseY) / 2

  bouncers.forEach((bouncer, index) => {
    bouncer.show()
    bouncer.move()

    let bounceNote = whichNote(bouncer.r) + whichOctave(bouncer.b)
    let rel = map(bouncer.s, 0, 100, 0.01, 2)
    let xPanning = map(bouncer.x, 0, width, -1, 1, true)
    let yPanning = map(bouncer.y, 0, width, -1, 1, true)

    if (bouncer.x < 0 + bouncer.s / 2) {
      bouncer.x = 0 + bouncer.s / 2
      bouncer.xMov *= -1
      
      pan1.pan=xPanning
      synth1.triggerAttackRelease(bounceNote, rel)
    }

    if (bouncer.x > width - bouncer.s / 2) {
      bouncer.x = width - bouncer.s / 2
      bouncer.xMov *= -1
      
      pan2.pan=xPanning
      synth2.triggerAttackRelease(bounceNote, rel)
    }

    if (bouncer.y < 0 + bouncer.s / 2) {
      bouncer.y = 0 + bouncer.s / 2
      bouncer.yMov *= -1
      
      pan3.pan=yPanning
      synth3.triggerAttackRelease(bounceNote, 0.1)
    }

    if (bouncer.y > height - bouncer.s / 2) {
      bouncer.y = height - bouncer.s / 2
      bouncer.yMov *= -1
      
      pan4.pan=yPanning
      synth4.triggerAttackRelease(bounceNote, rel)
    }

    if (bouncer.s < 0) {
      bouncers.splice(index, 1)
    }

  
  })
}

function whichNote(r) {
  let newR = round(map(r, 0, 255, 0, 6))

  switch (newR) {
    case 0:
      return "A"
      break;
    case 1:
      return "B"
      break;
    case 2:
      return "C"
      break;
    case 3:
      return "D"
      break;
    case 4:
      return "E"
      break;
    case 5:
      return "F"
      break;
    case 6:
      return "G"
      break;
  }
}

function whichOctave(g) {
  let newG = round(map(g, 0, 255, 0, 8))
  return newG.toString()
}



function canvasMoved(){
  if (mouseIsPressed) {
    bouncers.push(new Bouncer(mouseX, mouseY, random(10, 100), xSpeed, ySpeed))
  }
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}