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
            switch (String(this.style.backgroundColor)) {
                case "rgb(230, 230, 230)":
                    color = "rgb(204,204,204)";
                    break
                case "rgb(204, 204, 204)":
                    color = "rgb(179,179,179)";
                    break
                case "rgb(179, 179, 179)":
                    color = "rgb(153,153,153)";
                    break
                case "rgb(153, 153, 153)":
                    color = "rgb(128, 128, 128)";
                    break
                case "rgb(128, 128, 128)":
                    color = "rgb(102,102,102)";
                    break
                case "rgb(102, 102, 102)":
                    color = "rgb(77,77,77)"
                    break
                case "rgb(77, 77, 77)":
                    color = "rgb(51,51,51)";
                    break
                case "rgb(51, 51, 51)":
                    color = "rgb(26,26,26)";
                case "rgb(26, 26, 26)":
                    color = "rgb(0, 0, 0";
                    break
                case "rgb(0, 0, 0)":
                    color = "rbg(0, 0, 0)";
                    break
                default:
                    color = "rgb(230,230,230)";
            }
            console.log(div.style.backgroundColor);
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
        clearGrid();
        buildGrid(value);
        rValue = 255;
        gValue = 255;
        bValue = 255;
        color = `rgb(${rValue},${gValue},${bValue})`;
    }
});