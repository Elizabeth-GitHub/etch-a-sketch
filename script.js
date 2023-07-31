const containerMain = document.createElement('div');
const containerHeader = document.createElement('div');
const textHeader = document.createElement('h1');
// Working Area
const containerWorkingArea = document.createElement('div');
const containerOptions = document.createElement('div'); 
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonChangeGridSize = document.createElement('button');
const containerChangeGridSize =  document.createElement('div');
const labelChangeGridSize = document.createElement('label');
const inputChangeGridSize = document.createElement('input');
const outputChangeGridSize = document.createElement('output');
const buttonDefaultSize = document.createElement('button');
const buttonEraser = document.createElement('button');
const containerToggles = document.createElement('div');
const listToggles = document.createElement('ul');
const toggleRainbow = document.createElement('li');
const labelToggleRainbow = document.createElement('label');
const inputToggleRainbow = document.createElement('input');
const toggleGradient = document.createElement('li');
const labelToggleGradient = document.createElement('label');
const inputToggleGradient = document.createElement('input');
const containerChangeGradientSize = document.createElement('div');
const labelChangeGradientSize = document.createElement('label');
const inputChangeGradientSize = document.createElement('input');
const outputChangeGradientSize = document.createElement('output');
const toggleGrid = document.createElement('li');
const labelToggleGrid = document.createElement('label');
const inputToggleGrid = document.createElement('input');
const containerGrid = document.createElement('div');
// Footer
const containerFooter = document.createElement('div');
const creator = document.createElement('p');
const creatorLink = document.createElement('a');
const creditsFlaticon = document.createElement('p');
const creditsPencilCursor = document.createElement('p');
// 
const DEFAULT_SIZE = 16;
const DEFAULT_GRADIENT = 10;
const RAINBOW_OPACITY = 0.2;
const MAX_RGB_VALUE = 256;
const MAX_GRADIENT_OPACITY = 1;
createGrid(DEFAULT_SIZE);

let isPenActive = false;
let isEraserActive = false;
let isRainbowMode = false;
let isGradientMode = false;
let isGridShown = true;
let previousOpacity = 0; // Initial gradient opacity
let squareToGradientIndex = 0;
let isSizeChanged = false // true if a user has changed the grid size. The variable is used for hiding the grid size range checkbox after starting drawing.

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
textHeader.innerText = 'Etch-a-Sketch';
buttonClear.classList.add('button');
buttonClear.textContent = 'CLEAR';
buttonClear.style.visibility = 'hidden';
buttonChangeGridSize.classList.add('button');
buttonChangeGridSize.textContent = 'CHANGE GRID SIZE';
//
containerChangeGridSize.classList.add('containers');
containerChangeGridSize.style.visibility = 'hidden';
containerChangeGridSize.id = 'container-changegradientsize';
labelChangeGridSize.textContent = 'GRID SIZE';
labelChangeGridSize.classList.add('label-toggle');
inputChangeGridSize.type = 'range';
inputChangeGridSize.id = 'input-changegridsize';
inputChangeGridSize.name = 'input-changegridsize';
inputChangeGridSize.min = '1';
inputChangeGridSize.max = '100';
inputChangeGridSize.step = '1';
outputChangeGridSize.setAttribute('for', 'input-changegradientsize');
setDefaultInputOutputGridSize()
//
buttonDefaultSize.classList.add('button');
buttonDefaultSize.textContent = 'DEFAULT SIZE';
buttonDefaultSize.style.visibility = 'hidden';
buttonEraser.classList.add('button');
buttonEraser.innerText = 'ERASER';
buttonEraser.style.visibility = 'hidden';
labelToggleRainbow.setAttribute('for', 'input-toggleainbow');
labelToggleRainbow.textContent = 'RAINBOW';
inputToggleRainbow.type = 'checkbox';
inputToggleRainbow.name = 'input-togglerainbow';
inputToggleRainbow.id = 'input-togglerainbow';
labelToggleGrid.setAttribute('for', 'input-togglegrid');
labelToggleGrid.textContent = 'SHOW GRID';
inputToggleGrid.type = 'checkbox';
inputToggleGrid.name = 'input-togglegrid';
inputToggleGrid.id = 'input-togglegrid';
inputToggleGrid.checked = true;
labelToggleGradient.setAttribute('for', 'input-togglegradient');
labelToggleGradient.textContent = 'GRADIENT';
inputToggleGradient.type = 'checkbox';
inputToggleGradient.name = 'input-togglegradient';
inputToggleGradient.id = 'input-togglegradient';
containerChangeGradientSize.classList.add('containers');
containerChangeGradientSize.style.visibility = 'hidden';
containerChangeGradientSize.id = 'container-changegradientsize';
labelChangeGradientSize.textContent = 'GRADIENT SIZE';
labelChangeGradientSize.classList.add('label-toggle');
inputChangeGradientSize.type = 'range';
inputChangeGradientSize.min = '1';
inputChangeGradientSize.max = '100';
inputChangeGradientSize.value = DEFAULT_GRADIENT;
inputChangeGradientSize.step = '1';
outputChangeGradientSize.value = DEFAULT_GRADIENT;
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
containerMain.appendChild(containerFooter);
containerWorkingArea.appendChild(containerOptions);
containerWorkingArea.appendChild(containerGrid);
containerOptions.appendChild(containerButtons);
containerOptions.appendChild(containerToggles);
containerButtons.appendChild(buttonEraser);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonChangeGridSize);
containerButtons.appendChild(containerChangeGridSize);
containerChangeGridSize.appendChild(labelChangeGridSize);
containerChangeGridSize.appendChild(inputChangeGridSize);
containerChangeGridSize.appendChild(outputChangeGridSize);
containerButtons.appendChild(buttonDefaultSize);
containerToggles.appendChild(listToggles);
listToggles.appendChild(toggleGrid);
listToggles.appendChild(toggleRainbow);
listToggles.appendChild(toggleGradient);
toggleRainbow.appendChild(labelToggleRainbow);
toggleRainbow.appendChild(inputToggleRainbow);
toggleGradient.appendChild(labelToggleGradient);
toggleGradient.appendChild(inputToggleGradient);
containerToggles.appendChild(containerChangeGradientSize);
containerChangeGradientSize.appendChild(labelChangeGradientSize);
containerChangeGradientSize.appendChild(inputChangeGradientSize);
containerChangeGradientSize.appendChild(outputChangeGradientSize);
toggleGrid.appendChild(labelToggleGrid);
toggleGrid.appendChild(inputToggleGrid);
containerFooter.appendChild(creator);
containerFooter.appendChild(creditsFlaticon);
containerFooter.appendChild(creditsPencilCursor);
creator.appendChild(creatorLink);
containerGrid.addEventListener('mousedown', handleMouseDown);
containerGrid.addEventListener('mouseup', handleMouseUp);
buttonClear.addEventListener('click', clearGrid);
buttonChangeGridSize.addEventListener('click', handleButtonChangeGridSizeClick);
buttonDefaultSize.addEventListener('click', function() {
  if (checkHoveredSquares() && !showChangingAlert()) {
    return;
  }
  disableElement(buttonDefaultSize);
  removeGrid();
  createGrid(DEFAULT_SIZE);
  inputChangeGridSize.value = DEFAULT_SIZE; 
  setDefaultInputOutputGridSize();
});
buttonEraser.addEventListener('click', toggleEraserMode);

