function moveRight(gridRowIndex) {

  const currentRow = gridMatrix[gridRowIndex];


  const lastElement = currentRow.pop();

  
  currentRow.unshift(lastElement);
}

function moveLeft(gridRowIndex) {
  const currentRow = gridMatrix[gridRowIndex];
  const firstElement = currentRow.shift();
  currentRow.push(firstElement);
}

function animateGame() {

  moveRight(1);
  moveLeft(2);

  moveRight(4);
  moveRight(5);
  moveRight(6);
}
