import { Howl } from 'howler';

let sound = new Howl({
    src: ['./audio/stopwatch.mp3'],
    sprite: {
        laser: [0, 10000],
    }
});

export function playSound() {
    sound.play('laser');
}
