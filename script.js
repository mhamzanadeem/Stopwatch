let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let themeToggle = document.getElementById('themeToggle');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}

// Theme toggle: persists selection in localStorage
function applyTheme(theme){
    if(theme === 'light'){
        document.body.setAttribute('data-theme', 'light');
        if(themeToggle) themeToggle.textContent = 'Light Mode';
    } else {
        document.body.removeAttribute('data-theme');
        if(themeToggle) themeToggle.textContent = 'Dark Mode';
    }
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme === 'light'){
    applyTheme('light');
} else {
    applyTheme('dark');
}

if(themeToggle){
    themeToggle.addEventListener('click', function(){
        const isLight = document.body.getAttribute('data-theme') === 'light';
        const newTheme = isLight ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}