// To manipulete DOM in index.html

const music = document.getElementById('music');
const volume = document.getElementById('volume');
const play = document.getElementById('play');
const pve = document.getElementById('option-pve');
const pvp = document.getElementById('option-pvp');

// Sound effects

const soundPlay = document.getElementById('sound-play');

// Content PATH

let volumeOn = "./assets/img/icons8-audio-50.png";
let volumeOff = "./assets/img/icons8-no-audio-50.png";
let gamePage = ""

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

// play.addEventListener('click', () => {
//     console.log("clicado");
// })

// pve.addEventListener('mouseover', () => {
//     console.log('pve clicado')
// })

// pvp.addEventListener('mouseover', () => {
//     console.log('pvp clicado')
// })

// pve.addEventListener('click', () => {
//     console.log('pve clicado')
// })

// pvp.addEventListener('click', () => {
//     console.log('pvp clicado')
// })