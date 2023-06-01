const containerMain = document.createElement('div');
const containerHeader = document.createElement('div');
const textHeader = document.createElement('h1');
// Working Area
const containerWorkingArea = document.createElement('div');
const containerOptions = document.createElement('div'); 
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonChangeGridSize = document.createElement('button');
const containerChangeGridSizeSlider =  document.createElement('div');
const containerChoosenGridSize = document.createElement('div');
const chosenGridSize = document.createElement('span');
const inputChangeGridSize = document.createElement('input');
const labelChangeGridSize = document.createElement('label');
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
const containerChangeGradientSize = document.createElement('div');
const containerChangeGradientValue = document.createElement('div');
const chosenGradientSize = document.createElement('span');
const inputChangeGradientSize= document.createElement('input');
const labelChangeGradientSize = document.createElement('label');
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
const DEFAULT_SIZE = 16;
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
buttonClear.style.display = 'none';
buttonChangeGridSize.classList.add('button');
buttonChangeGridSize.textContent = 'CHANGE GRID SIZE';
//
containerChangeGridSizeSlider.classList.add('containers');
containerChangeGridSizeSlider.style.display = 'none';
containerChoosenGridSize.classList.add('containers');
chosenGridSize.textContent = 16;
inputChangeGridSize.classList.add('slider-range');
inputChangeGridSize.type = 'range';
inputChangeGridSize.min = '1';
inputChangeGridSize.max = '100';
inputChangeGridSize.value = '10';
inputChangeGridSize.step = '1';
labelChangeGridSize.classList.add('text-toggler');
labelChangeGridSize.textContent = 'Grid Size';
//
buttonDefaultSize.classList.add('button');
buttonDefaultSize.textContent = 'DEFAULT SIZE';
buttonDefaultSize.style.display = 'none';
buttonEraser.classList.add('button');
buttonEraser.innerText = 'ERASER';
buttonEraser.style.display = 'none';
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
containerChangeGradientSize.classList.add('containers');
containerChangeGradientSize.style.display = 'none';
containerChangeGradientValue.classList.add('containers');
chosenGradientSize.textContent = 10;
inputChangeGradientSize.classList.add('slider-range');
inputChangeGradientSize.type = 'range';
inputChangeGradientSize.min = '1';
inputChangeGradientSize.max = '100';
inputChangeGradientSize.value = '10';
inputChangeGradientSize.step = '1';
labelChangeGradientSize.classList.add('text-toggler');
labelChangeGradientSize.textContent = 'Gradient Size';
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
containerOptions.appendChild(containerButtons);
containerOptions.appendChild(containerToggles);
containerButtons.appendChild(buttonEraser);
containerButtons.appendChild(buttonClear);
containerButtons.appendChild(buttonDefaultSize);
containerButtons.appendChild(buttonChangeGridSize);
containerButtons.appendChild(containerChangeGridSizeSlider);
containerChangeGridSizeSlider.appendChild(containerChoosenGridSize);
containerChoosenGridSize.appendChild(chosenGridSize);
containerChoosenGridSize.appendChild(inputChangeGridSize);
containerChoosenGridSize.appendChild(labelChangeGridSize);
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
containerToggles.appendChild(containerChangeGradientSize);
containerChangeGradientSize.appendChild(containerChangeGradientValue);
containerChangeGradientValue.appendChild(chosenGradientSize);
containerChangeGradientSize.appendChild(inputChangeGradientSize);
containerChangeGradientSize.appendChild(labelChangeGradientSize);
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
buttonChangeGridSize.addEventListener('click', handleButtonChangeGridSizeClick);
buttonDefaultSize.addEventListener('click', function() {
  if (checkHoveredSquares() && !showChangingAlert()) {
    return;
  }
  disableElement(buttonDefaultSize);
  removeGrid();
  createGrid(DEFAULT_SIZE);
  inputChangeGridSize.value = DEFAULT_SIZE; 
  handleSlider(inputChangeGridSize, chosenGridSize);
});
buttonEraser.addEventListener('click', toggleEraserMode);

inputToggleRainbow.addEventListener('change', function() {
  if (this.checked && inputToggleGradient.checked) {
    alert('Rainbow mode will be available after turning off gradient mode!');
    this.checked = false;
  } else {
  isChecked = this.checked;
  isRainbowMode = isChecked;
  containerToggleGradient.classList.toggle('disabled', isChecked);
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
    containerToggleRainbow.classList.toggle('disabled', this.checked);
    enableElement(containerChangeGradientSize, this.checked);
  }
});
inputChangeGradientSize.addEventListener('input', function() {
  handleSlider(inputChangeGradientSize, chosenGradientSize);
});
inputChangeGridSize.addEventListener('input', function() {
  const newGridSize = inputChangeGridSize.value;

  handleSlider(inputChangeGridSize, chosenGridSize);

  if (checkHoveredSquares()) {
    if (showChangingAlert()) { // A user agreed to reset the current drawing
      changeGridSize(newGridSize); 
    } else {
      return;
    }
  } else { 
    changeGridSize(newGridSize); 
  }
})

//
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
  const gradientSize = parseInt(chosenGradientSize.textContent);
  
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
  elementToEnable.style.display = 'flex';
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
    elementToDisable.style.display = 'none';
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
  enableElement(containerChangeGridSizeSlider);
  buttonChangeGridSize.classList.add('disabled');
}

function removeGrid() {
  containerGrid.innerHTML = '';
}

function handleSlider(inputChange, valueToDisplay, defaultValue = null) {
  let valueSlider = defaultValue;

  if (defaultValue === null) {
    valueSlider = inputChange.value;
  }

  const proportionBackground  = `${parseInt(valueSlider)}% 100%`

  inputChange.style.backgroundSize = proportionBackground;
  valueToDisplay.textContent = valueSlider;
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
  buttonDefaultSize.style.display = 'flex';
} 
