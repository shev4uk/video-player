let video = document.querySelector('#video');
let btnPlay = document.querySelector('.btn-play');
let btnMuted = document.querySelector('.btn-muted');
let status = document.querySelector('#status');
btnPlay.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    btnPlay.classList.remove('playing');
  } else {
    video.pause();
    btnPlay.classList.add('playing');
  }
});
btnMuted.addEventListener('click', function() {
  if(video.muted) {
    this.innerHTML = 'Muted';
  } else {
    this.innerHTML = 'Unmute';
  }
  video.muted = !video.muted;
});
video.addEventListener('timeupdate', function() {
  status.value = video.currentTime / video.duration * 10;
});
status.addEventListener('input', function() {
  video.currentTime = this.value;
});
