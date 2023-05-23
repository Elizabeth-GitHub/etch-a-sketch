const containerMain = document.createElement('div');
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonNewGrid = document.createElement('button');
const buttonDefaultSize = document.createElement('button');
const containerToggleRainbow = document.createElement('div');
const labelToggleRainbow = document.createElement('label');
const inputToggleRainbow = document.createElement('input');
const sliderToggleRainbow = document.createElement('span');
const textToggleRainbow = document.createElement('span');
const containerTogglerGrid = document.createElement('div');
const textToggleGrid = document.createElement('span');
const labelTogglerGrid = document.createElement('label');
const inputToggleGrid = document.createElement('input');
const sliderTogglerGrid = document.createElement('span');
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
buttonDefaultSize.classList.add('button');
buttonDefaultSize.textContent = 'DEFAULT SIZE';
buttonDefaultSize.style.display = 'none';
containerToggleRainbow.classList.add('containers', 'button', 'container-toggler');
labelToggleRainbow.classList.add('containers', 'toggle-switch');
inputToggleRainbow.type = 'checkbox';
sliderToggleRainbow.classList.add('slider');
textToggleRainbow.classList.add('text-toggler');
textToggleRainbow.textContent = 'RAINBOW';
containerTogglerGrid.classList.add('containers', 'button', 'container-toggler');
textToggleGrid.classList.add('text-toggler');
textToggleGrid.innerText = 'SHOW GRID';
labelTogglerGrid.classList.add('containers', 'toggle-switch');
inputToggleGrid.type = 'checkbox';
inputToggleGrid.checked = true;
sliderTogglerGrid.classList.add('slider');

document.body.appendChild(containerMain);
containerMain.appendChild(containerButtons);
containerMain.appendChild(containerGrid);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonNewGrid);
containerButtons.appendChild(buttonDefaultSize);
containerButtons.appendChild(containerToggleRainbow);
containerButtons.appendChild(containerTogglerGrid);
containerToggleRainbow.appendChild(textToggleRainbow);
containerToggleRainbow.appendChild(labelToggleRainbow);
labelToggleRainbow.appendChild(inputToggleRainbow);
labelToggleRainbow.appendChild(sliderToggleRainbow);
containerTogglerGrid.appendChild(textToggleGrid);
containerTogglerGrid.appendChild(labelTogglerGrid);
labelTogglerGrid.appendChild(inputToggleGrid);
labelTogglerGrid.appendChild(sliderTogglerGrid);
containerGrid.addEventListener('mousedown', handleMouseDown);
containerGrid.addEventListener('mouseup', handleMouseUp);
buttonClear.addEventListener('click', clearGrid);
buttonNewGrid.addEventListener('click', handleButtonNewGridClick);
buttonDefaultSize.addEventListener('click', function() {
  buttonDefaultSize.style.display = 'none';
  removeGrid();
  createGrid(defaultSize); // Set the default grid size (e.g., 16)
});
inputToggleRainbow.addEventListener('change', function() {
  if (this.checked) {
    isRainbowMode = true; // Switcher is on, set isRainbowMode to true
  } 
  else {
    isRainbowMode = false; // Switcher is off, set isRainbowMode to false
  }
});
inputToggleGrid.addEventListener('change', function() {
  const allSquares = document.querySelectorAll('.square');
  
  if (!this.checked) {
    allSquares.forEach((square) => {
    square.classList.remove('show-grid');
    })
  }
  else {
    allSquares.forEach((square) => {
      square.classList.add('show-grid');
      })
  }
} )

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
            square.classList.add('square', 'show-grid');
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
    buttonDefaultSize.style.display = 'flex';
  }