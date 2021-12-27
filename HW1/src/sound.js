import './howler.core.min.js';

let sound = new Howl({
    src: ['./audio/audio_stopwatch.mp3'],
    sprite: {
        laser: [0, 10000],
    }
});

export function playSound() {
    sound.play('laser');
}