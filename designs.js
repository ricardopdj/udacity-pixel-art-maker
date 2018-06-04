let rows = document.getElementById("inputHeight");
let columns = document.getElementById("inputWeight");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let pixelCanvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener("submit", makeGrid);

document.addEventListener("click", function (e) {
    let pixel = e.target;
    if (pixel.classList.contains("pixel")) {
        if (pixel.classList.contains("painted")) {
            pixel.style.backgroundColor = "transparent";
            pixel.classList.remove("painted");
        } else {
            pixel.style.backgroundColor = colorPicker.value;
            pixel.classList.add("painted");
        }

    }

})

function makeGrid(e) {
    e.preventDefault();
    let content = "";

    for (let indexRows = 0; indexRows < rows.value; indexRows++) {
        content += "<tr>";
        for (let indexCol = 0; indexCol < columns.value; indexCol++) {
            content += "<td class='pixel'></td>";
        }
        content += "</tr>";
    }
    pixelCanvas.innerHTML = content;
}
