function paintCell(event) {
    let target = event.target;
    if (target.className !== "gridContainer") {
    target.style.backgroundColor = "red";
    }
}

function createCells() {
    for (let i = 0;i<cellAmount;i++) {
        let cell = document.createElement("div");
        cell.style.width = cellWidth;
        cell.style.height = cellHeight; 
        gridContainer.appendChild(cell);
    }
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

function changeGridSize(gridContainerNode,newCellPerSide) {
    removeAllChildNodes(gridContainerNode);

    cellPerSide = newCellPerSide;
    cellAmount = cellPerSide**2;
    cellHeight = (100/cellPerSide).toString()+"%";
    cellWidth= (100/cellPerSide).toString()+"%";

    createCells();
}




const gridContainer = document.querySelector(".gridContainer");
const gridSizeButton = document.querySelector(".gridSizeButton");
let cellPerSide = 16;
let cellAmount = cellPerSide**2;


let cellHeight = (100/cellPerSide).toString()+"%";
let cellWidth = (100/cellPerSide).toString()+"%";

createCells()

gridContainer.addEventListener("mouseover", (event) => paintCell(event));

gridSizeButton.addEventListener("click", () => {
    let newCellPerSide = prompt("Insert squares per side (between 1-100):")    
    if (!newCellPerSide) {
        return
    }
    if (newCellPerSide > 100 ) {
        alert("Invalid Value!")
        return
    }
    changeGridSize(gridContainer,newCellPerSide);

})
