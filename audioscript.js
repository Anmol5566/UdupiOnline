document.addEventListener("DOMContentLoaded", function() {
    const audioControl = document.getElementById("audio-control");
    const backgroundAudio = document.getElementById("background-audio");

    let isPlaying = false;

    audioControl.addEventListener("click", () => {
        if (isPlaying) {
            backgroundAudio.pause();
            audioControl.textContent = "🔊"; // Icon for sound on
        } else {
            backgroundAudio.play();
            audioControl.textContent = "🔇"; // Icon for sound off
        }
        isPlaying = !isPlaying;
    });
});
