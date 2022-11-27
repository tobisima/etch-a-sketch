const container = document.querySelector('.container');
const button = document.querySelector('button');
createGrid(16);
button.onclick =
() => changeGrid(prompt('Enter a number from 1 up to 100', "16"));

function createGrid(squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.addEventListener('mouseover',
    () => square.classList.add('color-change'));
  }
}

function changeGrid(squaresPerSide) {
  const squares = document.querySelectorAll('div div');
  squares.forEach(square => container.removeChild(square));
  container.setAttribute('style', 
  'grid-template-columns: repeat(' + squaresPerSide + ', 1fr)');
  createGrid(squaresPerSide); 
}
