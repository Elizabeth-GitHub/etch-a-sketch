const containerMain = document.createElement('div');
const containerHeader = document.createElement('div');
const textHeader = document.createElement('h1');
// Working Area
const containerWorkingArea = document.createElement('div');
const containerOptions = document.createElement('div'); 
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonNewGrid = document.createElement('button');
const buttonDefaultSize = document.createElement('button');
const buttonEraser = document.createElement('button');
const containerToggles = document.createElement('div');
const containerToggleRainbow = document.createElement('div');
const textToggleRainbow = document.createElement('span');
const labelToggleRainbow = document.createElement('label');
const inputToggleRainbow = document.createElement('input');
const sliderToggleRainbow = document.createElement('span');
const containerToggleGradient = document.createElement('div');
const textToggleGradient = document.createElement('span');
const labelToggleGradient = document.createElement('label');
const inputToggleGradient = document.createElement('input');
const sliderToggleGradient = document.createElement('span');
const containerToggleGrid = document.createElement('div');
const textToggleGrid = document.createElement('span');
const labelToggleGrid = document.createElement('label');
const inputToggleGrid = document.createElement('input');
const sliderToggleGrid = document.createElement('span');
const containerGrid = document.createElement('div');
// Footer
const containerFooter = document.createElement('div');
const creator = document.createElement('p');
const creatorLink = document.createElement('a');
const creditsFlaticon = document.createElement('p');
const creditsPencilCursor = document.createElement('p');
// 
const defaultSize = 16;
createGrid(defaultSize);

let isPenActive = false;
let isEraserActive = false;
let isRainbowMode = false;
let isGradientMode = false;
let previousOpacity = 0; // Initial gradient opacity

containerMain.setAttribute('id', 'container-main');
containerMain.classList.add('containers');
//
containerHeader.setAttribute('id', 'container-header');
containerHeader.classList.add('containers');
containerWorkingArea.setAttribute('id', 'container-workingarea');
containerWorkingArea.classList.add('containers');
containerOptions.setAttribute('id', 'container-options');
containerOptions.classList.add('containers');
containerButtons.setAttribute('id', 'container-buttons');
containerButtons.classList.add('containers');
containerToggles.setAttribute('id', 'container-toggles');
containerToggles.classList.add('containers');
containerGrid.setAttribute('id', 'container-grid');
containerGrid.classList.add('containers', 'cursor-pencil');
textHeader.setAttribute('id', 'text-header');
textHeader.innerText = 'Etch-a-Sketch';
buttonClear.classList.add('button');
buttonClear.textContent = 'CLEAR';
buttonNewGrid.classList.add('button');
buttonNewGrid.textContent = 'CHANGE GRID SIZE';
buttonDefaultSize.classList.add('button');
buttonDefaultSize.textContent = 'DEFAULT SIZE';
buttonDefaultSize.style.display = 'none';
buttonEraser.classList.add('button');
buttonEraser.innerText = 'ERASER';
containerToggleRainbow.classList.add('containers', 'container-toggler');
labelToggleRainbow.classList.add('containers', 'toggle-switch');
inputToggleRainbow.type = 'checkbox';
sliderToggleRainbow.classList.add('slider');
textToggleRainbow.classList.add('text-toggler');
textToggleRainbow.innerText = 'RAINBOW';
containerToggleGrid.classList.add('containers','container-toggler');
textToggleGrid.classList.add('text-toggler');
textToggleGrid.style.whiteSpace = 'nowrap';
textToggleGrid.innerText= 'SHOW GRID';
labelToggleGrid.classList.add('containers', 'toggle-switch');
inputToggleGrid.type = 'checkbox';
inputToggleGrid.checked = true;
sliderToggleGrid.classList.add('slider');
containerToggleGradient.classList.add('containers','container-toggler');
textToggleGradient.classList.add('text-toggler');
textToggleGradient.innerText = 'GRADIENT';
labelToggleGradient.classList.add('containers', 'toggle-switch');
inputToggleGradient.type = 'checkbox';
sliderToggleGradient.classList.add('slider');
//
containerFooter.setAttribute('id', 'container-footer');
containerFooter.classList.add('containers');
creator.classList.add('text-footer');
creator.innerText = 'Created by ';
creatorLink.classList.add('text-footer');
creatorLink.href = 'https://github.com/Elizabeth-GitHub';
creatorLink.target = '_blank';
creatorLink.innerText = 'Elizabeth Developer';
creditsFlaticon.classList.add('text-footer');
creditsFlaticon.innerHTML = '<a href="https://www.flaticon.com/free-icon/pencil_603570?term=pencil&page=1&position=34&origin=tag&related_id=603570" target="_blank">Pencil icon,</a>\
                            <a href="https://www.flaticon.com/free-icon/eraser_593398?term=eraser&page=1&position=81&origin=tag&related_id=593398" target="_blank">eraser cursor</a>\
                            created by <a href="https://www.flaticon.com/" target="_blank">Fleepik-Flaticon</a> and used under the Flaticon Free License';
creditsPencilCursor.classList.add('text-footer');
creditsPencilCursor.innerHTML = 'Pencil cursor icon created by <a href="https://icon-icons.com/users/jU68e8AK4V9vJWDuIDOsp/icon-sets/" target="_blank">Sergey Kokota</a>\
                                from <a href="https://icon-icons.com/icon/pencil/73996" target="_blank">icon-icons.com</a>\
                                under <a href="https://creativecommons.org/licenses/by/4.0/#" target="_blank">CC BY 4.0</a>';

