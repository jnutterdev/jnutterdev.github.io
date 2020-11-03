const player = new Tone.Player("../assets/sounds/8bit2.mp3").toMaster();
// const stopButton = document.getElementById("stop-button");
// const toneMeter = new Tone.Meter({
//     channels: 1,
// });
let start;
const element = document.getElementById("content");


function step(timestamp) {
    if (start === undefined)
        start = timestamp;
    const elapsed = timestamp - start;

    // `Math.min()` is used here to make sure that the element stops at exactly 200px.
    element.style.transform = 'translateX(' + Math.min(0.1 * elapsed, 200) + 'px)';

    if (elapsed < 10000) { // Stop the animation after 2 seconds
        window.requestAnimationFrame(step);
    }

}


Tone.loaded().then(() => {
    player.loop = true;
    // player.connect(toneMeter);
    // player.start(0.1);

    // window.requestAnimationFrame(step);

    // meter({
    //     tone: toneMeter,
    //     parent: document.querySelector("#content")
    // });

});