inputToggleRainbow.addEventListener('change', function() {
  if (this.checked && inputToggleGradient.checked) {
    alert('Rainbow mode will be available after turning off gradient mode!');
    this.checked = false;
  } else {
  isChecked = this.checked;
  isRainbowMode = isChecked;
  toggleGradient.classList.toggle('disabled', isChecked);
  }
});
inputToggleGrid.addEventListener('change', function() {
  const allSquaresGrid = document.querySelectorAll('.square');
  isGridShown = this.checked;

  if (!isGridShown) {
    allSquaresGrid.forEach((squareGrid) => {
      disableGridBorder(squareGrid);
      })
  } else {
    allSquaresGrid.forEach((squareGrid) => {
      enableGridBorders(squareGrid);
      })
  }
})
inputToggleGradient.addEventListener('change', function() {
  if (this.checked && inputToggleRainbow.checked) {
    alert('Gradient mode will be available after turning off rainbow mode!');
    this.checked = false;
  } else {
    isGradientMode = this.checked;
    toggleRainbow.classList.toggle('disabled', this.checked);
    isGradientMode ? enableElement(containerChangeGradientSize) : disableElement(containerChangeGradientSize);
  }
});
inputChangeGradientSize.addEventListener('input', function() {
  outputChangeGradientSize.value = this.value;
});
inputChangeGridSize.addEventListener('input', function() {
  outputChangeGridSize.value = this.value;

  const newGridSize = inputChangeGridSize.value;

  if (checkHoveredSquares()) {
    if (showChangingAlert()) { // A user agreed to reset the current drawing
      changeGridSize(newGridSize); 
    } else {
      return;
    }
  } else { 
    changeGridSize(newGridSize); 
  }

  if (!isSizeChanged) {
    isSizeChanged = true;
  }
})

//
function setDefaultInputOutputGridSize() {
  inputChangeGridSize.value = DEFAULT_SIZE;
  outputChangeGridSize.value = DEFAULT_SIZE;
}

function enableGridBorders(squareAddBorder) {
  squareAddBorder.style.border = '1px solid rgba(221, 160, 221, 1)';
}

function getRandomRGB() {
  const red = Math.floor(Math.random() * MAX_RGB_VALUE);
  const green = Math.floor(Math.random() * MAX_RGB_VALUE);
  const blue = Math.floor(Math.random() * MAX_RGB_VALUE);

  return `rgb(${red},${green},${blue})`;
}

