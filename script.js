/*let newTable = document.createElement("table");

// Create rows and add them to table
for (let i = 0; i < 4; i++) {
  let newRow = document.createElement("tr");
  newTable.appendChild(newRow);
}

// Create header rows and add them to table
for (let i = 0; i < 4; i++) {
  let header = document.createElement("th");
  header.textContent = "Header " + i;
  newTable.children[0].appendChild(header);
}
*/

// Create cells and add them to rows, 
// The non header cells should contain their position. 
//The upper left cell should contain the text "1, 1", the cell to its right "1, 2", 
//the cell below it "2, 1" and so on

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
    let headerText = document.createTextNode("Header " + i);
    header.appendChild(headerText);
    newTable.children[0].appendChild(header);
    header.style.border = "1px solid black";
  }

  // create cells 
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j <= 4; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(i + "," + j);
      cell.appendChild(cellText);
      newTable.children[i].appendChild(cell);
      cell.style.border = "1px solid black";
    }
  }
  
  // append to body 
  document.body.appendChild(newTable);
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
  console.log("up button clicked");
});
downButton.addEventListener("click", () => {
  console.log("down button clicked");
});
leftButton.addEventListener("click", () => {
  console.log("left button clicked");
});
rightButton.addEventListener("click", () => {
  console.log("right button clicked");
});

// Create button labeled "Marked Cell"
let markCellButton = document.createElement("button");
markCellButton.textContent = "Marked Cell";
buttonDiv.appendChild(markCellButton);
markCellButton.addEventListener("click", () => {
  console.log("mark cell button clicked");
});


// When the page is loaded, the upper-left non-header cell of the table should be 'selected'.
// This is denoted by it having a thicker border than the other cells
let highlightedCell = document.getElementById("newTable").children[0];
highlightedCell.style.border = "thick solid black";
// If you push the directional buttons, other cells should be selected instead. 
//So if you press the right button, cell 1,1 should no longer be selected 
// and 1, 2 should be selected instead. (siblings??)

// If you are already on the top row and hit 'up' nothing should happen 
//(you should not be able to move into the header cells). 
//Likewise if you are all the way right and hit right or all the way at the bottom and hit down.

// Hitting the "Mark Cell" button should permanently change the background 
// of the selected cell to yellow. This should persist even after other cells are selected or marked.


/*
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];


let newTable = document.createElement("table");


// add <tr> elements (need an additional row for headers, thus <= and not < )
for (let i = 0; i <= MOUNTAINS.length; i++) {
    let newRow = document.createElement("tr");
    newTable.appendChild(newRow);   
}

// add <th> elements
let keyArr = Object.keys(MOUNTAINS[0]);
for (let i = 0; i < keyArr.length; i++) {
    let header = document.createElement("th");
    header.textContent = keyArr[i];
    newTable.children[0].appendChild(header);
}

// add <td> elements
for (let i = 1; i <= MOUNTAINS.length; i++) {
    for (prop in MOUNTAINS[i]) {
      let col = document.createElement("td");
      col.textContent = MOUNTAINS[i].prop;
      newTable.children[i].appendChild(col);
    }

}

newTable.style.border = "thick solid black";
document.getElementById("mountains").appendChild(newTable);
*/


/*
// cell moving function for directional buttons
function moveCellUp() {
  console.log("Moving cell up");
}

function moveCellDown() {
  console.log("Moving cell down");
}

function moveCellLeft() {
  console.log("Moving cell left");
}

function moveCellRight() {
  console.log("Moving cell right");
}
// highlighting function for marked cell button
function highlightCell() {
  console.log("highlighting cell");
}

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
upButton.addEventListener("click", moveCellUp);
downButton.addEventListener("click", moveCellDown);
leftButton.addEventListener("click", moveCellLeft);
rightButton.addEventListener("click", moveCellRight);

// Create button labeled "Marked Cell"
let markCellButton = document.createElement("button");
markCellButton.textContent = "Marked Cell";
buttonDiv.appendChild(markCellButton);
markCellButton.addEventListener("click", highlightCell);
*/