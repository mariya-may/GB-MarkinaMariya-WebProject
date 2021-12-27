import { playSound } from './sound.js';


let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let timerShow = document.getElementById("timer");
let timer = '';

buttonRun.addEventListener('click', function() {
    clearInterval(timer);
    let timeMinut = parseInt(timerInput.value) * 60

    timer = setInterval(function () {
        let seconds = timeMinut%60
        let minutes = timeMinut/60%60
        let hour = timeMinut/60/60%60
    
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Время закончилось");
        } else {
            if(timeMinut === 10) {
                playSound();
            }
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
})

buttonStop.addEventListener('click', function() {
    clearInterval(timer);
})
