const GRIDSIDE = 600;
let squaresPerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
  const numOfSquares = (squaresPerSide * squaresPerSide);
  const widthAndHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthAndHeight
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}


function removeGrideCells() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }

}


slider.oninput = function () {
  let text = `${this.value} x ${this.value}`
  sliderValue.innerHTML = text;
  removeGrideCells();
  createGridCells(this.value);
}
