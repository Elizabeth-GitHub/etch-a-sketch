const numberContainers = 16;
const containerGrid = document.createElement('div');
for (let i = 0; i < numberContainers; i++) {
    for (let j = 0; j < numberContainers; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        containerGrid.appendChild(square);
    }
}

containerGrid.setAttribute('id', 'container-grid');
containerGrid.classList.add('container');

document.body.appendChild(containerGrid);


