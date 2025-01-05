const gridWidth = getComputedStyle(document.body).getPropertyValue("--grid-width");
const accentColor = getComputedStyle(document.body).getPropertyValue("--accent-color");
const inactiveColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");

const sketchArea = document.querySelector("#sketch-area");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

const gridToggle = document.querySelector("#grid-toggle");

let squaresPerSide = slider.value;

let gridVisible = false;

let isDrawing = false;

function setBackgroundColor(e) {
  if (e.type === "mousedown") {
    isDrawing = true;
    e.target.style.backgroundColor = "black";
  }
  else if (e.type === "mouseover" && isDrawing) {
    e.target.style.backgroundColor = "black";
  }
  else isDrawing = false;
}


function toggleGrid() {
  gridVisible = gridVisible ? false : true;
  gridToggle.style.color = gridVisible ? accentColor : inactiveColor;

  createGridSquares();
}


function removeGrideSquares() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

function createGridSquares() {
  const numOfSquares = (squaresPerSide * squaresPerSide);
 
  removeGrideSquares();
  
  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");
    let widthAndHeight = 0;

    if (gridVisible) {
      widthAndHeight = `${(parseInt(gridWidth) / squaresPerSide) -2}px`;
      gridCell.style.border = "1px solid #6F8FAF";
    }
    else if (!gridVisible) {
      widthAndHeight = `${(parseInt(gridWidth) / squaresPerSide)}px`;
      gridCell.style.border = "none";
    }
    
    gridCell.style.width = gridCell.style.height = widthAndHeight;

    gridCell.addEventListener("mousedown", (e) => setBackgroundColor(e));
    gridCell.addEventListener("mouseover", (e) => setBackgroundColor(e));
    gridCell.addEventListener("mouseup", (e) => setBackgroundColor(e));
    
    gridCell.addEventListener("dragstart", (e) => {e. preventDefault()});

    sketchArea.appendChild(gridCell);   
  }
}


slider.oninput = function () {
  squaresPerSide = this.value;
  
  sliderValue.textContent = `${this.value} x ${this.value}`;
  
  removeGrideSquares();
  createGridSquares();
}


gridToggle.addEventListener("click", toggleGrid);


createGridSquares();
