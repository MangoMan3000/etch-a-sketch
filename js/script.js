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
    listenForHover(color);
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

function listenForHover(color) {
    innerDiv.forEach(div => div.addEventListener("mouseover", function(e) {
        div.style.backgroundColor = color;
    }));
};

let innerDiv = document.querySelectorAll(".innerDiv");
const changeSize = document.querySelector("#gridValue");
const randomColor = document.querySelector("#randomColor");
let redValue = 0;
let greenValue = 0;
let blueValue = 0;
let alphaValue = 1;
let color = `rgba(${redValue},${greenValue},${blueValue},${alphaValue})`;

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

randomColor.addEventListener("click", function(e){
    redValue = Math.floor(Math.random()*256);
    greenValue = Math.floor(Math.random()*256)
    blueValue = Math.floor(Math.random()*256)
    color = `rgba(${redValue},${greenValue},${blueValue},${alphaValue})`;
    listenForHover(color);
});