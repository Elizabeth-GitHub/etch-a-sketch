const numberContainers = 16;
const containerGrid = document.createElement('div');
for (let i = 0; i < numberContainers; i++) {
    for (let j = 0; j < numberContainers; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        containerGrid.appendChild(square);
        square.addEventListener('mouseenter', handleMouseEnter);
    }
}
const squares = document.querySelectorAll('.square');

containerGrid.setAttribute('id', 'container-grid');

document.body.appendChild(containerGrid);

function handleMouseEnter(event) {
    event.target.classList.add('hovered');
};

