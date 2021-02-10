var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Stop it's too much truth";
    } else {
        video.pause();
        btn.innerHTML = "I haven't quite learnt my lesson";
    }
}

