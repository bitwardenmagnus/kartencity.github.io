const map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/019876d4-02b4-79e3-95d5-8dd44ba53034/style.json?key=U8w4eE0WpPoxijPRqwC8',
  center: [0, 0],
  zoom: 1
});

const overlay = document.getElementById('darkOverlay');
const button = document.getElementById('flashlightBtn');
let flashlightOn = false;

setTimeout(() => {
  button.classList.add('show');
}, 3000);

button.addEventListener('click', () => {
  flashlightOn = !flashlightOn;
  overlay.style.opacity = flashlightOn ? 1 : 0;
  button.textContent = flashlightOn ? 'Turn off' : 'Flashlight';
  button.classList.toggle('active', flashlightOn);
});

document.addEventListener('mousemove', (e) => {
  if (flashlightOn) {
    overlay.style.setProperty('--x', `${e.clientX}px`);
    overlay.style.setProperty('--y', `${e.clientY}px`);
  }
});

document.addEventListener('touchmove', (e) => {
  if (flashlightOn && e.touches[0]) {
    overlay.style.setProperty('--x', `${e.touches[0].clientX}px`);
    overlay.style.setProperty('--y', `${e.touches[0].clientY}px`);
  }
});
