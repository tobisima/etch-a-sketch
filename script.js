const container = document.querySelector('.container');
const topButton = document.querySelector('.top-button');
const multicolorButton = document.querySelector('.multicolor-button');
const shadeToBlackButton = document.querySelector('.shade-to-black-button');
createGrid(16);

topButton.onclick = () =>
changeGrid(prompt('Enter a number from 10 up to 100', "16"));
shadeToBlackButton.onclick = setShadingToBlack;
multicolorButton.onclick = setMulticolorDrawing;

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
    if (squaresPerSide < 10) squaresPerSide = 10;
    if (squaresPerSide > 100) squaresPerSide = 100;
    const squares = document.querySelectorAll('.container div');
    squares.forEach(square => container.removeChild(square));
    container.style = `grid-template-columns: repeat(${squaresPerSide}, 1fr)`;
    createGrid(squaresPerSide);
  }
}

function setMulticolorDrawing() {
  const squares = document.querySelectorAll('.container div');
    squares.forEach(square => {
    square.removeEventListener('mouseover', addShadingValue);
    square.addEventListener('mouseover', setRandomColor); 
    });
}

function setRandomColor(e) {
  const random0_255 = () => Math.floor(Math.random() * 256);
  e.target.style.background = `rgb(${random0_255()}, ${random0_255()}, ${random0_255()})`;
} 

function setShadingToBlack() {
  const squares = document.querySelectorAll('.container div');
    squares.forEach(square => { 
    square.removeEventListener('mouseover', setRandomColor);
    square.addEventListener('mouseover', addShadingValue);
    });
}

function addShadingValue(e) {
  const shadingValue = e.target.style.background.slice(-4, -1);
  if (e.target.style.background === 'rgb(0, 0, 0)') return;
  if (e.target.style.background.charAt(3) === '(') {
    e.target.style.background = 'rgba(0, 0, 0, 0.1)';
  } else {   
    e.target.style.background = `rgba(0, 0, 0, ${+shadingValue + 0.1})`;
  }
}

  

  
  