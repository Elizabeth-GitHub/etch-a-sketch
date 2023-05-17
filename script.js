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
    const newSize = prompt('Enter the number of squares per side for the new grid:');

    if (newSize) {
        const parsedSize = parseInt(newSize);
        if (parsedSize > 0) {
          clearGrid();
          createGrid(parsedSize);
        } 
        else {
          alert('Invalid input. Please enter a valid number greater than 0.');
        }
      }
};

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