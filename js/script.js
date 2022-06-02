const container = document.querySelector(".container");

// take a value and build a grid of divs inside the container //

function buildGrid(value) {
    for (let i = 0; i < value; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.style.display = "flex"
        rowDiv.style.flex = "1";
        container.appendChild(rowDiv)
        for (let j = 0; j < value; j++) {
            let innerDiv = document.createElement("div");
            innerDiv.style.flex = "1";
            rowDiv.appendChild(innerDiv);
        }
    }
}

buildGrid(16);