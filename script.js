const container = document.querySelector('.container');
const topButton = document.querySelector('.top-button');
const MulticolorSetButton = document.querySelector('.multicolor-set-button');
MulticolorSetButton.onclick = setMulticolorDrawing;
topButton.onclick =
() => changeGrid(prompt('Enter a number from 10 up to 100', "16"));

createGrid(16);

function createGrid(squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseover',
    () => square.classList.add('color-change'));
  }
}

function changeGrid(squaresPerSide) {
  if (isNaN(squaresPerSide)) {
    changeGrid(prompt('Enter a number from 10 up to 100'));
  } else {
    if (!squaresPerSide) return
    if (squaresPerSide < 10) squaresPerSide = 10
    if (squaresPerSide > 100) squaresPerSide = 100;
    const squares = document.querySelectorAll('.container div');
    squares.forEach(square => container.removeChild(square));
    container.style = `grid-template-columns: repeat(${squaresPerSide}, 1fr)`;
    createGrid(squaresPerSide);
  }
}

function set0_255() {
  return Math.floor(Math.random() * 256);
}

function setMulticolorDrawing() {
  const squares = document.querySelectorAll('.container div')
  squares.forEach(square =>
  square.addEventListener('mouseover', () =>
  square.style.background = `rgb(${set0_255()}, ${set0_255()}, ${set0_255()})`));
}
