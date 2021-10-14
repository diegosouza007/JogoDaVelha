// To manipulete DOM in index.html


const music = document.getElementById('music');
const volume = document.getElementById('volume');
const play = document.getElementById('play');
const close = document.getElementById('close');
const menuModal = document.querySelector('.menu-modal');
const pve = document.getElementById('option-pve');
const pvp = document.getElementById('option-pvp');


// Sound effects


const soundPlay = document.getElementById('sound-play');
const pveHover = document.getElementById('select-pve');
const pvpHover = document.getElementById('select-pvp');

// Content PATH


let volumeOn = "./assets/img/icons8-audio-50.png";
let volumeOff = "./assets/img/icons8-no-audio-50.png";
let gamePage = "game.html"

document.addEventListener('DOMContentLoaded', () => {
    music.play();
    music.loop = true;
})

volume.addEventListener('click', () => {

    let icon = volume.getAttribute('src').toString();

    icon === volumeOn ? volume.setAttribute('src', volumeOff) : volume.setAttribute('src', volumeOn);

    !music.muted ? music.muted = true : music.muted = false;

})

play.addEventListener('mouseover', () => {
    soundPlay.play();
})

// Open the selection Modal - BOT or PvP


play.addEventListener('click', () => {
    menuModal.classList.add('active');
})

close.addEventListener('click', () => {
    menuModal.classList.remove('active');
})

pve.addEventListener('mouseover', () => {
    pveHover.play();
})

pvp.addEventListener('mouseover', () => {
    pvpHover.play();
})

// Open tic tac toe game in the selected mode


pve.addEventListener('click', () => {

    let type = 'pve';
    let storage = localStorage.setItem('GameType', JSON.stringify(type));

    setTimeout(() => {
        window.open(gamePage, '_self')
    }, 10)

})

pvp.addEventListener('click', () => {

    let type = 'pvp';
    let storage = localStorage.setItem('GameType', JSON.stringify(type));

    setTimeout(() => {
        window.open(gamePage, '_self')
    }, 10)
})