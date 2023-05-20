// create an AudioContext
const audioContext = Tone.context;

// create a synth
const synth = new Tone.Synth().toDestination();

// create a plucky synth
const pluckSynth = new Tone.PluckSynth().toDestination();

// create a duo synth
const duoSynth = new Tone.DuoSynth().toDestination();

// create a metal synth
const metalSynth = new Tone.MetalSynth().toDestination();

// create a membrane synth
const membraneSynth = new Tone.MembraneSynth().toDestination();

// create a sampler
const sampler = new Tone.Sampler({
  urls: {
    C2: "C2.ogg",
    "D#2": "Ds2.ogg",
    "F#2": "Fs2.ogg",
    A2: "A2.ogg",
  },
  baseUrl: "/samples/",
}).toDestination();

// create a drum kit
const drumKit = new Tone.Sampler({
  urls: {
    kick: "kick.ogg",
    snare: "snare.ogg",
    hihat: "hihat.ogg",
  },
  baseUrl: "/samples/",
}).toDestination();

// define function to play a note with the synth
function playSynthNote(note, duration) {
  synth.triggerAttackRelease(note, duration);
}

// define function to play a plucky synth note
function playPluckSynthNote(note, duration) {
  pluckSynth.triggerAttackRelease(note, duration);
}

// define function to play a duo synth note
function playDuoSynthNote(note, duration) {
  duoSynth.triggerAttackRelease(note, duration);
}

// define function to play a metal synth note
function playMetalSynthNote(note, duration) {
  metalSynth.triggerAttackRelease(note, duration);
}

// define function to play a membrane synth note
function playMembraneSynthNote(note, duration) {
  membraneSynth.triggerAttackRelease(note, duration);
}

// define function to play a sample
function playSample(note) {
  sampler.triggerAttackRelease(note, "8n");
}

// define function to play a drum sound
function playDrum(drum) {
  drumKit.triggerAttackRelease(drum, "8n");
}
