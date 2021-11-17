const music = document.getElementById('music');
const volume = document.getElementById('volume');
const play = document.getElementById('play');
const close = document.getElementById('close');
const menuModal = document.querySelector('.menu-modal');
const pve = document.getElementById('option-pve');
const pvp = document.getElementById('option-pvp');


// Sound effects


const soundPlay = document.getElementById('sound-play');
const pveHover = document.getElementById('hover-pve');
const pvpHover = document.getElementById('hover-pvp');

// Content PATH


let volumeOn = "./assets/img/icons8-audio-50.png";
let volumeOff = "./assets/img/icons8-no-audio-50.png";
let gamePageUrl = "game.html"


// Sound controll for the main theme song 


volume.addEventListener('click', () => {

    music.play();
    music.loop = true;

    let icon = volume.getAttribute('src').toString();

    icon === volumeOn ? volume.setAttribute('src', volumeOff) : volume.setAttribute('src', volumeOn);

    !music.muted ? music.muted = true : music.muted = false;

})

// Play a sound effect when hover the play button


play.addEventListener('mouseover', () => {
    soundPlay.play();
})

// Open the selection Modal - Choose PvE or PvP mode


play.addEventListener('click', () => {
    menuModal.classList.add('active');
})

close.addEventListener('click', () => {
    menuModal.classList.remove('active');
})

// Play a sound effect when hover the mode options


pve.addEventListener('mouseover', () => {
    pveHover.play();
})

pvp.addEventListener('mouseover', () => {
    pvpHover.play();
})

pve.addEventListener('click', () => {
    loadGamePageInMode("pve");
})

pvp.addEventListener('click', () => {
    loadGamePageInMode("pvp");
})

function loadGamePageInMode(mode) {

    localStorage.setItem('@tictactoe:gamemode', JSON.stringify(mode));

    setTimeout(() => {
        window.open(gamePageUrl, '_self');
    }, 10)
}