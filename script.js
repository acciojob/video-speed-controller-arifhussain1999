// Get the required DOM elements
const video = document.querySelector('.viewer'); // Video element
const speed = document.querySelector('.speed'); // Speed control container
const speedBar = document.querySelector('.speed-bar'); // Speed bar element

// Play/Pause toggle using spacebar (optional feature)
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        togglePlay();
    }
};

// Play/Pause functionality
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Update playback speed
function handleSpeedChange(e) {
  const y = e.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.5;
  const max = 2.0;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(1) + '×';
  video.playbackRate = playbackRate;
}

// Event listener for changing playback speed when dragging
speed.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) {
    handleSpeedChange(e);
  }
});

// Update the speed bar when clicking or dragging
speed.addEventListener('click', handleSpeedChange);

// Default controls handle progress bar, volume, and skipping

