const container = document.querySelector(".container");

// take a value and build a grid of divs inside the container //
// create a nodeList and add listener for hover to change color //
function buildGrid(value) {
    for (let i = 0; i < value; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.style.display = "flex";
        rowDiv.style.flex = "1";
        container.appendChild(rowDiv)
        for (let j = 0; j < value; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.style.flex = "1";
            innerDiv.classList.add("innerDiv");
            rowDiv.appendChild(innerDiv);
        }
    }
    selectDivs();
    listenForHover();
};

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

// select divs and add event listener //
function selectDivs() {
    return innerDiv = document.querySelectorAll(".innerDiv");
}

function listenForHover() {
    innerDiv.forEach(div => div.addEventListener("mouseover", function(e) {
        div.style.backgroundColor = "black";
    }));
};

let innerDiv = document.querySelectorAll(".innerDiv");
const changeSize = document.querySelector("#gridValue");

buildGrid(16);

changeSize.addEventListener("click", function(e){
    let value = prompt("What size grid would you like to sketch on?");
    if (value > 100 || value < 1) {
        alert("Cannot Compute");
    } else {
        clearGrid();
        buildGrid(value);
    }
});