function drawRainbowSquare(squareToRainbow) {
  const randomRGB = getRandomRGB();

  squareToRainbow.style.backgroundColor = randomRGB;
  squareToRainbow.style.opacity = RAINBOW_OPACITY;
  squareToRainbow.classList.add('hovered-rainbow');
}

function drawGradientSquare(squareToGradient) {
  const gradientSize = parseInt(outputChangeGradientSize.value);
  
  let currentOpacity = previousOpacity;

  squareToGradient.classList.add('hovered-gradient');
  if (currentOpacity < MAX_GRADIENT_OPACITY && squareToGradientIndex <= gradientSize) {
    const increment = MAX_GRADIENT_OPACITY / (gradientSize - 1);
    const newOpacity = currentOpacity + increment;
    const lightness = (90 - newOpacity * 80).toFixed(0);
    const saturation = (20 + newOpacity * 80).toFixed(0);
        
    squareToGradient.style.opacity = newOpacity.toString();
    squareToGradient.style.backgroundColor = `hsl(330, ${saturation}%, ${lightness}%)`;
    previousOpacity = newOpacity;
    squareToGradientIndex += 1
  } else {
    squareToGradient.style.opacity = '0'; 
    previousOpacity = 0;
    squareToGradientIndex = 0;
  }
}

function drawPlumSquare(squareToPLum) {
  squareToPLum.classList.add('hovered');
}

function enableElement(...elementsToEnable) {
  elementsToEnable.forEach(elementToEnable => {
    elementToEnable.style.visibility = 'visible';
});
}

function handleMouseEnter(event) {
  if (isPenActive) {
    const square = event.target;

    if (isRainbowMode) {
      drawRainbowSquare(square);
    } else if (isGradientMode) {
      drawGradientSquare(square);
    } else {
      drawPlumSquare(square);
    }
    enableElement(buttonClear, buttonEraser);
    disableElement(containerChangeGridSize);
    isSizeChanged = false;
    buttonChangeGridSize.classList.remove('disabled');
  }
}

function createGrid(gridSize) {
  const squareSize = `${100 / gridSize}%`;

  for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
          const squareToCreate = document.createElement('div');

          squareToCreate.classList.add('square');
          enableGridBorders(squareToCreate);
          squareToCreate.style.flexBasis = squareSize;
          containerGrid.appendChild(squareToCreate);
          squareToCreate.addEventListener('mouseenter', handleMouseEnter);
      }
  }
}

function eraseSquare(squareToErase) {
  if (squareToErase.classList.contains('hovered-rainbow') ||  squareToErase.classList.contains('hovered-gradient')) {
    if (isGridShown) {
    enableGridBorders(squareToErase);
    }
    squareToErase.style.backgroundColor = 'white';
    squareToErase.style.opacity = 1;
    
    if (squareToErase.classList.contains('hovered-rainbow')){
      squareToErase.classList.remove('hovered-rainbow');
    } else {
      squareToErase.classList.remove('hovered-gradient');
    }
  } else {
    squareToErase.classList.remove('hovered');
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

function showChangingAlert() {
  return confirm('The current drawing will not be saved. Are you sure you want to proceed?');
}

function findHoveredSquares() {
  return document.querySelectorAll('.hovered, .hovered-rainbow, .hovered-gradient');
}

function toggleEraserMode() {
  isEraserActive = !isEraserActive;

  buttonEraser.classList.toggle('active', isEraserActive);
  containerGrid.classList.toggle('cursor-eraser', isEraserActive);
}

function disableElement(...elementsToDisable) {
  elementsToDisable.forEach(elementToDisable => {
    elementToDisable.style.visibility = 'hidden';
  });
}

function clearGrid() {
  if (showChangingAlert()) {
    const areaHovered = findHoveredSquares();

    areaHovered.forEach((elementHovered) => {
      eraseSquare(elementHovered);
  });
    isPenActive = false; 
    if (isEraserActive) {
    toggleEraserMode();
    }
    disableElement(buttonClear, buttonEraser);
    previousOpacity = 0;
  } else {
    return
  }
}

function handleButtonChangeGridSizeClick() {
  enableElement(containerChangeGridSize);
  buttonChangeGridSize.classList.add('disabled');
}

function removeGrid() {
  containerGrid.innerHTML = '';
}

function disableGridBorder(squareRemoveBorder) {
  squareRemoveBorder.style.border = 0;
}

function checkHoveredSquares() {
  const hoveredSquares  = findHoveredSquares();

  if (hoveredSquares.length > 0) {
    return true;
  } else {
    return false;
  }
}

function changeGridSize(newSize){
  removeGrid();
  createGrid(parseInt(newSize));
  buttonDefaultSize.style.visibility = 'visible';
} 
