const container = document.querySelector('.container');
for (let i = 0; i < 256; i++) {
  const grid = document.createElement('div');
  container.appendChild(grid);
  grid.addEventListener('mouseover', () => grid.classList.add('color-change'));
}