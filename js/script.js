// Take a value and build a grid of divs inside the container //
// Create a nodeList and add listener for hover to change color //
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

function selectDivs() {
    innerDiv = document.querySelectorAll(".innerDiv");
}

function listenForHover() {
    innerDiv.forEach(div => div.addEventListener("mouseover", function(e) {
        if (random) {
            color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        } else {
            color = "rgb(0,0,0)"
        }
        if (scaling) {
            const colorAdd = 25.5;
            rValue -= colorAdd;
            gValue -= colorAdd;
            bValue -= colorAdd;
            color = `rgba(${rValue},${gValue},${bValue})`
        }
        div.style.backgroundColor = color;
    }));
};

const container = document.querySelector(".container");
let innerDiv = document.querySelectorAll(".innerDiv");
const changeSize = document.querySelector("#gridValue");
const randomColor = document.querySelector("#randomColor");
const clear = document.querySelector("#clearGrid");
const greyScale = document.querySelector("#greyScale");
let value = 16;
let rValue = 0;
let gValue = 0;
let bValue = 0;
let color = `rgb(${rValue},${gValue},${bValue})`;
let random = false;
let scaling = false;

buildGrid(value);

clear.addEventListener("click", function(e) {
    clearGrid();
    buildGrid(value);
    listenForHover();
})

changeSize.addEventListener("click", function(e){
    value = parseInt(prompt("What size grid would you like to sketch on?"));
    if (value > 100 || value < 1) {
        alert("Cannot Compute");
    } else {
        clearGrid();
        buildGrid(value);
    }
});

randomColor.addEventListener("click", function(e){
    if (random) {
        random = false;
    } else {
        random = true;
    }    
});

greyScale.addEventListener("click", function(e) {
    if (scaling) {
        scaling = false;
    } else {
        scaling = true;
        rValue = 255;
        gValue = 255;
        bValue = 255;
        color = `rgb(${rValue},${gValue},${bValue})`;
    }
});