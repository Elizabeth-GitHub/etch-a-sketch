const containerMain = document.createElement('div');
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonNewGrid = document.createElement('button');
const containerGrid = document.createElement('div');
const defaultSize = 16;
createGrid(defaultSize);

let isPenActive = false;

containerMain.setAttribute('id', 'container-main');
containerMain.classList.add('containers');
containerButtons.setAttribute('id', 'container-buttons');
containerButtons.classList.add('containers');
containerGrid.setAttribute('id', 'container-grid');
containerGrid.classList.add('containers');
buttonClear.classList.add('button');
buttonNewGrid.classList.add('button');
buttonClear.textContent = 'CLEAR';
buttonNewGrid.textContent = 'CHANGE GRID SIZE';

document.body.appendChild(containerMain);
containerMain.appendChild(containerButtons);
containerMain.appendChild(containerGrid);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonNewGrid);


containerGrid.addEventListener('mousedown', handleMouseDown);
containerGrid.addEventListener('mouseup', handleMouseUp);
buttonClear.addEventListener('click', clearGrid);
buttonNewGrid.addEventListener('click', handleButtonNewGridClick);

function handleMouseDown(event) {
  isPenActive = true;
  handleMouseEnter(event);
}

function handleMouseUp() {
  isPenActive = false;
}

function handleMouseEnter(event) {
  if (isPenActive) {
    event.target.classList.add('hovered');
  }
}

function removeGrid() {
    containerGrid.innerHTML = '';
}

function clearGrid() {
    const squaresHovered = document.querySelectorAll('.square.hovered');

    console.log('clear');
    squaresHovered.forEach((squareHovered) => {
        squareHovered.classList.remove('hovered');
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