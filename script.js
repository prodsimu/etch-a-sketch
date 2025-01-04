const gridside = 600;
let rows = 16
let cols = 16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridside}px`
sketchArea.style.height = `${gridside}px`

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells() {
  for (let i = 0; i < (rows * cols); i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = `${(gridside / cols) - 2}px`
    gridCell.style.height = `${(gridside / rows) - 2}px`
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}


createGridCells();
