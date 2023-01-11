window.addEventListener("load", start);

function start() {
  const video = document.querySelector("#video_file");
  const playBtn = document.querySelector("#play");

  video.addEventListener("click", playVideo);
  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);

  function playVideo() {
    if (video.paused === true) {
      video.play();
      playBtn.style.backgroundImage = "url()";
    } else {
      video.pause();
      playBtn.style.backgroundImage = "url(img/play_black.svg)";
    }
  }
}
