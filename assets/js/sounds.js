const player = new Tone.Player("../assets/sounds/8bit3.wav").toMaster();
const element = document.getElementById("content");



Tone.loaded().then(() => {

    player.loop = true;
    // player.start(0.1);


});