document.body.appendChild(containerMain);
containerMain.appendChild(containerHeader);
containerHeader.appendChild(textHeader);
containerMain.appendChild(containerWorkingArea);
containerWorkingArea.appendChild(containerOptions);
containerWorkingArea.appendChild(containerGrid);
/*containerMain.appendChild(containerOptions);
containerMain.appendChild(containerGrid)*/
containerOptions.appendChild(containerButtons);
containerOptions.appendChild(containerToggles);
containerButtons.appendChild(buttonDefaultSize);
containerButtons.appendChild(buttonNewGrid);
containerButtons.appendChild(buttonEraser);
containerButtons.appendChild(buttonClear);
containerToggles.appendChild(containerToggleRainbow);
containerToggles.appendChild(containerToggleGrid);
containerToggles.appendChild(containerToggleGradient);
containerToggleRainbow.appendChild(textToggleRainbow);
containerToggleRainbow.appendChild(labelToggleRainbow);
labelToggleRainbow.appendChild(inputToggleRainbow);
labelToggleRainbow.appendChild(sliderToggleRainbow);
containerToggleGradient.appendChild(textToggleGradient);
containerToggleGradient.appendChild(labelToggleGradient);
labelToggleGradient.appendChild(inputToggleGradient);
labelToggleGradient.appendChild(sliderToggleGradient);
containerToggleGrid.appendChild(textToggleGrid);
containerToggleGrid.appendChild(labelToggleGrid);
labelToggleGrid.appendChild(inputToggleGrid);
labelToggleGrid.appendChild(sliderToggleGrid);
containerMain.appendChild(containerFooter);
containerFooter.appendChild(creator);
containerFooter.appendChild(creditsFlaticon);
containerFooter.appendChild(creditsPencilCursor);
creator.appendChild(creatorLink);

containerGrid.addEventListener('mousedown', handleMouseDown);
containerGrid.addEventListener('mouseup', handleMouseUp);
buttonClear.addEventListener('click', clearGrid);
buttonNewGrid.addEventListener('click', handleButtonNewGridClick);
buttonDefaultSize.addEventListener('click', function() {
  buttonDefaultSize.style.display = 'none';
  removeGrid();
  createGrid(defaultSize); 
});
buttonEraser.addEventListener('click', toggleEraserMode);
inputToggleRainbow.addEventListener('change', function() {
  if (this.checked) {
    isRainbowMode = true; 
    containerToggleGradient.classList.add('disabled');
  } else {
    isRainbowMode = false;
    containerToggleGradient.classList.remove('disabled');
  }
});

inputToggleGrid.addEventListener('change', function() {
  const allSquares = document.querySelectorAll('.square');
  
  if (!this.checked) {
    allSquares.forEach((square) => {
    square.classList.remove('show-grid');
    })
  } else {
    allSquares.forEach((square) => {
      square.classList.add('show-grid');
    })
  }
})

inputToggleGradient.addEventListener('change', function() {
  if (this.checked) {
    isGradientMode = true;
    containerToggleRainbow.classList.add('disabled');
  } else {
    isGradientMode = false;
    containerToggleRainbow.classList.remove('disabled');
  }
})

//
function eraseSquare(square) {
  if (square.classList.contains('hovered-rainbow', 'hovered-gradient') ||  square.classList.contains('hovered-gradient')) {
    square.style.border = '1px solid rgba(221, 160, 221, 1)';
    square.style.backgroundColor = 'white';
    square.style.opacity = 1;
    
    if (square.classList.contains('hovered-rainbow')){
      square.classList.remove('hovered-rainbow');
    } else {
      square.classList.remove('hovered-gradient');
    }
  } else {
    square.classList.remove('hovered');
  }}

 function handleMouseDown(event) {
  if (event.button === 0) {
    if (isEraserActive) {
      eraseSquare(event.target);
    } else {
      isPenActive = true;
      handleMouseEnter(event);
    }
  }
}

function handleMouseUp() {
  isPenActive = false;
}

function handleMouseEnter(event) {
  if (isPenActive) {
    const square = event.target;

    if (isRainbowMode) {
      const randomRGB = getRandomRGB();

      square.style.backgroundColor = randomRGB;
      square.style.opacity = 0.2;
      square.classList.add('hovered-rainbow');
    } else if (isGradientMode) {
      const maxOpacity = 1;
      let currentOpacity = previousOpacity;

      square.classList.add('hovered-gradient');
      if (currentOpacity < maxOpacity) {
        const increment = 0.067
        const newOpacity = currentOpacity + increment;
        const lightness = (90 - newOpacity * 80).toFixed(0);
        const saturation = (20 + newOpacity * 80).toFixed(0);
        
        square.style.opacity = newOpacity.toString();
        square.style.backgroundColor = `hsl(330, ${saturation}%, ${lightness}%)`;
        previousOpacity = newOpacity;
        console.log(previousOpacity);
        } else {
          previousOpacity = 0;
        }
      } else {
      square.classList.add('hovered');
    }
  }
}

function toggleEraserMode() {
  isEraserActive = !isEraserActive;

  if (isEraserActive) {
    containerGrid.classList.add('cursor-eraser');
    buttonEraser.classList.add('active');
  } else {
    buttonEraser.classList.remove('active');
    containerGrid.classList.remove('cursor-eraser');
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
  const squaresHovered = document.querySelectorAll('.square.hovered, .square.hovered-rainbow, .square.hovered-gradient');

  squaresHovered.forEach((squareHovered) => {
    eraseSquare(squareHovered);
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
      } else if (parsedSize > 100) {
        alert('Maximum number of squares is 100!');
      }
    }
  
    removeGrid();
    createGrid(parsedSize);
    buttonDefaultSize.style.display = 'flex';
  }
