const containerMain = document.createElement('div');
const buttonNewGrid = document.createElement('button');
const containerGrid = document.createElement('div');
const defaultSize = 16;
createGrid(defaultSize);
const squares = document.querySelectorAll('.square');

containerMain.setAttribute('id', 'container-main');
containerGrid.setAttribute('id', 'container-grid');
buttonNewGrid.classList.add('button');
buttonNewGrid.textContent = 'NEW GRID';

document.body.appendChild(containerMain);
containerMain.appendChild(buttonNewGrid);
containerMain.appendChild(containerGrid);

buttonNewGrid.addEventListener('click', handleButtonNewGridClick);

function handleMouseEnter(event) {
    event.target.classList.add('hovered');
};

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
  
    clearGrid();
    createGrid(parsedSize);
  }

function clearGrid() {
    containerGrid.innerHTML = '';
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