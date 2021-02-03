// Function for creating a table and appending it to body
function addTable() {
  // create table element
  let newTable = document.createElement("table");
  newTable.style.border = "1px solid black";

  // create a tbody and thead elements
  let newTableBody = document.createElement("tbody");
  let newTableHead = document.createElement("thead");

  // create and append header row
  let headerRow = document.createElement("tr");
  newTableHead.append(headerRow);

  // create header cells and append them 
  for (let i = 1; i <= 4; i++) {
    let header = document.createElement("th");
    header.textContent = "Header " + i;
    headerRow.appendChild(header);
    header.style.border = "1px solid black";
  }
  
  // create 3 additional rows 
  for (let i = 1; i < 4; i++) {
    let row = document.createElement("tr");
    newTableBody.appendChild(row);
  }

  // create cells 
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= 4; j++) {
      let cell = document.createElement("td");
      cell.textContent = i + "," + j;
      newTableBody.children[i-1].appendChild(cell);
      cell.style.border = "1px solid black";
      cell.setAttribute("rowNum", i);
    }
  }
  
  // append child elements to table and append table to body 
  newTable.appendChild(newTableHead);
  newTable.appendChild(newTableBody);
  document.body.appendChild(newTable);
  newTable.setAttribute("id", "newTable");
  newTableHead.setAttribute("id", "newTableHead");
  newTableBody.setAttribute("id", "newTableBody");
  
}
addTable();

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

// change border function for directional buttons
function changeColor(selected, newSelected) {
  if (newSelected != null && newSelected.nodeName != "th") {
    newSelected.style.border = "5px solid black";
    selected.style.border = "1px solid black";
    newSelected.setAttribute("id", "selected");
    selected.removeAttribute("id", "selected");
  }
}

// Add event listener for each button
upButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let rowNum = selected.getAttribute("rowNum");
  console.log("upRowNum: " + rowNum);
  let newSelected = selected.parentNode.childNodes[rowNum];
  changeColor(selected, newSelected);
});

downButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let rowNum = selected.getAttribute("rowNum");
  console.log("downRowNum: " + rowNum);
  let newSelected = selected.parentNode.childNodes[rowNum];
  changeColor(selected, newSelected);
});

leftButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let newSelected = selected.previousSibling;
  changeColor(selected, newSelected);
});

rightButton.addEventListener("click", () => {
  let selected = document.getElementById("selected");
  let newSelected = selected.nextSibling;
  changeColor(selected, newSelected);
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
let highlightedCell = document.getElementById("newTableBody").children[0].children[0];
highlightedCell.style.border = "5px solid black";
highlightedCell.setAttribute("id", "selected");

