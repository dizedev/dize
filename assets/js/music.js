document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullScreenGif = document.querySelector('.fullScreenGif');
  
    function togglePlay() {
      if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<img class="fa fa-pause" src="./_app/assets/pause.png" alt="play"></img>';
        fullScreenGif.style.display = 'block';
      } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<img class="fa fa-play" src="./_app/assets/play.png" alt="pause"></img>';
        fullScreenGif.style.display = 'none'; 
      }
    }
  
    if (audioPlayer && playPauseBtn && volumeSlider) {
      playPauseBtn.addEventListener('click', togglePlay);
      
      volumeSlider.value = 35;
      audioPlayer.volume = volumeSlider.value / 100;
      
      volumeSlider.addEventListener('input', () => {
        audioPlayer.volume = volumeSlider.value / 100;
      });
    }
});
