const container = document.getElementById('heart-container');

let t = 0;

function createHeart() {
  if (t > Math.PI * 2) return;

  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${x * 14 + 230}px`;
  heart.style.top = `${-y * 14 + 250}px`;

  container.appendChild(heart);

  t += 0.1;
  setTimeout(createHeart, 20);
}

createHeart();
