const player = new Tone.Player("../assets/sounds/8bit3.wav").toDestination();
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");


Tone.loaded().then(() => {

    Tone.context.resume().then(() => {

        player.loop = true;
        player.start(0.1);
    })
    stopButton.addEventListener('click', () => {
        player.stop();
    })

    startButton.addEventListener('click', () => {
        player.loop = true;
        player.start(0.1);

    })

});