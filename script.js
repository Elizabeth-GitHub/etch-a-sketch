const containerMain = document.createElement('div');
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonNewGrid = document.createElement('button');
const buttonRainbow = document.createElement('button');
const containerGrid = document.createElement('div');
const defaultSize = 16;
createGrid(defaultSize);

let isPenActive = false;
let isRainbowMode = false;

containerMain.setAttribute('id', 'container-main');
containerMain.classList.add('containers');
containerButtons.setAttribute('id', 'container-buttons');
containerButtons.classList.add('containers');
containerGrid.setAttribute('id', 'container-grid');
containerGrid.classList.add('containers');
buttonClear.classList.add('button');
buttonClear.textContent = 'CLEAR';
buttonNewGrid.classList.add('button');
buttonNewGrid.textContent = 'CHANGE GRID SIZE';
buttonRainbow.classList.add('button');
buttonRainbow.textContent = 'RAINBOW';

document.body.appendChild(containerMain);
containerMain.appendChild(containerButtons);
containerMain.appendChild(containerGrid);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonNewGrid);
containerButtons.appendChild(buttonRainbow);


containerGrid.addEventListener('mousedown', handleMouseDown);
containerGrid.addEventListener('mouseup', handleMouseUp);
buttonClear.addEventListener('click', clearGrid);
buttonNewGrid.addEventListener('click', handleButtonNewGridClick);
buttonRainbow.addEventListener('click', enableRainbowMode);

function enableRainbowMode() {
  isRainbowMode = true;
}

function handleMouseDown(event) {
  if (event.button === 0) {
    isPenActive = true;
    handleMouseEnter(event);
  }
}

function handleMouseUp() {
  isPenActive = false;
}

function handleMouseEnter(event) {
  if (isPenActive) {
    if (isRainbowMode) {
      const currentOpacity = 0.1
      const square = event.target;
      const randomRGB = getRandomRGB();

      square.style.backgroundColor = randomRGB;
      square.style.opacity = parseFloat(currentOpacity) + 0.1;
      square.classList.add('hovered-rainbow');
    }
    else {
      event.target.classList.add('hovered')
    }
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function removeGrid() {
    containerGrid.innerHTML = '';
}

function clearGrid() {
  const squaresHovered = document.querySelectorAll('.square.hovered, .square.hovered-rainbow');

  squaresHovered.forEach((squareHovered) => {
    if (squareHovered.classList.contains('hovered-rainbow')) {
      console.log('rainbow');
      squareHovered.style.border = '1px solid rgba(221 160 221 1)';
      squareHovered.style.backgroundColor = 'white';
      squareHovered.style.opacity = 1;
    
      squareHovered.classList.remove('hovered-rainbow');
    }
    else {
      squareHovered.classList.remove('hovered');
    }
});

  isPenActive = false; 
}

function createGrid(gridSize) {
    const squareSize = `${100 / gridSize}%`;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.flexBasis = squareSize;
            containerGrid.appendChild(square);
            square.addEventListener('mouseenter', handleMouseEnter);
        }
    }
}

function handleButtonNewGridClick() {
    let parsedSize = NaN;
  
    while (isNaN(parsedSize) || parsedSize <= 0 || parsedSize > 100) {
      const newSize = prompt('Enter the number of squares per side for the new grid (between 1 and 100):');
  
      if (newSize === null) {
        return; // Exit the function if the user clicks "Cancel"
      }
  
      parsedSize = parseInt(newSize);
  
      if (parsedSize <= 0) {
        alert('Number of squares should be at least 1!');
      } 
      else if (parsedSize > 100) {
        alert('Maximum number of squares is 100!');
      }
    }
  
    removeGrid();
    createGrid(parsedSize);
  }