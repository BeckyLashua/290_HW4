// Create border and highlight top left corner (maybe use function for highlighting a cell)
// highlightCell()

function addTable() {
  // craete table element
  let newTable = document.createElement("table");
  newTable.style.border = "1px solid black";

  // create 4 rows 
  for (let i = 0; i < 4; i++) {
    let row = document.createElement("tr");
    newTable.appendChild(row);
  }
  // create headers and append them 
  for (let i = 1; i <= 4; i++) {
    let header = document.createElement("th");
    header.textContent = "Header " + i;
    newTable.children[0].appendChild(header);
    header.style.border = "1px solid black";
  }
  // create cells 
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= 4; j++) {
      let cell = document.createElement("td");
      cell.textContent = i + "," + j;
      newTable.children[i].appendChild(cell);
      cell.style.border = "1px solid black";
    }
  }
  
  // append to body 
  document.body.appendChild(newTable);
  newTable.setAttribute("id", "newTable");
}
addTable();
//document.body.appendChild(newTable);

// Create a div for the buttons
let buttonDiv = document.createElement("div");
document.body.appendChild(buttonDiv); 

// Create 4 directional buttons (up, down, left right)
let upButton = document.createElement("button");
upButton.textContent = "Up";
buttonDiv.appendChild(upButton);
let downButton = document.createElement("button");
downButton.textContent = "Down";
buttonDiv.appendChild(downButton);
let leftButton = document.createElement("button");
leftButton.textContent = "Left";
buttonDiv.appendChild(leftButton);
let rightButton = document.createElement("button");
rightButton.textContent = "Right";
buttonDiv.appendChild(rightButton);

// Add event listener for each button
upButton.addEventListener("click", () => {

});

downButton.addEventListener("click", () => {

});

leftButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let newSelected = selected.previousSibling;
  if (newSelected != null) {
    newSelected.style.border = "5px solid black";
    selected.style.border = "1px solid black";
    newSelected.setAttribute("id", "selected");
    selected.removeAttribute("id", "selected");
  }
});

rightButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let newSelected = selected.nextSibling;
  if (newSelected != null) {
    newSelected.style.border = "5px solid black";
    selected.style.border = "1px solid black";
    newSelected.setAttribute("id", "selected");
    selected.removeAttribute("id", "selected");
  }
});

// Create button labeled "Marked Cell"
let markCellButton = document.createElement("button");
markCellButton.textContent = "Marked Cell";
buttonDiv.appendChild(markCellButton);
markCellButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  selected.style.backgroundColor = "yellow";
});


// When the page is loaded, the upper-left non-header cell of the table should be 'selected'.
// This is denoted by it having a thicker border than the other cells
let highlightedCell = document.getElementById("newTable").children[1].children[0];
highlightedCell.style.border = "5px solid black";
highlightedCell.setAttribute("id", "selected");
// If you push the directional buttons, other cells should be selected instead. 
//So if you press the right button, cell 1,1 should no longer be selected 
// and 1, 2 should be selected instead. (siblings??)

// If you are already on the top row and hit 'up' nothing should happen 
//(you should not be able to move into the header cells). 
//Likewise if you are all the way right and hit right or all the way at the bottom and hit down.

// Hitting the "Mark Cell" button should permanently change the background 
// of the selected cell to yellow. This should persist even after other cells are selected or marked.

