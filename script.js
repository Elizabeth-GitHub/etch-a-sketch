const containerMain = document.createElement('div');
const containerHeader = document.createElement('div');
const textHeader = document.createElement('h1');
// Working Area
const containerWorkingArea = document.createElement('div');
const containerOptions = document.createElement('div'); 
const containerButtons = document.createElement('div');
const buttonClear = document.createElement('button');
const buttonChangeGridSize = document.createElement('button');
//
const containerChangeGridSizeSlider =  document.createElement('div');
const containerChoosenGridSize = document.createElement('div');
const choosenGridSize = document.createElement('span');
const inputChangeGridSize = document.createElement('input');
const labelChangeGridSize = document.createElement('label');
//
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
const valueGradientSize = document.createElement('span');
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
const defaultSize = 16;
createGrid(defaultSize);

let isPenActive = false;
let isEraserActive = false;
let isRainbowMode = false;
let isGradientMode = false;
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
textHeader.setAttribute('id', 'text-header');
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
choosenGridSize.setAttribute('id', 'choosen-gridsize');
choosenGridSize.textContent = 16;
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
valueGradientSize.setAttribute('id', 'value-gradientsize');
valueGradientSize.textContent = 10;
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
containerChoosenGridSize.appendChild(choosenGridSize);
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
containerChangeGradientValue.appendChild(valueGradientSize);
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

  buttonDefaultSize.style.display = 'none';
  removeGrid();
  createGrid(defaultSize);
  inputChangeGridSize.value = defaultSize; // Set the value explicitly
  handleSlider(inputChangeGridSize, choosenGridSize); // Update the appearance
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
    enableElement(containerChangeGradientSize);
  } else {
    isGradientMode = false;
    containerToggleRainbow.classList.remove('disabled');
    disableElement(containerChangeGradientSize);
  }
})

inputChangeGradientSize.addEventListener('input', function() {
  handleSlider(inputChangeGradientSize, valueGradientSize);
});

inputChangeGridSize.addEventListener('input', function() {
  const newGridSize = inputChangeGridSize.value;

  handleSlider(inputChangeGridSize, choosenGridSize);

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
function handleSlider(inputChange, valueToDisplay, defaultValue = null) {
  let valueSlider = defaultValue;

  if (defaultValue === null) {
    valueSlider = inputChange.value;
  }

  const proportionBackground  = `${parseInt(valueSlider)}% 100%`

  inputChange.style.backgroundSize = proportionBackground;
  valueToDisplay.textContent = valueSlider;
}

function eraseSquare(square) {
  if (square.classList.contains('hovered-rainbow') ||  square.classList.contains('hovered-gradient')) {
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

function drawPlumSquare(squareToPLum) {
  squareToPLum.classList.add('hovered');
}

function drawRainbowSquare(squareToRainbow) {
  const randomRGB = getRandomRGB();

  squareToRainbow.style.backgroundColor = randomRGB;
  squareToRainbow.style.opacity = 0.2;
  squareToRainbow.classList.add('hovered-rainbow');
}

function drawGradientSquare(squareToGradient) {
  const maxOpacity = 1;
  const gradientSize = parseInt(valueGradientSize.textContent);
  
  let currentOpacity = previousOpacity;

  squareToGradient.classList.add('hovered-gradient');
  if (currentOpacity < maxOpacity && squareToGradientIndex <= gradientSize) {
    const increment = maxOpacity / (gradientSize - 1);
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

function enableElement(...elementsToEnable) {
  elementsToEnable.forEach(elementToEnable => {
    elementToEnable.style.display = 'flex';
  });
}

function disableElement(...elementsToDisable) {
  elementsToDisable.forEach(elementToDisable => {
    elementToDisable.style.display = 'none';
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

function toggleEraserMode() {
  isEraserActive = !isEraserActive;

  if (isEraserActive) {
    buttonEraser.classList.add('active');
    containerGrid.classList.add('cursor-eraser');
  } else {
    buttonEraser.classList.remove('active');
    containerGrid.classList.remove('cursor-eraser');
  }
}

function getRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function removeGrid() {
    containerGrid.innerHTML = '';
}

function findHoveredSquares() {
  return document.querySelectorAll('.square[class*="hovered"]');
}

function clearGrid() {
  if (showChangingAlert()) {
    const areaHovered = findHoveredSquares();

    areaHovered.forEach((elementHovered) => {
      eraseSquare(elementHovered);
  });
    isPenActive = false; 
    disableElement(buttonClear, buttonEraser);
    previousOpacity = 0;
  } else {
    return
  }
}

function createGrid(gridSize) {
  const squareSize = `${100 / gridSize}%`;

  for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
          const squareToCreate = document.createElement('div');

          squareToCreate.classList.add('square', 'show-grid');
          squareToCreate.style.flexBasis = squareSize;
          containerGrid.appendChild(squareToCreate);
          squareToCreate.addEventListener('mouseenter', handleMouseEnter);
      }
  }
}

function checkHoveredSquares() {
  const hoveredSquares  = findHoveredSquares();

  if (hoveredSquares.length > 0) {
    return true;
  } else {
    return false;
  }
}

function handleButtonChangeGridSizeClick() {
  enableElement(containerChangeGridSizeSlider);
}

function showChangingAlert() {
  const confirmed = confirm('The current drawing will not be saved. Are you sure you want to proceed?');
  return confirmed;
}

function changeGridSize(newSize){
  removeGrid();
  createGrid(parseInt(newSize));
  buttonDefaultSize.style.display = 'flex';
} 


